import Skawe from 'meteor/skawe:lib';
import InstancesAPI from './methods';

InstancesAPI.baseAPI = 'https://api.linode.com/v4',
InstancesAPI.baseAPIKey = '4bcc8b11cabc0d431ea67106cacc29f376a637fbf7c0e097c6893b5e2521476f';

InstancesAPI.options = {
  'headers': {
    'Authorization': `Bearer ${InstancesAPI.baseAPIKey}`,
    'Content-Type': 'application/json'
  }
};

/**
 * @param {string} instanceBackupUrl - endpoint to change root password
 */
InstancesAPI.changePassword = function (changePasswordUrl) {
  console.log('methods.changePassword: ', changePasswordUrl);
  if (Meteor.isServer) {

  }
};

/**
 * @param {string} bootInstanceUrl - endpoint to delete instance
 */
InstancesAPI.bootInstance = function (bootInstanceUrl) {
  if (Meteor.isServer) {
    try {
      HTTP.call('POST', `${InstancesAPI.baseAPI}/${bootInstanceUrl}`, {
        headers: {
          'Authorization': `Bearer ${InstancesAPI.baseAPIKey}`
        }
      }, (error, result) => {
        console.log(result);
        return result
      });
    
    } catch (e) {
      console.log('catch: ', e)
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      return false;
    }
  }
};

/**
 * @param {string} deleteInstanceUrl - endpoint to delete instance
 */
InstancesAPI.deleteInstance = function (deleteInstanceUrl) {
  console.log('methods.deleteInstance: ', deleteInstanceUrl);
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------- Meteor Methods -------------------------------------- //
// ------------------------------------------------------------------------------------------- //

Meteor.methods({
  /**
   * @summary Meteor method for fetching data from API call
   * @memberof Instances
   * @isMethod true
   * @param {Object} instance - the instance being fetched
   */
  'instances.changePassword'(changePasswordUrl) {
    check(changePasswordUrl, String);
    return InstancesAPI.changePassword(changePasswordUrl);
  },

  'instances.bootInstance'(bootInstanceUrl) {
    check(bootInstanceUrl, String);
    return InstancesAPI.bootInstance(bootInstanceUrl);
  },

   'instances.deleteInstance'(deleteInstanceUrl) {
    check(deleteInstanceUrl, String);
    return InstancesAPI.deleteInstance(deleteInstanceUrl);
  },

});
