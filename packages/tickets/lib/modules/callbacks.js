import Skawe from 'meteor/skawe:lib';
import Users from 'meteor/skawe:users';
import Posts from './collection.js'


/**
 * @summary Rate limiting
 */
function PostsNewRateLimit (post, user) {

  if(!Users.isAdmin(user)){

    const timeSinceLastPost = Users.timeSinceLast(user, Posts);
    const numberOfPostsInPast24Hours = Users.numberOfItemsInPast24Hours(user, Posts);
    const postInterval = Math.abs(parseInt(Skawe.settings.get('postInterval', 30)));
    const maxPostsPer24Hours = Math.abs(parseInt(Skawe.settings.get('maxPostsPerDay', 30)));

    // check that user waits more than X seconds between posts
    if(timeSinceLastPost < postInterval)
      throw new Meteor.Error(604, 'Please wait' + (postInterval - timeSinceLastPost) + 'seconds before submitting again');

    // check that the user doesn't post more than Y posts per day
    if(numberOfPostsInPast24Hours > maxPostsPer24Hours)
      throw new Meteor.Error(605, 'Sorry you cannot submit more than' + maxPostsPer24Hours + 'posts per day');

  }

  return post;
}
Skawe.callbacks.add('posts.new.method', PostsNewRateLimit);

// ------------------------------------- posts.new.async -------------------------------- //

/**
 * @summary Increment the user's post count
 */
function PostsNewIncrementPostCount (post) {
  const userId = post.userId;
  Users.update({_id: userId}, {$inc: {'postCount': 1}});
}
Skawe.callbacks.add('posts.new.async', PostsNewIncrementPostCount);

// ------------------------------------- users.remove.async -------------------------------- //
function UsersRemoveDeletePosts (user, options) {
  if (options && options.deletePosts) {
    Posts.remove({userId: user._id});
  } else {
    // not sure if anything should be done in that scenario yet
    // Posts.update({userId: userId}, {$set: {author: '\[deleted\]'}}, {multi: true});
  }
}
Skawe.callbacks.add('users.remove.async', UsersRemoveDeletePosts);
