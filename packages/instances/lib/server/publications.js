import { Distributions, Regions, ServerPlans, ServerAddOns } from '../modules/collection.js';

[Distributions, Regions, ServerPlans, ServerAddOns]
  .forEach(collection => {
    const subscription = collection._name;
    const subscriptionList = `${subscription}.list`;
  
    Meteor.publish(subscriptionList, function () {
      return collection.find({show: true});
    });
})
