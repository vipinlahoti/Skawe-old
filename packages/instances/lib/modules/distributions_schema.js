import SimpleSchema from 'simpl-schema';
import Users from 'meteor/skawe:users';
import { Distributions } from './collection.js';

// check if user can create a new user
const canInsert = user => Users.canDo(user, 'users.new');

// check if user can edit a user
const canEdit = Users.canEdit;

// check if user can edit *all* users
const canEditAll = user => Users.canDo(user, 'users.edit.all');

/**
 * @summary Distributions schema
 * @type {SimpleSchema}
 */
Distributions.schema = new SimpleSchema({
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
    distribution ID for linode check
  */
  distId: {
    type: String,
    publish: true,
    // unique: true, // Find a way to make it unique
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    OS name with version 
  */
  label: {
    type: String,
    publish: true,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    OS Category
  */
  category: {
    type: String,
    publish: true,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  },
  /**
    image path
  */
  image: {
    type: String,
    publish: true,
    control: 'text',
    insertableBy: canEditAll,
    editableBy: canEditAll
  }
});
// }

/**
 * @summary Attach schema to Distributions (Meteor.users at the moment) collection
 */
Distributions.attachSchema(Distributions.schema);
// export default schema;
