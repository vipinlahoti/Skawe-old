/*
 * Instances schema
 */

import { getPageUrl } from './helpers.js';


/**
 * @summary Instances schema
 * @type {Object}
 */
const schema = {
  /**
    ID
  */
  _id: {
    type: String,
    optional: true,
    canRead: ['owners'],
  },
  /**
    Timetstamp of instance creation
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
    instance ID for linode check
  */
  instanceId: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Type for linode check
  */
  type: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    cpu
  */
  cpu: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Distribution image
  */
  image: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Plan label
  */
  label: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Plan RAM
  */
  ram: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Region
  */
  region: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Plan Storage
  */
  storage: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Plan Bandwidth
  */
  transfer: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Instance Status * Running / Stopped...
  */
  status: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Save info for later spam checking on a instance. We will use this for the akismet package
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
    The instance author's `_id`.
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
  /**
    Price
  */
  priceHr: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Price
  */
  priceMo: {
    type: String,
    optional: true,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
    onCreate: ({ document: instance }) => {
      return Math.floor((instance.priceHr * 24) * 30);
    },
    onUpdate: ({ data }) => {
      if (data.priceHr) {
        return Math.floor((data.priceHr * 24) * 30);
      }
    },
  },
  /**
    Backup Price hr
  */
  backupPriceHr: {
    type: String,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Backup mo
  */
  backupPriceMo: {
    type: String,
    optional: true,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
    onCreate: ({ document: instance }) => {
      return Math.floor((instance.backupPriceHr * 24) * 30);
    },
    onUpdate: ({ data }) => {
      if (data.backupPriceHr) {
        return Math.floor((data.backupPriceHr * 24) * 30);
      }
    },
  },
  /**
    backupEnabled true / false
  */
  backupEnabled: {
    type: Boolean,
    optional: true,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  /**
    Timetstamp of Backup Cancellation
  */
  backupCancelledAt: {
    type: String,
    optional: true,
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },

  // GraphQL-only fields
  pagePath: {
    type: String,
    optional: true,
    canRead: ['owners'],
    resolveAs: {
      type: 'String',
      resolver: instance => {
        return getPageUrl(instance, false);
      },
    },
  },

  pageUrl: {
    type: String,
    optional: true,
    canRead: ['owners'],
    resolveAs: {
      type: 'String',
      resolver: instance => {
        return getPageUrl(instance, true);
      }
    }
  }
};

export default schema;
