import Skawe from 'meteor/skawe:lib';
import {
  Distributions,
  Regions,
  ServerPlans,
  ServerAddOns,
} from './collection.js'
/**
 * Instances API
 */
export const InstancesAPI = {}

InstancesAPI.baseAPI = 'https://api.linode.com/v4',
InstancesAPI.baseAPIKey = 'cda3cde9e551489b0f02f8b3eeaf29b81ed650b0389bbaec0f8bd72972576107';

InstancesAPI.options = {
  'headers': {
    'Authorization': `Bearer ${InstancesAPI.baseAPI}`,
    'Content-Type': 'application/json'
  }
};

/**
 * Instances Methods
 */
InstancesAPI.methods = {};

/**
 * @summary Insert a instance in the database (note: optional instance properties not listed here)
 * @param {Object} instance - the instance being inserted
 * @param {string} instance.userId - the id of the user the instance belongs to
 * @param {string} instance.title - the instance's title
 */
InstancesAPI.methods.fetch = function (instanceUrl) {
  try {
    const result = HTTP.call('GET',`${InstancesAPI.baseAPI}/${instanceUrl}`, InstancesAPI.options);
    
    if (result.statusCode === 200){
      return result.data;
    } else {
      throw new Meteor.Error(500, 'Failed to fetch');
    }

  } catch (e) {
    // Got a network error, timeout, or HTTP error in the 400 or 500 range.
    return false;
  }
};

/**
 * @summary Insert a instance in the database (note: optional instance properties not listed here)
 * @param {Object} instance - the instance being inserted
 * @param {string} instance.userId - the id of the user the instance belongs to
 * @param {string} instance.title - the instance's title
 */
InstancesAPI.methods.new = function (instance, collectionName) {
  const getCollectionName = collectionName._name;
  const setCollectionNames = [Distributions, Regions, ServerPlans, ServerAddOns]
  
  setCollectionNames.forEach(collection => {

    if (collectionName.toLowerCase() === collection._name) {
      const setInstance = instance.forEach(item => collection.insert(item));
      return setInstance;
    }
  })

  return false
};


/**
 * @summary Edit a instance in the database
 * @param {string} instanceId – the ID of the instance being edited
 * @param {Object} modifier – the modifier object
 * @param {Object} instance - the current instance object
 */
InstancesAPI.methods.edit = function (instanceId, modifier, instance) {

};


Meteor.methods({

  /**
   * @summary Meteor method for fetching data from API call
   * @memberof Instances
   * @isMethod true
   * @param {Object} instance - the instance being fetched
   */
  'instances.fetch'(instanceUrl) {
    check(instanceUrl, String);
    return InstancesAPI.methods.fetch(instanceUrl);
  },


  /**
   * @summary Meteor method for submitting a instance from the client
   * NOTE: the current user and the instance author user might sometimes be two different users!
   * @memberof Instances
   * @isMethod true
   * @param {Object} instance - the instance being inserted
   */
  'instances.new'(instance, collectionName) {

    // check(instance, {
    //   title: String,
    //   url: String
    // });
    
    return InstancesAPI.methods.new(instance, collectionName);
  },

  /**
   * @summary Meteor method for editing a instance from the client
   * @memberof Instances
   * @isMethod true
   * @param {Object} instanceId - the id of the instance being updated
   * @param {Object} modifier - the update modifier
   */
  'instances.edit'(instanceId, modifier) {
    check(instanceId, String);
    console.log('instances.edit: ', instanceId, ' ==== ', modifier);
  },

 /**
   * @summary Meteor method for deleting a instance
   * @memberof Instances
   * @isMethod true
   * @param {String} instanceId - the id of the instance
   */
  'instances.remove'(instanceId) {
    check(instanceId, String);
    console.log('instances.remove: ', instanceId);
  },
})
