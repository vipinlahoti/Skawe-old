import Skawe from 'meteor/skawe:lib';
import Users from './collection.js';

Users.getNotificationProperties = function (user) {
  const properties = {
    profileUrl: Users.getProfileUrl(user),
    displayName: Users.getDisplayName(user),
    siteTitle: Skawe.settings.get('title'),
    siteUrl: Skawe.utils.getSiteUrl()
  };
  return properties;
};
