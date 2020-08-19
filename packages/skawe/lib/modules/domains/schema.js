/*
 * Domains schema
 */

import { Utils } from 'meteor/vulcan:core';
import { getPageUrl } from './helpers.js';

const schema = {
  /**
    ID
  */
  _id: {
    type: String,
    optional: true,
    canRead: ['owners']
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
    Domain name
  */
  name: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Domain ID for domain check
  */
  domainId: {
    type: Number,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Domain Status Active / Inactive
  */
  status: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Save info for later spam checking on a domain. We will use this for the akismet package
  */
  userIP: {
    type: String,
    optional: true,
    canRead: ['admins'],
  },
  userAgent: {
    type: String,
    optional: true,
    canRead: ['admins'],
  },
  referrer: {
    type: String,
    optional: true,
    canRead: ['admins'],
  },
  /**
    The domain author's `_id`.
  */
  userId: {
    type: String,
    optional: true,
    input: 'select',
    canRead: ['owners'],
    canCreate: ['members'],
    hidden: true,
    resolveAs: {
      fieldName: 'user',
      type: 'User',
      relation: 'hasOne',
    },
  },

  // GraphQL-only fields
  pagePath: {
    type: String,
    optional: true,
    canRead: ['owners'],
    resolveAs: {
      resolver: domain => getPageUrl(domain, false),
    },
  },

  pageUrl: {
    type: String,
    optional: true,
    canRead: ['owners'],
    resolveAs: {
      resolver: domain => getPageUrl(domain, false),
    },
  },
};

export default schema;
