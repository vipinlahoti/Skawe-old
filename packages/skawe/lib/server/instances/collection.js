import { extendCollection } from 'meteor/vulcan:core';
import Instances from '../../modules/instances/collection.js';
import {
  rateLimit,
  createNotifications,
  InstancesRemoveOperations
} from './callbacks/index.js';


extendCollection(Instances, {
  callbacks: {
    create: {
      validate: [rateLimit],
      // async: [incrementUserInstanceCount]
    },
    // delete: {
    //   async: [InstancesRemoveOperations],
    // },
  }
});
