/*
 * Instances helpers
 */

import { Utils } from 'meteor/vulcan:core';

/**
 * @summary Get URL of a instance page.
 * @param {Object} instance
 */
export const getPageUrl = function(instance, isAbsolute = false) {
  const prefix = isAbsolute ? Utils.getSiteUrl().slice(0, -1) : '';
  return `${prefix}/accounts/list-cloud-instance/summary/${instance._id}/${instance.instanceId}`;
};

