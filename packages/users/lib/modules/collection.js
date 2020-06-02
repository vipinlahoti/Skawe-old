import Skawe from 'meteor/skawe:lib';

/**
 * @summary Skawe Users namespace
 * @namespace Users
 */
const Users = Skawe.collection({
  collectionName: 'Users'
});

Skawe.subscriptions.preload('users.current');

export default Users;
