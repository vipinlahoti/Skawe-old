import SimpleSchema from 'simpl-schema';
import Users from 'meteor/skawe:users';
import { CloudInstances } from './collection.js';

// check if user can edit *all* users
const canEditAll = user => Users.canDo(user, 'users.edit.all');

/**
 * @summary CloudInstances schema
 * @type {SimpleSchema}
 */
CloudInstances.schema = new SimpleSchema({
  _id: {
    type: String,
    publish: true,
    optional: true
  },
  createdAt: {
    type: Date,
    publish: true,
    optional: true
  },
  /**
    Save info for later spam checking on a cloud instance. We will use this for the akismet package
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
    The post author's `_id`.
  */
  userId: {
    type: String,
    publish: true
  },
  /**
    Cloud Instancce ID for linode check
  */
  cloudInstanceId: {
    type: String,
    publish: true,
    control: 'text'
  },
  /**
    cpu
  */
  cpu: {
    type: String,
    publish: true
  },
  /**
    Distribution image
  */
  image: {
    type: String,
    publish: true
  },
  /**
    Plan label
  */
  label: {
    type: String,
    publish: true
  },
  /**
    Plan RAM
  */
  ram: {
    type: String,
    publish: true
  },
  /**
    Region
  */
  region: {
    type: String,
    publish: true
  },
  /**
    Plan Storage
  */
  storage: {
    type: String,
    publish: true
  },
  /**
    Plan Bandwidth
  */
  transfer: {
    type: String,
    publish: true
  }
});
// }

/**
 * @summary Attach schema to CloudInstances (Meteor.users at the moment) collection
 */
CloudInstances.attachSchema(CloudInstances.schema);
