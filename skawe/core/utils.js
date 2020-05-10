import Skawe from './config.js';

/**
 * @summary The global namespace for Skawe utils.
 * @namespace Skawe.utils
 */
Skawe.utils = {};

/**
 * @summary Trim a sentence to a specified amount of words and append an ellipsis.
 * @param {String} s - Sentence to trim.
 * @param {Number} numWords - Number of words to trim sentence to.
 */
Skawe.utils.trimWords = (s, numWords) => {
  if (!s) return s;

  const expString = s.split(/\s+/, numWords);
  if(expString.length >= numWords) return expString.join(' ') + '…';
  return s;
};

/**
 * @summary Trim a block of HTML code to get a clean text excerpt
 * @param {String} html - HTML to trim.
 */
Skawe.utils.trimHTML = (html, numWords) => {
  const text = Skawe.utils.stripHTML(html);
  return Skawe.utils.trimWords(text, numWords);
};

/**
 * @summary Capitalize a string.
 * @param {String} str
 */
Skawe.utils.capitalise = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

Skawe.utils.nl2br = str => {
  const breakTag = '<br />';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
};

Skawe.utils.scrollIntoView = selector => {
  if (!document) return;

  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView();
  }
};

// add http: if missing
Skawe.utils.addHttp = url => {
  try {
    if (url.substring(0, 5) !== 'http:' && url.substring(0, 6) !== 'https:') {
      url = 'http:' + url;
    }
    return url;
  } catch (error) {
    return null;
  }
};

Skawe.utils.stripHTML = s => {
  return s.replace(/<(?:.|\n)*?>/gm, '');
};
