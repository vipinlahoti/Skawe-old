import Skawe from 'meteor/skawe:lib';
import Users from 'meteor/skawe:users';
import { Messages } from 'meteor/skawe:core';
import Posts from './collection.js'

/**
 * Post Methods
 */

Posts.methods = {};
/**
 * @summary Insert a post in the database (note: optional post properties not listed here)
 * @param {Object} post - the post being inserted
 * @param {string} post.userId - the id of the user the post belongs to
 * @param {string} post.title - the post's title
 */
Posts.methods.new = function (post) {

  const currentUser = Users.findOne(post.userId);
  post = Skawe.callbacks.run('posts.new.sync', post, currentUser);
  post._id = Posts.insert(post);

  // note: query for post to get fresh document with collection-hooks effects applied
  Skawe.callbacks.runAsync('posts.new.async', Posts.findOne(post._id));

  return post;
};

// ------------------------------------------------------------------------------------------- //
// ----------------------------------------- Methods ----------------------------------------- //
// ------------------------------------------------------------------------------------------- //

Meteor.methods({

  /**
   * @summary Meteor method for submitting a post from the client
   * NOTE: the current user and the post author user might sometimes be two different users!
   * Required properties: title
   * @memberof Posts
   * @isMethod true
   * @param {Object} post - the post being inserted
   */
  'posts.new': function(post){

    Posts.simpleSchema().namedContext('posts.new').validate(post);

    post = Skawe.callbacks.run('posts.new.method', post, Meteor.user());

    if (Meteor.isServer && this.connection) {
      post.userIP = this.connection.clientAddress;
      post.userAgent = this.connection.httpHeaders['user-agent'];
    }

    return Posts.methods.new(post);
  },

  /**
   * @summary Meteor method for approving a post
   * @memberof Posts
   * @isMethod true
   * @param {String} postId - the id of the post to approve
   */
  'posts.approve': function(postId){

    check(postId, String);

    const post = Posts.findOne(postId);
    const now = new Date();

    if (Users.canDo(Meteor.user(), 'posts.new.approved')) {

      const set = {status: Posts.config.STATUS_APPROVED};

      if (!post.postedAt) {
        set.postedAt = now;
      }

      Posts.update(post._id, {$set: set});

      Skawe.callbacks.runAsync('posts.approve.async', post);

    } else {
      Messages.flash('You need to be an admin to do that.', 'error');
    }
  },

  /**
   * @summary Meteor method for deleting a post
   * @memberof Posts
   * @isMethod true
   * @param {String} postId - the id of the post
   */
  'posts.remove': function(postId) {

    check(postId, String);
    
    const post = Posts.findOne({_id: postId});

    if (!Meteor.userId() || !Users.canEdit(Meteor.user(), post)){
      throw new Meteor.Error(606, 'You need permission to edit or delete a post');
    }

    // decrement post count
    Users.update({_id: post.userId}, {$inc: {'postCount': -1}});

    // delete post
    Posts.remove(postId);

    Skawe.callbacks.runAsync('posts.remove.async', post);
  }

});
