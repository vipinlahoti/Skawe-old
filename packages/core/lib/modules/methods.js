import Skawe from 'meteor/skawe:lib';

export let GitHubAPI = {}

GitHubAPI.baseAPI = 'https://raw.githubusercontent.com/vipinlahoti/SkawePages/master/pages/';

// GitHubAPI.options = {
//   'headers': {
//     'Content-Type': 'application/json'
//   }
// };

GitHubAPI.fetch = function (pageUrl) {
  if (Meteor.isServer) {
    const result = HTTP.call('GET', `${GitHubAPI.baseAPI}/${pageUrl}`);
    if (result.statusCode === 200){
      return result.content;
    } else {
      throw new Meteor.Error(500, 'Failed to fetch');
    }
  }
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
  'github.fetch'(pageUrl) {
    check(pageUrl, String);
    return GitHubAPI.fetch(pageUrl);
  }

})
