/*
 * Pages helpers
 */

import { Utils } from 'meteor/vulcan:core';

/**
 * @summary Get URL of a page page.
 * @param {Object} page
 */
export const getPageUrl = function(page, isAbsolute = false) {
  const prefix = isAbsolute ? Utils.getSiteUrl().slice(0, -1) : '';
  return `${prefix}/page/${page._id}/${page.slug}`;
};

export const isFuture = page => {
  if (!page.postedAt) {
    return false;
  }
  const pageTime = new Date(page.postedAt).getTime();
  const currentTime = new Date().getTime() + 1000;
  return pageTime > currentTime; // round up to the second
};
