/*
 * Instance validation and rate limiting callbacks
 */

import { getSetting } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import { Instances } from '../../../modules/instances/index.js';
import { timeSinceLast, numberOfItemsInPast24Hours } from '../../helpers.js';

/**
 * @summary Rate limiting
 */
export function rateLimit(validationErrors, { currentUser }) {
  if (!Users.isAdmin(currentUser)) {
    const timeSinceLastInstance = timeSinceLast(currentUser, Instances);
    const numberOfInstancesInPast24Hours = numberOfItemsInPast24Hours(currentUser, Instances);
    const instanceInterval = parseInt(getSetting('forum.instanceInterval', 30));
    const maxInstancesPer24Hours = parseInt(getSetting('forum.maxInstancesPerDay', 5));

    // check that user waits more than X seconds between instances
    if (timeSinceLastInstance < instanceInterval) {
      validationErrors.push({
        break: true,
        id: 'instances.rate_limit_error',
        properties: { value: instanceInterval - timeSinceLastInstance },
      });
    }
    // check that the user doesn't instance more than Y instances per day
    if (numberOfInstancesInPast24Hours >= maxInstancesPer24Hours) {
      validationErrors.push({
        break: true,
        id: 'instances.max_per_day',
        properties: { value: maxInstancesPer24Hours },
      });
    }
  }
  return validationErrors;
}
