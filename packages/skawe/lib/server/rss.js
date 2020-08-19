import { Utils, getSetting } from 'meteor/vulcan:core';
import { Picker } from 'meteor/meteorhacks:picker';
import RSS from 'rss';
import { Posts } from '../modules/posts/index.js';
import { Comments } from '../modules/comments/index.js';
import { getPageUrl } from '../modules/posts/helpers.js';

Posts.addView('rss', Posts.views.new); // default to 'new' view for RSS feed

const getMeta = (url) => {
  const siteUrl = getSetting('siteUrl', Meteor.absoluteUrl());
  
  return {
    title: getSetting('title'),
    description: getSetting('tagline'),
    feed_url: siteUrl + url,
    site_url: siteUrl,
    image_url: siteUrl+'img/favicon.png'
  };
};

export const servePostRSS = (terms, url) => {
  const feed = new RSS(getMeta(url));

  let parameters = Posts.getParameters(terms);
  delete parameters['options']['sort']['sticky'];

  parameters.options.limit = 50;

  const postsCursor = Posts.find(parameters.selector, parameters.options);

  postsCursor.forEach((post) => {

    const description = !!post.body ? post.body+'</br></br>' : '';
    const feedItem = {
      title: post.title,
      description: description + `<a href="${getPageUrl(post, true)}">Discuss</a>`,
      author: post.author,
      date: post.postedAt,
      guid: post._id,
      url: getPageUrl(post, true)
    };

    if (post.thumbnailUrl) {
      const url = Utils.addHttp(post.thumbnailUrl);
      feedItem.custom_elements = [{'imageUrl': url}, {'content': url}];
    }

    feed.item(feedItem);
  });

  return feed.xml();
};

Picker.route('/feed.xml', function(params, req, res, next) {
  if (typeof params.query.view === 'undefined') {
    params.query.view = 'rss';
  }
  res.end(servePostRSS(params.query, 'feed.xml'));
});

Picker.route('/rss/posts/new.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'new'}, '/rss/posts/new.xml'));
});

Picker.route('/rss/posts/top.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'top'}, '/rss/posts/top.xml'));
});

Picker.route('/rss/posts/best.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'best'}, '/rss/posts/best.xml'));
});

Picker.route('/rss/category/:slug/feed.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'new', cat: params.slug}, '/rss/category/:slug/feed.xml'));
});
