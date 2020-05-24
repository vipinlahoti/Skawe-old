import Users from 'meteor/vulcan:users';
import addressSchema from './schema.js';

const notificationsGroup = {
  name: 'notifications',
  order: 2,
};

Users.addField([
  // Add notifications options to user profile settings
  {
    fieldName: 'notifications_users',
    fieldSchema: {
      label: 'New users',
      type: Boolean,
      optional: true,
      defaultValue: false,
      input: 'checkbox',
      canRead: ['guests'],
      canCreate: ['admins'],
      canUpdate: ['admins'],
      group: notificationsGroup,
    }
  },
  {
    fieldName: 'displayName',
    fieldSchema: {
      type: String,
      mustComplete: true,
      optional: true,
      input: 'text',
      canCreate: ['members'],
      canUpdate: ['members'],
      canRead: ['guests'],
      order: 51,
      searchable: true
    }
  },
  {
    fieldName: 'companyName',
    fieldSchema: {
      type: String,
      mustComplete: true,
      optional: true,
      input: 'text',
      canCreate: ['members'],
      canUpdate: ['members'],
      canRead: ['guests'],
      order: 51,
      searchable: true
    }
  },
  {
    fieldName: 'phone',
    fieldSchema: {
      type: Number,
      mustComplete: true,
      optional: true,
      input: 'text',
      canCreate: ['members'],
      canUpdate: ['members'],
      canRead: ['guests'],
      order: 52,
      searchable: true
    }
  },
  {
    fieldName: 'address',
    fieldSchema: {
      type: Array,
      optional: true,
      arrayItem: {
        type: addressSchema,
        optional: true,
      },
      canRead: ['guests'],
      canUpdate: ['members'],
      canCreate: ['members'],
    }
  },
  {
    fieldName: 'address.$',
    fieldSchema: {
      type: String,
      optional: true,
    }
  },
  {
    fieldName: 'taxID',
    fieldSchema: {
      type: String,
      mustComplete: true,
      optional: true,
      input: 'text',
      canCreate: ['members'],
      canUpdate: ['members'],
      canRead: ['guests'],
      order: 53,
      searchable: true
    }
  }
]);
