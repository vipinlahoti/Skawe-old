/*
 * Notifications for new instances and instance approval.
 */

import { Connectors } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import { createNotification } from '../../emails/notifications.js';

/**
 * @summary Add notification callback when a instance is approved
 */
export function approvedNotification (instance) {
  createNotification(instance.document.userId, 'instanceApproved', {documentId: instance.document._id});
}
// addCallback('instances.approve.async', InstancesApprovedNotification);


/**
 * @summary Add new instance notification callback on instance submit
 */
export function createNotifications (instance) {

  const adminUsers = Connectors.find(Users, { isAdmin: true }, { fields: { _id: 1 }});
  let adminIds = _.pluck(adminUsers, '_id');
  let notifiedUserIds = _.pluck(Users.find({'notifications_instances': true}, {fields: {_id: 1}}).fetch(), '_id');

  // remove instance author ID from arrays
  adminIds = _.without(adminIds, instance.document.userId);
  notifiedUserIds = instance.document.userId;

  if (instance.document.status === 1 && !!adminIds.length) {
    // if instance is pending, only notify admins
    // createNotification(adminIds, 'newPendingInstance', {documentId: instance.document._id});
  } else if (!!notifiedUserIds.length) {
    // if instance is approved, notify everybody
    // createNotification(notifiedUserIds, 'newInstance', {documentId: instance.document._id});
  }

}
// addCallback('instances.new.async', InstancesNewNotifications);
