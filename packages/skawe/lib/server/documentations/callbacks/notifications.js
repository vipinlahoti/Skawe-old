/*
 * Notifications for new documentations and documentation approval.
 */

import { Connectors } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import { Documentations } from '../../../modules/documentations/index.js'
import { createNotification } from '../../emails/notifications.js';

/**
 * @summary Add notification callback when a documentation is approved
 */
export function approvedNotification (documentation) {
  createNotification(documentation.document.userId, 'documentationApproved', {documentId: documentation.document._id});
}
// addCallback('documentations.approve.async', DocumentationsApprovedNotification);


/**
 * @summary Add new documentation notification callback on documentation submit
 */
export function createNotifications (documentation) {

  const adminUsers = Connectors.find(Users, { isAdmin: true }, { fields: { _id: 1 }});
  let adminIds = _.pluck(adminUsers, '_id');
  let notifiedUserIds = _.pluck(Users.find({'notifications_documentations': true}, {fields: {_id:1}}).fetch(), '_id');

  // remove documentation author ID from arrays
  adminIds = _.without(adminIds, documentation.document.userId);
  notifiedUserIds = _.without(notifiedUserIds, documentation.document.userId);

  if (documentation.document.status === 1 && !!adminIds.length) {
    // if documentation is pending, only notify admins
    createNotification(adminIds, 'newPendingDocumentation', {documentId: documentation.document._id});
  } else if (!!notifiedUserIds.length) {
    // if documentation is approved, notify everybody
    createNotification(notifiedUserIds, 'newDocumentation', {documentId: documentation.document._id});
  }

}
// addCallback('documentations.new.async', DocumentationsNewNotifications);
