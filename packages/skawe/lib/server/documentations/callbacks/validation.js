/*
 * Documentation validation and rate limiting callbacks
 */

import { getSetting } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import { Documentations } from '../../../modules/documentations/index.js';
import { timeSinceLast, numberOfItemsInPast24Hours } from '../../helpers.js';
import { Categories } from '../../../modules/categories/collection.js';

/**
 * @summary Rate limiting
 */
export function rateLimit(validationErrors, { currentUser }) {
  if (!Users.isAdmin(currentUser)) {
    const timeSinceLastDocumentation = timeSinceLast(currentUser, Documentations);
    const numberOfDocumentationsInPast24Hours = numberOfItemsInPast24Hours(currentUser, Documentations);
    const documentationInterval = parseInt(getSetting('forum.documentationInterval', 30));
    const maxDocumentationsPer24Hours = parseInt(getSetting('forum.maxDocumentationsPerDay', 5));

    // check that user waits more than X seconds between documentations
    if (timeSinceLastDocumentation < documentationInterval) {
      validationErrors.push({
        break: true,
        id: 'documentations.rate_limit_error',
        properties: { value: documentationInterval - timeSinceLastDocumentation },
      });
    }
    // check that the user doesn't documentation more than Y documentations per day
    if (numberOfDocumentationsInPast24Hours >= maxDocumentationsPer24Hours) {
      validationErrors.push({
        break: true,
        id: 'documentations.max_per_day',
        properties: { value: maxDocumentationsPer24Hours },
      });
    }
  }
  return validationErrors;
}

export function checkCategories ({ document }) {
  // if there are no categories, stop here
  if (!document.categories || document.categories.length === 0) {
    return;
  }
  // check how many of the categories given also exist in the db
  const categoryCount = Categories.find({_id: {$in: document.categories}}).count();
  if (document.categories.length !== categoryCount) {
    throw new Error({id: 'categories.invalid'});
  }
  return document;
}
