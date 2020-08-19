/*
 * Instances collection
 */

import schema from './schema.js';
import { createCollection } from 'meteor/vulcan:core';

/**
 * @summary The global namespace for Instances.
 * @namespace Instances
 */
export const Instances = createCollection({
  collectionName: 'Instances',

  typeName: 'Instance',

  schema,

  permissions: {
    canRead: ['owners'],
    canCreate: ['members'],
    canUpdate: ['owners'],
    canDelete: ['owners'],
  },
});

export default Instances;
