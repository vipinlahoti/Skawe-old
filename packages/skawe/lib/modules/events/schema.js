/*
 * Events schema
 */

import { Utils } from 'meteor/vulcan:core';

const schema = {
  /**
    ID
  */
  _id: {
    type: String,
    canRead: ['owners'],
    optional: true,
  },
  /**
    Timetstamp of domain creation
  */
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['owners'],
    onCreate: () => {
      return new Date();
    },
  },
  /**
    Event name
  */
  name: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    The ticket author's `_id`.
  */
  userId: {
    type: String,
    optional: true,
    input: 'select',
    canRead: ['guests'],
    canCreate: ['members'],
    hidden: true,
    resolveAs: {
      fieldName: 'user',
      type: 'User',
      relation: 'hasOne',
    }
  }
  
};

export default schema;
