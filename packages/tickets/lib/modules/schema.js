import Telescope from 'meteor/nova:lib';
import Users from 'meteor/nova:users';
import SimpleSchema from 'simpl-schema';
import Posts from './collection.js';

/**
 * @summary Posts config namespace
 * @type {Object}
 */
Posts.config = {};

Posts.config.STATUS_OPEN = 1;
Posts.config.STATUS_CLOSED = 2;
Posts.config.STATUS_SPAM = 3;
Posts.config.STATUS_DELETED = 4;

Posts.formGroups = {
  admin: {
    name: 'admin',
    order: 2
  }
};

// check if user can create a new post
const canInsert = user => Users.canDo(user, 'posts.new');

// check if user can edit a post
const canEdit = Users.canEdit;

// check if user can edit *all* posts
const canEditAll = user => Users.canDo(user, 'posts.edit.all');

/**
 * @summary Posts schema
 * @type {SimpleSchema}
 */
Posts.schema = {
  /**
    ID
  */
  _id: {
    type: String,
    optional: true,
    publish: true
  },
  /**
    Timetstamp of post creation
  */
  createdAt: {
    type: Date,
    optional: true,
    publish: true // publish so that admins can sort pending posts by createdAt
  },
  /**
    Title
  */
  title: {
    type: String,
    optional: false,
    max: 500,
    insertableIf: canInsert,
    editableIf: canEdit,
    control: 'text',
    publish: true,
    order: 20
  },
  /**
    Slug
  */
  slug: {
    type: String,
    optional: true,
    publish: true,
  },
  /**
    Post body (markdown)
  */
  body: {
    type: String,
    optional: true,
    max: 3000,
    insertableIf: canInsert,
    editableIf: canEdit,
    control: 'textarea',
    publish: true,
    order: 30
  },
  /**
    Timestamp of the last comment
  */
  lastCommentedAt: {
    type: Date,
    optional: true,
    publish: true,
  },
  /**
    The post's status. One of open (`1`), close (`2`), or spam (`3`), or delete (`4`)
  */
  status: {
    type: Number,
    optional: true,
    insertableIf: canEditAll,
    editableIf: canEditAll,
    control: 'select',
    publish: true,
    autoValue: function () {
      // only provide a default value
      // 1) this is an insert operation
      // 2) status field is not set in the document being inserted
      var user = Users.findOne(this.userId);
      if (this.isInsert && !this.isSet)
        return Posts.getDefaultStatus(user);
    },
    form: {
      noselect: true,
      options: Telescope.statuses,
      group: 'admin'
    },
    group: Posts.formGroups.admin
  },
  /**
    Whether the post is inactive. Inactive posts see their score recalculated less often
  */
  inactive: {
    type: Boolean,
    optional: true,
    publish: false,
    defaultValue: false
  },
  /**
    Save info for later spam checking on a post. We will use this for the akismet package
  */
  userIP: {
    type: String,
    optional: true,
    publish: false
  },
  userAgent: {
    type: String,
    optional: true,
    publish: false
  },
  referrer: {
    type: String,
    optional: true,
    publish: false
  },
  /**
    The post author's name
  */
  author: {
    type: String,
    optional: true,
    publish: true,
  },
  /**
    The post author's `_id`.
  */
  userId: {
    type: String,
    optional: true,
    control: 'select',
    publish: true,
    form: {
      group: 'admin',
      options() {
        return Users.find().map(user => {
          return {
            value: user._id,
            label: Users.getDisplayName(user)
          };
        });
      }
    },
    join: {
      joinAs: 'user',
      collection: () => Users
    }
  }
};

/**
 * @summary Attach schema to Posts collection
 */
Posts.attachSchema(Posts.schema);
