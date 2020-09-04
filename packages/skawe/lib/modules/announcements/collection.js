/*
 * The Announcements collection
 */

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

/**
 * @summary The global namespace for Announcements.
 * @namespace Announcements
 */
export const Announcements = createCollection({
  collectionName: 'Announcements',

  typeName: 'Announcement',

  schema,

  permissions: {
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    canDelete: ['admins'],
  }
});

export default Announcements;
