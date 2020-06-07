import SimpleSchema from 'simpl-schema';
import Users from 'meteor/skawe:users';
import { ServerPlans } from './collection.js'

// check if user can create a new user
const canInsert = user => Users.canDo(user, 'users.new');

// check if user can edit a user
const canEdit = Users.canEdit;

// check if user can edit *all* users
const canEditAll = user => Users.canDo(user, 'users.edit.all');

/**
 * @summary ServerPlans schema
 * @type {SimpleSchema}
 */
ServerPlans.schema = new SimpleSchema({
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
    plan ID for linode check
  */
  planId: {
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    label for linode check
  */
  label: {
    label: 'Plan Name',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    Hourly Price
  */
  priceHr: {
    label: 'Price - Hourly',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    Monthly Price
  */
  priceMo: {
    label: 'Price - Monthly',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    Ram size
  */
  memory: {
    label: 'RAM Size in GB',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    Disk size
  */
  disk: {
    label: 'Disk Size in GB',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    Bandwidth
  */
  transfer: {
    label: 'Bandwidth in GB',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll,
  },
  /**
    CPU
  */
  vcpu: {
    label: 'CPU',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll,
  },
  /**
    Category
  */
  class: {
    label: 'Category',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll,
  },
  /**
    Addons
  */
  addons: {
    label: 'Addons',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll,
  },
  /**
    Backup Price Monthly - addon feature
  */
  addonBackupMo: {
    label: 'Backups Price Monthly',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll,
  },
  /**
    Backup Price Hourly- addon feature
  */
  addonBackupHr: {
    label: 'Backups Price Hourly',
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll,
  }
});
// }

/**
 * @summary Attach schema to ServerPlans (Meteor.users at the moment) collection
 */
ServerPlans.attachSchema(ServerPlans.schema);
// export default schema;
