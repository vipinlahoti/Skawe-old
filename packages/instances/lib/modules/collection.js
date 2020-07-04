import Skawe from 'meteor/skawe:lib';

export const Distributions = Skawe.collection({
  collectionName: 'Distributions'
});
// Skawe.subscriptions.preload('distributions.list');

export const Regions = Skawe.collection({
  collectionName: 'Regions'
});
// Skawe.subscriptions.preload('regions.list');

export const ServerPlans = Skawe.collection({
  collectionName: 'ServerPlans'
});
// Skawe.subscriptions.preload('serverPlans.list');

export const ServerAddOns = Skawe.collection({
  collectionName: 'ServerAddOns'
});
// Skawe.subscriptions.preload('serverAddOns.list');


// Cloud Instances
export const CloudInstances = Skawe.collection({
  collectionName: 'CloudInstances'
});
