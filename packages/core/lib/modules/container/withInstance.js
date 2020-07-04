// import Skawe from 'meteor/skawe:lib';
// import { withTracker } from 'meteor/react-meteor-data';

// Skawe.withInstance = withTracker((props) => {
//   const getMyInstancesUrl = 'linode/instances';
//   let instanceApiData;
    
//   Meteor.call('instances.fetch', getMyInstancesUrl, (error, results) => {
//     if (error) {
//       console.log(error);
//     }
//     else {
//       instanceApiData = results.data;
//     }

//     console.log('withInstance: ', instanceApiData)

//     return {
//       instanceApiData
//     }
//   });
// })
