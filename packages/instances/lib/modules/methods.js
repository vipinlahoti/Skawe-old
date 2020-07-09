import Skawe from 'meteor/skawe:lib';
// import base64 from 'base-64';
// import Razorpay from './checkout.js';
import {
  Distributions,
  Regions,
  ServerPlans,
  ServerAddOns,
  CloudInstances,
} from './collection.js'


/**
 * Instances API
 */
export let InstancesAPI = {}

InstancesAPI.baseAPI = 'https://api.linode.com/v4',
InstancesAPI.baseAPIKey = '4bcc8b11cabc0d431ea67106cacc29f376a637fbf7c0e097c6893b5e2521476f';

InstancesAPI.options = {
  'headers': {
    'Authorization': `Bearer ${InstancesAPI.baseAPIKey}`,
    'Content-Type': 'application/json'
  }
};

// InstancesAPI.filter = {
//   'headers': {
//     'Authorization': `Bearer ${InstancesAPI.baseAPI}`,
//     'Content-Type': 'application/json',
//     'X-Filter': '{\'label\': {\'+contains\': \'One-Click\'}}'
//   }
// };


/**
 * Instances Methods
 */
// InstancesAPI = {};
Distributions.methods = {};
Regions.methods = {};
ServerPlans.methods = {};

/**
 * @summary Insert a instance in the database (note: optional instance properties not listed here)
 * @param {Object} instance - the instance being inserted
 * @param {string} instance.userId - the id of the user the instance belongs to
 * @param {string} instance.title - the instance's title
 */

InstancesAPI.fetch = function (instanceUrl) {
  if (Meteor.isServer) {
    const result = HTTP.call('GET', `${InstancesAPI.baseAPI}/${instanceUrl}`, InstancesAPI.options);

    if (result.statusCode === 200){
      return result.data;
    } else {
      throw new Meteor.Error(500, 'Failed to fetch');
    }
  }
};


// ------------------------------------------------------------------------------------------- //
// -------------------------------------- Distributions -------------------------------------- //
// ------------------------------------------------------------------------------------------- //

/**
 * @summary Insert a distribution in the database (note: optional distribution properties not listed here)
 * @param {Object} distribution - the distribution being inserted
 * @param {string} distribution.userId - the id of the user the distribution belongs to
 * @param {string} distribution.title - the distribution's title
 */
Distributions.methods.new = function (distribution) {
  distribution._id = Distributions.insert(distribution);
  console.log('distribution: ', distribution)
  return distribution;
};

/**
 * @summary Edit a distribution in the database
 * @param {string} distributionId – the ID of the distribution being edited
 * @param {Object} modifier – the modifier object
 * @param {Object} distribution - the current distribution object
 */
Distributions.methods.edit = function (distributionId, modifier, distribution) {
  if (typeof distribution === 'undefined') {
    distribution = Distributionss.findOne(distributionId);
  }

  Distributions.update(distributionId, modifier);
  return Distributions.findOne(distributionId);
};


// ------------------------------------------------------------------------------------------- //
// -------------------------------------- Regions -------------------------------------- //
// ------------------------------------------------------------------------------------------- //

/**
 * @summary Insert a region in the database (note: optional region properties not listed here)
 * @param {Object} region - the region being inserted
 * @param {string} region.userId - the id of the user the region belongs to
 * @param {string} region.title - the region's title
 */
Regions.methods.new = function (region) {
  region._id = Regions.insert(region);
  console.log('region: ', region)
  return region;
};

/**
 * @summary Edit a region in the database
 * @param {string} regionId – the ID of the region being edited
 * @param {Object} modifier – the modifier object
 * @param {Object} region - the current region object
 */
Regions.methods.edit = function (regionId, modifier, region) {
  if (typeof region === 'undefined') {
    region = Regionss.findOne(regionId);
  }

  Regions.update(regionId, modifier);
  return Regions.findOne(regionId);
};


