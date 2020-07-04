import Skawe from 'meteor/slawe:lib';
import Posts from './collection.js';
import Users from 'meteor/slawe:users';

Posts.helpers({getCollection: () => Posts});
Posts.helpers({getCollectionName: () => 'posts'});

/**
 * @summary Get URL of a post page.
 * @param {Object} post
 */
Posts.getPageUrl = function(post, isAbsolute = false){
  const prefix = isAbsolute ? Skawe.utils.getSiteUrl().slice(0,-1) : '';
  return `${prefix}/accounts/tickets/${post._id}/${post.slug}`;
};

/**
 * @summary Get a post author's name
 * @param {Object} post
 */
Posts.getAuthorName = function (post) {
  var user = Users.findOne(post.userId);
  if (user) {
    return user.getDisplayName();
  } else {
    return post.author;
  }
};

/**
 * @summary Check if a post is approved
 * @param {Object} post
 */
Posts.isClosed = function (post) {
  return post.status === Posts.config.STATUS_CLOSED;
};

/**
 * @summary Get the complete thumbnail url whether it is hosted on Embedly or on an external website, or locally in the app.
 * @param {Object} post
 */
Posts.getThumbnailUrl = (post) => {
  const thumbnailUrl = post.thumbnailUrl;
  if (!!thumbnailUrl) {
    return thumbnailUrl.indexOf('//') > -1 ? Skawe.utils.addHttp(thumbnailUrl) : Skawe.utils.getSiteUrl().slice(0,-1) + thumbnailUrl;
  }
};
