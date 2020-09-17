/*
 * Plans schema
 */

const schema = {
  /**
    ID
  */
  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  /**
    Timetstamp of distribution creation
  */
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['admins'],
    onCreate: () => {
      return new Date();
    },
  },
  /**
    Plan ID for linode check
  */
  planId: {
    type: String,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    label
  */
  label: {
    type: String,
    optional: true,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    Hourly Price
  */
  priceHr: {
    type: String,
    optional: true,
    input: 'text',
    canRead: ['admins'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    Monthly Price
  */
  priceMo: {
    type: String,
    optional: true,
    input: 'text',
    canRead: ['admins'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    Hourly Sell Price
  */
  sellPriceHr: {
    label: 'Sell Price - Hourly',
    type: String,
    optional: true,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    Monthly Sell Price
  */
  sellPriceMo: {
    label: 'Sell Price - Monthly',
    type: String,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ document: plan }) => {
      return Math.floor((plan.sellPriceHr * 24) * 30);
    },
    onUpdate: ({ data }) => {
      if (data.sellPriceHr) {
        return Math.floor((data.sellPriceHr * 24) * 30);
      }
    },
  },
  /**
    RAM size
  */
  memory: {
    label: 'RAM Size in GB',
    type: String,
    optional: true,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    Disk size
  */
  disk: {
    label: 'Disk Size in GB',
    type: String,
    optional: true,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    Bandwidth
  */
  transfer: {
    label: 'Bandwidth in GB',
    type: String,
    optional: true,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    CPU
  */
  vcpu: {
    type: String,
    optional: true,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    class
  */
  class: {
    type: String,
    optional: true,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    Capabilities - addon features providing
  */
  addons: {
    type: Array,
    optional: true,
    input: 'checkboxgroup',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    options () {
      return [
        {value: 'backups', label: 'Backups'}
      ];
    }
  },
  'addons.$': {
    type: String,
    optional: true,
  },
  /**
    Backup Price Hourly- addon feature
  */
  addonBackupHr: {
    type: String,
    optional: true,
    input: 'text',
    canRead: ['admins'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    Backup Price Monthly - addon feature
  */
  addonBackupMo: {
    type: String,
    optional: true,
    input: 'text',
    canRead: ['admins'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    Backup Sell Price Hourly- addon feature
  */
  sellAddonBackupHr: {
    label: 'Backups Sell Price Hourly',
    type: String,
    optional: true,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  /**
    Backup Sell Price Monthly - addon feature
  */
  sellAddonBackupMo: {
    label: 'Backups Sell Price Monthly',
    type: String,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ document: plan }) => {
      return Math.floor((plan.sellAddonBackupHr * 24) * 30);
    },
    onUpdate: ({ data }) => {
      if (data.sellAddonBackupHr) {
        return Math.floor((data.sellAddonBackupHr * 24) * 30);
      }
    },
  }
  
};

export default schema;
