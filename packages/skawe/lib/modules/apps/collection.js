/*
 * The Apps collection
 */

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

/**
 * @summary The global namespace for Apps.
 * @namespace Apps
 */
export const Apps = createCollection({
  collectionName: 'Apps',

  typeName: 'App',

  schema,

  permissions: {
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    canDelete: ['admins'],
  }
});

export default Apps;
