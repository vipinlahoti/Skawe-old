/*
 * The Plans collection
 */

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

/**
 * @summary The global namespace for Plans.
 * @namespace Plans
 */
export const Plans = createCollection({
  collectionName: 'Plans',

  typeName: 'Plan',

  schema,

  permissions: {
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    canDelete: ['admins'],
  },

  defaultInput: {
    sort: {
      createdAt: 'asc',
    },
  },
});

export default Plans;
