import Skawe from 'meteor/skawe:lib';
import Users from './collection.js';

/**
 * @summary Edit a user in the database
 * @param {string} userId – the ID of the user being edited
 * @param {Object} modifier – the modifier object
 * @param {Object} user - the current user object
 */
Users.edit = (userId, modifier, user) => {
  if (typeof user === 'undefined') {
    user = Users.findOne(userId);
  }

  // Callbacks
  modifier = Skawe.callbacks.run('users.edit.sync', modifier, user);

  // Update
  Users.update(userId, modifier);

  // Callbacks
  Skawe.callbacks.runAsync('users.edit.async', Users.findOne(userId), user);

  // After Update
  return Users.findOne(userId);
}

Meteor.methods({
  'users.edit'(userId, modifier) {


    // checking might be redundant because SimpleSchema already enforces the schema, but you never know
    // check(modifier, Match.OneOf({$set: Users.simpleSchema()}, {$unset: Object}, {$set: Users.simpleSchema(), $unset: Object}));
    check(modifier, Match.OneOf({$set: Object}, {$unset: Object}, {$set: Object, $unset: Object}));
    check(userId, String);

    const currentUser = Meteor.user();
    const user = Users.findOne(userId);
    const schema = Users.schema._schema;

    // check that user can edit document
    if (!user || !Users.canEdit(currentUser, user)) {
      throw new Meteor.Error(601, 'Sorry you cannot edit this user');
    }

    // go over each field and throw an error if it's not editable
    // loop over each operation ($set, $unset, etc.)
    _.each(modifier, function (operation) {
      // loop over each property being operated on
      _.keys(operation).forEach(function (fieldName) {

        const field = schema[fieldName];
        if (!Users.canEditField(currentUser, field, user)) {
          throw new Meteor.Error('disallowed_property', 'disallowed_property_detected' + ': ' + fieldName);
        }

      });
    });

    return Users.edit(userId, modifier, user);
  },

  'users.remove'(userId, options) {
    // do the user which to delete his account or another user?
    const actionType = this.userId === userId ? 'own' : 'all';

    if (Users.canDo(Meteor.user(), `users.remove.${actionType}`)) {
      const user = Users.findOne(userId);
      Users.remove(userId);
      Skawe.callbacks.runAsync('users.remove.async', user, options);
    }
  }
});
