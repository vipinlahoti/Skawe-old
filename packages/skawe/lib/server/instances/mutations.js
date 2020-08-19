import { addGraphQLMutation, addGraphQLResolvers, getSetting, registerSetting } from 'meteor/vulcan:core';
import { Instances } from '../../modules/instances/index.js';

addGraphQLMutation('getInstancesData(dataMutation: JSON) : JSON');

const resolver = {
  Mutation: {
    getInstancesData(root, args, context) {
      const data = Instances.serverAPI.getData(args.dataMutation);
      return data;
    },
  },
};
addGraphQLResolvers(resolver);
