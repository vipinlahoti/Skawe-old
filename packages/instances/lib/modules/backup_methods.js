import Skawe from 'meteor/skawe:lib';
import InstancesAPI from './methods';

InstancesAPI.baseAPI = 'https://api.linode.com/v4',
InstancesAPI.baseAPIKey = '4bcc8b11cabc0d431ea67106cacc29f376a637fbf7c0e097c6893b5e2521476f';

/**
 * @summary Insert a instanceBackupUrl in the database (note: optional instanceBackupUrl properties not listed here)
 * @param {Object} instanceBackupUrl - the instanceBackupUrl being inserted
 * @param {string} instanceBackupUrl.userId - the id of the user the instanceBackupUrl belongs to
 * @param {string} instanceBackupUrl.title - the instanceBackupUrl's title
 */
 InstancesAPI.enableBackup = function (instanceEnableBackupUrl) {
  if (Meteor.isServer) {
    try {
      HTTP.call('POST', `${InstancesAPI.baseAPI}/${instanceEnableBackupUrl}`, {
        headers: {
          'Authorization': `Bearer ${InstancesAPI.baseAPIKey}`
        }
      }, (error, result) => {
        console.log('enableBackup == ', result);
        return result
      });
    
    } catch (e) {
      console.log('catch: ', e)
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      return false;
    }
  }
};

InstancesAPI.cancelBackup = function (instanceBackupUrl) {
  console.log('methods.cancelBackup: ', instanceBackupUrl)
};

InstancesAPI.restoreBackup = function (instanceRestoreUrl, setRestoreBackup) {
  console.log('methods.restoreBackup: ', instanceRestoreUrl, setRestoreBackup)
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
   'instances.enableBackup'(instanceEnableBackupUrl) {
    check(instanceEnableBackupUrl, String);
    return InstancesAPI.enableBackup(instanceEnableBackupUrl);
  },

  'instances.cancelBackup'(instanceBackupUrl) {
    check(instanceBackupUrl, String);
    return InstancesAPI.cancelBackup(instanceBackupUrl);
  },

  'instances.restoreBackup'(instanceRestoreUrl, setRestoreBackup) {
    check(instanceRestoreUrl, String);
    return InstancesAPI.restoreBackup(instanceRestoreUrl, setRestoreBackup);
  },

});
