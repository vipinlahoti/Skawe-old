/*
 * The Domains collection
 */

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

/**
 * @summary The global namespace for Domains.
 * @namespace Domains
 */
export const Domains = createCollection({
  collectionName: 'Domains',

  typeName: 'Domain',

  schema,

  permissions: {
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    canDelete: ['members'],
  }
});

export default Domains;
