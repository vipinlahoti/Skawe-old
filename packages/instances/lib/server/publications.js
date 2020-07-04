import {
  Distributions,
  Regions,
  ServerPlans,
  ServerAddOns,
  CloudInstances
} from '../modules/collection.js';

[
  Distributions,
  Regions,
  ServerPlans,
  ServerAddOns,
  CloudInstances
].forEach(collection => {
    const subscription = collection._name;
    const subscriptionList = `${subscription}.list`;
  
    Meteor.publish(subscriptionList, function () {
      return collection.find();
    });
})

/**
 * @summary Publish a user specific instances
 * @param {Object} terms
 */
Meteor.publish('cloudinstances.userlist', function (terms) {
  return CloudInstances.find({userId: this.userId});
});
