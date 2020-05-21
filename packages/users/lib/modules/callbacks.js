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
    skawe: {
      karma: 0,
      isInvited: false,
      invitedCount: 0
    }
  };
  user = _.extend(user, userProperties);

  // look in a few places for the user email
  if (options.email) {
    user.skawe.email = options.email;
  } else if (user.services.facebook && user.services.facebook.email) {
    user.skawe.email = user.services.facebook.email;
  } else if (user.services.github && user.services.github.email) {
    user.skawe.email = user.services.github.email;
  } else if (user.services.google && user.services.google.email) {
    user.skawe.email = user.services.google.email;
  } else if (user.services.linkedin && user.services.linkedin.emailAddress) {
    user.skawe.email = user.services.linkedin.emailAddress;
  }

  // look in a few places for the displayName
  if (user.profile.username) {
    user.skawe.displayName = user.profile.username;
  } else if (user.profile.name) {
    user.skawe.displayName = user.profile.name;
  } else if (user.services.linkedin && user.services.linkedin.firstName) {
    user.skawe.displayName = user.services.linkedin.firstName + " " + user.services.linkedin.lastName;
  } else {
    user.skawe.displayName = user.username;
  }

  // create a basic slug from display name and then modify it if this slugs already exists;
  const basicSlug = Skawe.utils.slugify(user.skawe.displayName);
  user.skawe.slug = Skawe.utils.getUnusedSlug(Users, basicSlug);

  // if this is not a dummy account, and is the first user ever, make them an admin
  user.isAdmin = (!user.profile.isDummy && Users.find({'profile.isDummy': {$ne: true}}).count() === 0) ? true : false;

  // Events.track('new user', {username: user.skawe.displayName, email: user.skawe.email});

  return user;
}
Skawe.callbacks.add("users.new.sync", setupUser);
