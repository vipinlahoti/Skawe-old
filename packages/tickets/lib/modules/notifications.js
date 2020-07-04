import Skawe from 'meteor/skawe:lib';
import Users from 'meteor/skawe:users';
import Posts from './collection.js'

Posts.getNotificationProperties = data => {
  const post = data.post;
  const postAuthor = Users.findOne(post.userId);
  const properties = {
    postAuthorName : Posts.getAuthorName(post),
    postTitle : Skawe.utils.cleanUp(post.title),
    profileUrl: Users.getProfileUrl(postAuthor, true),
  };

  return properties;
};
