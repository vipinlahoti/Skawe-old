/*
 * Distributions schema
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
    distribution ID for linode check
  */
  distId: {
    type: String,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    description: 'Example: "linode/centos7"'
  },
  /**
    OS label with version 
  */
  label: {
    type: String,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    description: 'Example: "CentOS 7"'
  },
  /**
    OS vendor
  */
  vendor: {
    type: String,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    description: 'Example: "CentOS"'
  },
  /**
    image path
  */
  image: {
    type: String,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ document: distribution }) => {
      const image = distribution.vendor.toLowerCase();
      return `/images/${image}.png`;
    },
    onUpdate: ({ data }) => {
      if (data.vendor) {
        const image = data.vendor.toLowerCase();
        return `/images/${image}.png`;
      }
    },
  }
  
};

export default schema;
