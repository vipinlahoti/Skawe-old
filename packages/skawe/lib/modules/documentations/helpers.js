/*
 * Documentations helpers
 */

import { Utils, getSetting } from 'meteor/vulcan:core';
import moment from 'moment';
import marked from 'marked';
import { Documentations } from './collection.js';

/**
 * @summary Get URL of a documentation page.
 * @param {Object} documentation
 */
export const getPageUrl = function(documentation, isAbsolute = false) {
  const prefix = isAbsolute ? Utils.getSiteUrl().slice(0, -1) : '';
  return `${prefix}/docs/${documentation._id}/${documentation.slug}`;
};

/**
 * @summary Get URL for sharing on Twitter.
 * @param {Object} documentation
 */
export const getTwitterShareUrl = documentation => {
  const via = getSetting('twitterAccount', null)
    ? `&via=${getSetting('twitterAccount')}`
    : '';
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    documentation.title
  )}%20${encodeURIComponent(getPageUrl(documentation, true))}${via}`;
};

/**
 * @summary Get URL for sharing on Facebook.
 * @param {Object} documentation
 */
export const getFacebookShareUrl = documentation => {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    getPageUrl(documentation, true)
  )}`;
};

/**
 * @summary Get URL for sharing by Email.
 * @param {Object} documentation
 */
export const getEmailShareUrl = documentation => {
  const subject = `Interesting link: ${documentation.title}`;
  const body = `I thought you might find this interesting:

${documentation.title}
${getPageUrl(documentation, true, false)}

(found via ${getSetting('siteUrl')})
  `;
  return `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

export const isFuture = documentation => {
  if (!documentation.postedAt) {
    return false;
  }
  const documentationTime = new Date(documentation.postedAt).getTime();
  const currentTime = new Date().getTime() + 1000;
  return documentationTime > currentTime; // round up to the second
};

export const getHTML = (contents, trim) => {
  if (contents) {
    const html = Utils.sanitize(marked(contents));
    // excerpt length is configurable via the settings (30 words by default, ~255 characters)
    return trim
      ? Utils.trimHTML(html, getSetting('forum.documentationExcerptLength', 20))
      : html;
  }
};
