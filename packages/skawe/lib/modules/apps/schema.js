/*
 * Apps schema
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
    Timetstamp of app creation
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
    app ID for linode check
  */
  distId: {
    type: String,
    input: 'text',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    description: 'Example: "123456"'
  },
  /**
    app ID Type for linode check
  */
  typeId: {
    type: String,
    input: 'text',
    canRead: ['members'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    description: 'Example: "linode/debian10"'
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
    description: 'Example: "WordPress - Latest"'
  },
  /**
    Script data
  */
  script: {
    type: String,
    optional: true,
    input: 'textarea',
    canRead: ['members'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    description: 'Example: "#!/bin/bash....."'
  },
  /**
    username
  */
  username: {
    type: String,
    optional: true,
    input: 'text',
    canRead: ['members'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    description: 'Example: "linode"'
  },
  /**
    image path
  */
  image: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    description: 'Example: "/images/wordpress/png"'
  }
  
};

export default schema;
