import {
  Distributions,
  Regions,
  ServerPlans,
  ServerAddOns,
} from './collection.js'

/**
 * @summary Check to see if distribution URL is unique.
 * We need the current user so we know who to upvote the existing distribution as.
 * @param {String} distId
 */
Distributions.checkForSameDistId = function (distId) {

  // check that there are no previous distributions with the same Id in the past 6 months
  const sixMonthsAgo = moment().subtract(6, 'months').toDate();
  const distributionWithSameLink = Distributions.findOne({distId: distId, postedAt: {$gte: sixMonthsAgo}});

  if (typeof distributionWithSameLink !== 'undefined') {
    throw new Meteor.Error('603', 'already_posted', distributionWithSameLink._id);
  }
};
