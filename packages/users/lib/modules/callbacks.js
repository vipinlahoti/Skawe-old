import Skawe from 'meteor/skawe:lib';
import Users from './collection.js';

/**
 * @summary Set up user object on creation
 * @param {Object} user – the user object being iterated on and returned
 * @param {Object} options – user options
 */
function setupUser (user, options) {
  // ------------------------------ Properties ------------------------------ //
  var userProperties = {
    profile: options.profile || {},
    karma: 0,
    isInvited: false,
    invitedCount: 0,
    cloudInstances: [],
    backups: [],
    blockStorages: [],
    domains: [],
    help: 0,
    theme: 'light-mode'
  };
  user = _.extend(user, userProperties);

  // look in a few places for the user email
  if (options.email) {
    user.email = options.email;
  } else if (user.services.facebook && user.services.facebook.email) {
    user.email = user.services.facebook.email;
  } else if (user.services.github && user.services.github.email) {
    user.email = user.services.github.email;
  } else if (user.services.google && user.services.google.email) {
    user.email = user.services.google.email;
  } else if (user.services.linkedin && user.services.linkedin.emailAddress) {
    user.email = user.services.linkedin.emailAddress;
  }

  // look in a few places for the displayName
  if (user.profile.username) {
    user.displayName = user.profile.username;
  } else if (user.profile.name) {
    user.displayName = user.profile.name;
  } else if (user.services.linkedin && user.services.linkedin.firstName) {
    user.displayName = user.services.linkedin.firstName + " " + user.services.linkedin.lastName;
  } else {
    user.displayName = user.username;
  }

  // create a basic slug from display name and then modify it if this slugs already exists;
  const basicSlug = Skawe.utils.slugify(user.displayName);
  user.slug = Skawe.utils.getUnusedSlug(Users, basicSlug);

  // if this is not a dummy account, and is the first user ever, make them an admin
  user.isAdmin = (!user.profile.isDummy && Users.find({'profile.isDummy': {$ne: true}}).count() === 0) ? true : false;

  // Events.track('new user', {username: user.displayName, email: user.email});
  console.log(user)
  return user;
}
Skawe.callbacks.add("users.new.sync", setupUser);

/**
 * @summary Increment the user's cloudInstances count
 */
function CloudInstancesNewIncrementCloudInstanceCount (cloudInstances) {
  const userId = cloudInstances.userId;
  console.log('cloudInstances.new.async: ', cloudInstances)
  Users.update({_id: userId}, {'cloudInstances': cloudInstances});
}
Skawe.callbacks.add('cloudInstances.new.async', CloudInstancesNewIncrementCloudInstanceCount);
