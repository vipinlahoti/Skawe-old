/*
 * The Backups collection
 */

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

/**
 * @summary The global namespace for Backups.
 * @namespace Backups
 */
export const Backups = createCollection({
  collectionName: 'Backups',

  typeName: 'Backup',

  schema,

  permissions: {
    canRead: ['members'],
    canCreate: ['members'],
    canUpdate: ['members'],
    canDelete: ['members'],
  }
});

export default Backups;
