/*
 * Posts helpers
 */

import { Utils, getSetting } from 'meteor/vulcan:core';
import moment from 'moment';
import marked from 'marked';
import { Posts } from './collection.js';

/**
 * @summary Get URL of a post page.
 * @param {Object} post
 */
export const getPageUrl = function(post, isAbsolute = false) {
  const prefix = isAbsolute ? Utils.getSiteUrl().slice(0, -1) : '';
  return `${prefix}/blog/${post._id}/${post.slug}`;
};

/**
 * @summary Get URL for sharing on Twitter.
 * @param {Object} post
 */
export const getTwitterShareUrl = post => {
  const via = getSetting('twitterAccount', null)
    ? `&via=${getSetting('twitterAccount')}`
    : '';
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    post.title
  )}%20${encodeURIComponent(getPageUrl(post, true))}${via}`;
};

/**
 * @summary Get URL for sharing on Facebook.
 * @param {Object} post
 */
export const getFacebookShareUrl = post => {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    getPageUrl(post, true)
  )}`;
};

/**
 * @summary Get URL for sharing by Email.
 * @param {Object} post
 */
export const getEmailShareUrl = post => {
  const subject = `Interesting link: ${post.title}`;
  const body = `I thought you might find this interesting:

${post.title}
${getPageUrl(post, true, false)}

(found via ${getSetting('siteUrl')})
  `;
  return `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

export const isFuture = post => {
  if (!post.postedAt) {
    return false;
  }
  const postTime = new Date(post.postedAt).getTime();
  const currentTime = new Date().getTime() + 1000;
  return postTime > currentTime; // round up to the second
};

export const getHTML = (contents, trim) => {
  if (contents) {
    const html = Utils.sanitize(marked(contents));
    // excerpt length is configurable via the settings (30 words by default, ~255 characters)
    return trim
      ? Utils.trimHTML(html, getSetting('forum.postExcerptLength', 20))
      : html;
  }
};
