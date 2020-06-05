import Skawe from 'meteor/skawe:lib';
// import schema from './schema';

/**
 * @summary Skawe Users namespace
 * @namespace Users
 */
const Users = Skawe.collection({
  collectionName: 'Users',
  // schema
});

Skawe.subscriptions.preload('users.current');

export default Users;
