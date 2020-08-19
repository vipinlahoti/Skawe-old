/*
 * The Events collection
 */

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

/**
 * @summary The global namespace for Events.
 * @namespace Events
 */
export const Events = createCollection({
  collectionName: 'Events',

  typeName: 'Event',

  schema,

  permissions: {
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    canDelete: ['admins'],
  }
});

export default Events;