// ------------------------------------------------------------------------------------------- //
// -------------------------------------- ServerPlans -------------------------------------- //
// ------------------------------------------------------------------------------------------- //

/**
 * @summary Insert a serverplan in the database (note: optional serverplan properties not listed here)
 * @param {Object} serverplan - the serverplan being inserted
 * @param {string} serverplan.userId - the id of the user the serverplan belongs to
 * @param {string} serverplan.title - the serverplan's title
 */
ServerPlans.methods.new = function (serverplan) {
  serverplan._id = ServerPlans.insert(serverplan);
  console.log('serverplan: ', serverplan)
  return serverplan;
};

/**
 * @summary Edit a serverplan in the database
 * @param {string} serverplanId – the ID of the serverplan being edited
 * @param {Object} modifier – the modifier object
 * @param {Object} serverplan - the current serverplan object
 */
ServerPlans.methods.edit = function (serverplanId, modifier, serverplan) {
  if (typeof serverplan === 'undefined') {
    serverplan = ServerPlanss.findOne(serverplanId);
  }

  ServerPlans.update(serverplanId, modifier);
  return ServerPlans.findOne(serverplanId);
};



// ------------------------------------------------------------------------------------------- //
// ------------------------------------- Meteor Methods -------------------------------------- //
// ------------------------------------------------------------------------------------------- //

