import Skawe from 'meteor/skawe:lib';
import Users from './collection.js';

Users.helpers({getCollection: () => Users});
Users.helpers({getCollectionName: () => 'users'});

/**
 * @summary Get a user
 * @param {String} userOrUserId
 */
Users.getUser = function (userOrUserId) {
  if (typeof userOrUserId === 'undefined') {
    if (!Meteor.user()) {
      throw new Error();
    } else {
      return Meteor.user();
    }
  } else if (typeof userOrUserId === 'string') {
    return Users.findOne(userOrUserId);
  } else {
    return userOrUserId;
  }
};

/**
 * @summary Get a user's username (unique, no special characters or spaces)
 * @param {Object} user
 */
Users.getUserName = function (user) {
  try{
    if (user.username)
      return user.username;
    if (user && user.services && user.services.twitter && user.services.twitter.screenName)
      return user.services.twitter.screenName;
  }
  catch (error){
    console.log(error); // eslint-disable-line
    return null;
  }
};
Users.helpers({getUserName: function () {return Users.getUserName(this);}});
Users.getUserNameById = function (userId) {return Users.getUserName(Users.findOne(userId))};

/**
 * @summary Get a user's display name (not unique, can take special characters and spaces)
 * @param {Object} user
 */
Users.getDisplayName = function (user) {
  if (typeof user === 'undefined') {
    return '';
  } else {
    return (user.skawe && user.skawe.displayName) ? user.skawe.displayName : Users.getUserName(user);
  }
};
Users.helpers({getDisplayName: function () {return Users.getDisplayName(this);}});
Users.getDisplayNameById = function (userId) {return Users.getDisplayName(Users.findOne(userId));};

/**
 * @summary Get a user's profile URL
 * @param {Object} user (note: we only actually need either the _id or slug properties)
 * @param {Boolean} isAbsolute
 */
Users.getProfileUrl = function (user, isAbsolute) {
  if (typeof user === 'undefined') {
    return '';
  }
  isAbsolute = typeof isAbsolute === 'undefined' ? false : isAbsolute; // default to false
  var prefix = isAbsolute ? Skawe.utils.getSiteUrl().slice(0,-1) : '';
  if (user.skawe && user.skawe.slug) {
    return `${prefix}/users/${user.skawe.slug}`;
  } else {
    return '';
  }
};
Users.helpers({getProfileUrl: function (isAbsolute) {return Users.getProfileUrl(this, isAbsolute);}});

/**
 * @summary Get a user's account edit URL
 * @param {Object} user (note: we only actually need either the _id or slug properties)
 * @param {Boolean} isAbsolute
 */
Users.getEditUrl = function (user, isAbsolute) {
  return `${Users.getProfileUrl(user, isAbsolute)}/edit`;
};
Users.helpers({getEditUrl: function (isAbsolute) {return Users.getEditUrl(this, isAbsolute);}});

/**
 * @summary Get a user's email
 * @param {Object} user
 */
Users.getEmail = function (user) {
  if(user.skawe && user.skawe.email){
    return user.skawe.email;
  }else{
    return null;
  }
};
Users.helpers({getEmail: function () {return Users.getEmail(this);}});
Users.getEmailById = function (userId) {return Users.getEmail(Users.findOne(userId));};

/**
 * @summary Get a user's email hash
 * @param {Object} user
 */
Users.getEmailHash = function (user) {
  return user.skawe.emailHash;
};
Users.helpers({getEmailHash: function () {return Users.getEmailHash(this);}});
Users.getEmailHashById = function (userId) {return Users.getEmailHash(Users.findOne(userId));};

Users.adminUsers = function (options) {
  return this.find({isAdmin : true}, options).fetch();
};

Users.getCurrentUserEmail = function () {
  return Meteor.user() ? Users.getEmail(Meteor.user()) : '';
};

Users.findByEmail = function (email) {
  return Users.findOne({'skawe.email': email});
};
