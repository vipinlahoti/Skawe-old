import SimpleSchema from 'simpl-schema';
import Users from 'meteor/skawe:users';
import { Regions } from './collection.js'

// check if user can create a new user
const canInsert = user => Users.canDo(user, 'users.new');

// check if user can edit a user
const canEdit = Users.canEdit;

// check if user can edit *all* users
const canEditAll = user => Users.canDo(user, 'users.edit.all');

/**
 * @summary Regions schema
 * @type {SimpleSchema}
 */
Regions.schema = new SimpleSchema({
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
    region ID for linode check
  */
  regionId: {
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    region for linode check
  */
  region: {
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    countryId is in
  */
  countryId: {
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    country is in
  */
  country: {
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    city is in
  */
  city: {
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    Capabilities - addon features providing
  */
  capabilities: {
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    country image path
  */
  image: {
    type: String,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll,
  }
});
// }

/**
 * @summary Attach schema to Regions (Meteor.users at the moment) collection
 */
Regions.attachSchema(Regions.schema);
// export default schema;