Meteor.methods({

  // ------------------------------------------------------------------------------------------- //
  // ---------------------------------------- Fetch API ---------------------------------------- //
  // ------------------------------------------------------------------------------------------- //

  /**
   * @summary Meteor method for fetching data from API call
   * @memberof Instances
   * @isMethod true
   * @param {Object} instance - the instance being fetched
   */
  'instances.fetch'(instanceUrl) {
    check(instanceUrl, String);
    // this.unblock();
    return InstancesAPI.fetch(instanceUrl);
  },


  'instances.payment'(paymentData) {
    // this.unblock();
    return InstancesAPI.payment(paymentData);
  },


  // ------------------------------------------------------------------------------------------- //
  // -------------------------------------- Distributions -------------------------------------- //
  // ------------------------------------------------------------------------------------------- //

  /**
   * @summary Meteor method for submitting a distribution from the client
   * NOTE: the current user and the distribution author user might sometimes be two different users!
   * @memberof Instances
   * @isMethod true
   * @param {Object} distribution - the distribution being inserted
   */
  'distributions.new'(distribution) {
    // check(modifier, Match.OneOf({$set: Object}, {$unset: Object}, {$set: Object, $unset: Object}));
    return Distributions.methods.new(distribution);
  },

  /**
   * @summary Meteor method for editing a distribution from the client
   * @memberof Instances
   * @isMethod true
   * @param {Object} distributionId - the id of the distribution being updated
   * @param {Object} modifier - the update modifier
   */
  'distributions.edit'(distributionId, modifier) {
    check(distributionId, String);

    const distribution = Distributions.findOne(distributionId);
    return Distributions.methods.edit(distributionId, modifier, distribution);
  },

 /**
   * @summary Meteor method for deleting a distribution
   * @memberof Instances
   * @isMethod true
   * @param {String} distributionId - the id of the distribution
   */
  'distributions.remove'(distributionId) {
    check(distributionId, String);
    console.log('distributions.remove: ', distributionId);
  },


  // ------------------------------------------------------------------------------------------- //
  // -------------------------------------- Regions -------------------------------------- //
  // ------------------------------------------------------------------------------------------- //

  /**
   * @summary Meteor method for submitting a region from the client
   * NOTE: the current user and the region author user might sometimes be two different users!
   * @memberof Instances
   * @isMethod true
   * @param {Object} region - the region being inserted
   */
  'regions.new'(region) {
    // check(modifier, Match.OneOf({$set: Object}, {$unset: Object}, {$set: Object, $unset: Object}));
    return Regions.methods.new(region);
  },

  /**
   * @summary Meteor method for editing a region from the client
   * @memberof Instances
   * @isMethod true
   * @param {Object} regionId - the id of the region being updated
   * @param {Object} modifier - the update modifier
   */
  'regions.edit'(regionId, modifier) {
    check(regionId, String);

    const region = Regions.findOne(regionId);
    return Regions.methods.edit(regionId, modifier, region);
  },

 /**
   * @summary Meteor method for deleting a region
   * @memberof Instances
   * @isMethod true
   * @param {String} regionId - the id of the region
   */
  'regions.remove'(regionId) {
    check(regionId, String);
    console.log('regions.remove: ', regionId);
  },


  // ------------------------------------------------------------------------------------------- //
  // -------------------------------------- ServerPlans -------------------------------------- //
  // ------------------------------------------------------------------------------------------- //

  /**
   * @summary Meteor method for submitting a serverplan from the client
   * NOTE: the current user and the serverplan author user might sometimes be two different users!
   * @memberof Instances
   * @isMethod true
   * @param {Object} serverplan - the serverplan being inserted
   */
  'serverplans.new'(serverplan) {
    // check(modifier, Match.OneOf({$set: Object}, {$unset: Object}, {$set: Object, $unset: Object}));
    return ServerPlans.methods.new(serverplan);
  },

  /**
   * @summary Meteor method for editing a serverplan from the client
   * @memberof Instances
   * @isMethod true
   * @param {Object} serverplanId - the id of the serverplan being updated
   * @param {Object} modifier - the update modifier
   */
  'serverplans.edit'(serverplanId, modifier) {
    check(serverplanId, String);

    const serverplan = ServerPlans.findOne(serverplanId);
    return ServerPlans.methods.edit(serverplanId, modifier, serverplan);
  },

 /**
   * @summary Meteor method for deleting a serverplan
   * @memberof Instances
   * @isMethod true
   * @param {String} serverplanId - the id of the serverplan
   */
  'serverplans.remove'(serverplanId) {
    check(serverplanId, String);
    console.log('serverplans.remove: ', serverplanId);
  },


// ------------------------------------------------------------------------------------------- //
// ----------------------------------------- Deploy ------------------------------------------ //
// ------------------------------------------------------------------------------------------- //
  
  /**
   * @summary Meteor method for deploying a clous instance
   * @memberof Instances
   * @isMethod true
   * @param {Object} instance - the instance being inserted
   */
  'cloudInstance.new'(instanceUrl, instance, instanceExtra) {
    console.log('instance == ', instance, ' == instanceExtra == ', instanceExtra);
    // if (Meteor.isServer) {
    //   try {
    //     HTTP.call('POST', `${InstancesAPI.baseAPI}/${instanceUrl}`, {
    //       headers: {
    //         'Authorization': `Bearer ${InstancesAPI.baseAPIKey}`
    //       },
    //       data : instance
    //     }, (error, result) => {
    //       if (result.statusCode === 200) {
            
    //         const insertData = {
    //           cloudInstanceId: result.data.id,
    //           type: result.data.type,
    //           cpu: instanceExtra.cpu,
    //           image: instanceExtra.image,
    //           label: result.data.label,
    //           ram: instanceExtra.ram,
    //           region: instanceExtra.region,
    //           storage: instanceExtra.storage,
    //           status: result.data.status,
    //           transfer: instanceExtra.transfer,
    //           backup: instanceExtra.backup,
    //           userId: Meteor.userId()
    //         };

    //         insertData._id = CloudInstances.insert(insertData);

    //         // callback to increment counter
    //         Skawe.callbacks.run('cloudInstances.new.async', insertData);
    //         return insertData
    //       } else {
    //         throw new Meteor.Error(500, error);
    //       }
    //     });
    //   } catch (e) {
    //     console.log('catch: ', e)
    //     // Got a network error, timeout, or HTTP error in the 400 or 500 range.
    //     return false;
    //   }
    // }
  },  
})
