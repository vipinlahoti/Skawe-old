// import Skawe from 'meteor/skawe:lib';
import SimpleSchema from 'simpl-schema';
import Users from './collection.js';

const adminGroup = {
  name: 'Admin',
  order: 10
};

// check if user can create a new user
const canInsert = user => Users.canDo(user, 'users.new');

// check if user can edit a user
const canEdit = Users.canEdit;

// check if user can edit *all* users
const canEditAll = user => Users.canDo(user, 'users.edit.all');

/**
 * @summary Users schema
 * @type {SimpleSchema}
 */
Users.schema = new SimpleSchema({
// const schema = {
  _id: {
    type: String,
    publish: true,
    optional: true
  },
  username: {
    type: String,
    // regEx: /^[a-z0-9A-Z_]{3,15}$/,
    publish: true,
    optional: true
  },
  emails: {
    type: Array,
    optional: true
  },
  'emails.$': {
    type: Object,
    optional: true
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  'emails.$.verified': {
    type: Boolean,
    optional: true
  },
  createdAt: {
    type: Date,
    publish: true,
    optional: true
  },
  isAdmin: {
    type: Boolean,
    label: 'Is Admin',
    control: 'checkbox',
    optional: true,
    insertableBy: canEditAll,
    editableBy: canEditAll,
    group: adminGroup
  },
  profile: {
    type: Object,
    optional: true,
    blackbox: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  /**
    The name displayed throughout the app. Can contain spaces and special characters, doesn't need to be unique
  */
  displayName: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    The user's phone number. Modifiable.
  */
  phoneNumber: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    The user's Address Line 1. Modifiable.
  */
  address: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    The user's Address Line 2. Modifiable.
  */
  addressLine2: {
    label: 'Address Line 2',
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    The user's City. Modifiable.
  */
  city: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    The user's Zip code. Modifiable.
  */
  zipCode: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    The user's Country. Modifiable.
  */
  country: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    The user's Company. Modifiable.
  */
  company: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    The user's Company URL. Modifiable.
  */
  companyUrl: {
    label: 'Company URL',
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    The user's email. Modifiable.
  */
  email: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Email,
    required: true,
    control: 'email',
    insertableBy: canInsert,
    editableBy: canEdit
    // unique: true // note: find a way to fix duplicate accounts before enabling this
  },
  /**
    A hash of the email, used for Gravatar // TODO: change this when email changes
  */
  emailHash: {
    type: String,
    publish: true,
    optional: true
  },
  /**
    The user's karma
  */
  karma: {
    type: Number,
    publish: true,
    optional: true
  },
  /**
    The user's profile URL slug // TODO: change this when displayName changes
  */
  slug: {
    type: String,
    publish: true,
    optional: true
  },
  /**
    Auto backup for all future instances
  */
  autoBackup: {
    type: Boolean,
    control: 'checkbox',
    optional: true,
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    Dark mode theme for user dashboard
  */
  theme: {
    type: Boolean,
    control: 'checkbox',
    optional: true,
    insertableBy: canInsert,
    editableBy: canEdit
  },
  /**
    Groups
  */
  // groups: {
  //   type: Array,
  //   optional: true,
  //   control: 'select',
  //   insertableBy: canEditAll,
  //   editableBy: canEditAll,
  //   group: adminGroup,
  //   form: {
  //     options() {
  //       const groups = _.without(
  //         _.keys(Users.groups),
  //         'anonymous',
  //         'default',
  //         'admins'
  //       );
  //       return groups.map(group => {
  //         return { value: group, label: group };
  //       });
  //     },
  //   },
  // },
  // 'groups.$': {
  //   type: String,
  //   optional: true,
  // }
});
// }

/**
 * @summary Attach schema to Users (Meteor.users at the moment) collection
 */
Users.attachSchema(Users.schema);
// export default schema;
