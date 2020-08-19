/*
 * The Distributions collection
 */

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

/**
 * @summary The global namespace for Distributions.
 * @namespace Distributions
 */
export const Distributions = createCollection({
  collectionName: 'Distributions',

  typeName: 'Distribution',

  schema,

  permissions: {
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    canDelete: ['admins'],
  }
});

export default Distributions;
