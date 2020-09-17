/*
Callbacks to:

- Increment a user's documentation count
- Run documentation approved callbacks
- Update a user's documentation count
- Remove a user's documentations when it's deleted
- Track clicks
*/

import { Connectors, getSetting } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import Events from 'meteor/vulcan:events';
import { Documentations } from '../../../modules/documentations/index.js'

/**
 * @summary Increment the user's documentation count
 */
export function incrementUserDocumentationCount(documentation) {
  var userId = documentation.document.userId;
  Users.update({ _id: userId }, { $inc: { 'documentationCount': 1 } });
}

//////////////////////////////////////////////////////
// documentations.remove.sync                                //
//////////////////////////////////////////////////////

export function DocumentationsRemoveOperations(documentation) {
  Users.update({ _id: documentation.document.userId }, { $inc: { 'documentationCount': -1 } });
  return documentation;
}
// addCallback('documentations.remove.sync', DocumentationsRemoveOperations);

//////////////////////////////////////////////////////
// users.remove.async                               //
//////////////////////////////////////////////////////

export function UsersRemoveDeleteDocumentations(user, options) {
  if (options.deleteDocumentations) {
    Documentations.remove({ userId: user._id });
  } else {
    // not sure if anything should be done in that scenario yet
    // Documentations.update({userId: userId}, {$set: {author: '\[deleted\]'}}, {multi: true});
  }
}
// addCallback('users.remove.async', UsersRemoveDeleteDocumentations);

//////////////////////////////////////////////////////
// documentations.click.async                                //
//////////////////////////////////////////////////////

// /**
//  * @summary Increase the number of clicks on a documentation
//  * @param {string} documentationId – the ID of the documentation being edited
//  * @param {string} ip – the IP of the current user
//  */

export function clickTracking(documentation, ip) {
  if (getSetting('forum.trackClickEvents', true)) {
    Events.track('documentation.click', { title: documentation.title, documentationId: documentation._id });
    Connectors.update(Documentations, documentation._id, { $inc: { clickCount: 1 } });
  }
}

// track links clicked, locally in Events collection
// note: this event is not sent to segment cause we cannot access the current user 
// in our server-side route /out -> sending an event would create a new anonymous 
// user: the free limit of 1,000 unique users per month would be reached quickly
// addCallback('documentations.click.async', DocumentationsClickTracking);
