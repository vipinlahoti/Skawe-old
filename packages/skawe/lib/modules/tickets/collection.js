/*
 * Tickets collection
 */

import schema from './schema.js';
import { createCollection } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

// user can view ticket if it's approved, or they are its owner; or they are admin
const canRead = ({ document, user }) => {
  return (
    Users.owns(user, document) ||
    Users.isAdmin(user)
  );
};

/**
 * @summary The global namespace for Tickets.
 * @namespace Tickets
 */
export const Tickets = createCollection({
  collectionName: 'Tickets',

  typeName: 'Ticket',

  schema,

  permissions: {
    canRead,
    canCreate: ['members'],
    canUpdate: ['owners'],
    canDelete: ['owners'],
  },
});

export default Tickets;
