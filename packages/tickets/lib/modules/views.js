import Users from 'meteor/nova:users';
import Posts from './collection.js'

/**
 * @summary Post views are filters used for subscribing to and viewing posts
 * @namespace Posts.views
 */
Posts.views = {};

/**
 * @summary Add a post view
 * @param {string} viewName - The name of the view
 * @param {function} [viewFunction] - The function used to calculate query terms. Takes terms and baseParameters arguments
 */
Posts.views.add = function (viewName, viewFunction) {
  Posts.views[viewName] = viewFunction;
};

/**
 * @summary Base parameters that will be common to all other view unless specific properties are overwritten
 */
Posts.views.baseParameters = {
  selector: {
    status: Posts.config.STATUS_APPROVED,
    isFuture: {$ne: true} // match both false and undefined
  }
};

/**
 * @summary New view
 */
Posts.views.add("new", function (terms) {
  return {
    ...Posts.views.baseParameters,
    options: {sort: {sticky: -1, postedAt: -1}}
  };
});

/**
 * @summary User posts view
 */
Posts.views.add("userPosts", function (terms) {
  return {
    selector: {
      userId: terms.userId,
      status: Posts.config.STATUS_APPROVED,
      isFuture: {$ne: true}
    },
    options: {
      limit: 5,
      sort: {
        postedAt: -1
      }
    }
  };
});
