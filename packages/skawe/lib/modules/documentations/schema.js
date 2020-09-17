/*
 * Documentations schema
 */

import { Connectors, Utils, getComponent, getSetting } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import moment from 'moment';
import {
  isFuture,
  getHTML,
  getTwitterShareUrl,
  getEmailShareUrl,
  getFacebookShareUrl,
  getPageUrl,
} from './helpers.js';
import { statuses, statusesOptions } from '../data.js';


/**
 * @summary Documentations config namespace
 * @type {Object}
 */
const formGroups = {
  admin: {
    name: 'admin',
    order: 2,
  },
};

/**
 * @summary Documentations schema
 * @type {Object}
 */
const schema = {
  /**
    ID
  */
  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  /**
    Timetstamp of documentation creation
  */
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['admins'],
    onCreate: () => {
      return new Date();
    },
  },
  /**
    Title
  */
  title: {
    type: String,
    optional: false,
    max: 150,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    input: 'text',
    order: 20,
    searchable: true
  },
  /**
    Slug
  */
  slug: {
    type: String,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ document: documentation }) => {
      return Utils.slugify(documentation.title);
    },
    onUpdate: ({ data }) => {
      if (data.title) {
        return Utils.slugify(data.title);
      }
    },
  },
  /**
    Documentation body (markdown)
  */
  body: {
    type: String,
    optional: true,
    max: 90000,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    input: 'textarea',
    order: 30
  },
  /**
    HTML version of the documentation body
  */
  htmlBody: {
    type: String,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ document }) => getHTML(document.body),
    onUpdate: ({ data }) => getHTML(data.body),
  },
  /**
    Thumbnail
  */
  thumbnailUrl: {
    type: String,
    optional: true,
    control: getComponent('Upload'),
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    form: {
      options: {
        preset: getSetting('cloudinaryPresets').blogs // this setting refers to the transformation you want to apply to the image
      },
    }
  },
  
  /**
    Count of how many times the documentation's page was viewed
  */
  viewCount: {
    type: Number,
    optional: true,
    canRead: ['admins'],
    defaultValue: 0,
  },
  /**
    Count of how many times the documentation's link was clicked
  */
  clickCount: {
    type: Number,
    optional: true,
    canRead: ['admins'],
    defaultValue: 0,
  },
  /**
    The documentation's status. One of pending (`1`), approved (`2`), or deleted (`3`)
  */
  status: {
    type: Number,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'select',
    onCreate: ({ document, currentUser }) => {
      if (isFuture(document)) {
        return statuses.scheduled;
      } else if (Users.isAdmin(currentUser)) {
        return document.status || statuses.approved;
      } else {
        return getSetting('forum.requireDocumentationsApproval', false)
          ? statuses.pending
          : statuses.approved;
      }
    },
    onUpdate: ({ data }) => {
      // if postedAt date is manually being changed, force status to scheduled or approved
      if (data.postedAt) {
        return isFuture(data) ? statuses.scheduled : statuses.approved;
      }
    },
    options: statusesOptions,
    group: formGroups.admin,
  },

  /**
    Timestamp of documentation first appearing on the site (i.e. being approved)
  */
  postedAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'datetime',
    group: formGroups.admin,
    onCreate: ({ document: documentation }) => {
      if (documentation.status === statuses.approved) {
        return new Date();
      }
    },
    onUpdate: ({ data, document: documentation }) => {
      if (!documentation.postedAt && data.status === statuses.approved) {
        return new Date();
      }
    },
    resolveAs: {
      type: 'String',
      fieldName: 'postedAtFormatted',
      resolver: documentation => {
        return moment(documentation.postedAt).format('dddd, MMMM Do YYYY');
      },
    },
  },
  /**
    Save info for later spam checking on a documentation. We will use this for the akismet package
  */
  userIP: {
    type: String,
    optional: true,
    canRead: ['admins'],
  },
  userAgent: {
    type: String,
    optional: true,
    canRead: ['admins'],
  },
  referrer: {
    type: String,
    optional: true,
    canRead: ['admins'],
  },
  /**
    The documentation author's `_id`.
  */
  userId: {
    type: String,
    optional: true,
    input: 'select',
    canRead: ['guests'],
    canCreate: ['members'],
    hidden: true,
    resolveAs: {
      fieldName: 'user',
      type: 'User',
      relation: 'hasOne',
    },
  },
  categoriesIds: {
    label: 'Category',
    type: Array,
    input: 'checkboxgroup',
    optional: true,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    options: ({ data }) =>
      data.categories.results.map(category => ({
        value: category._id,
        label: category.name,
        slug: category.slug,
      })),
    query: `
      query CategoriesQuery {
        categories{
          results{
            _id
            name
            slug
          }
        }
      }
      `,
    resolveAs: {
      fieldName: 'categories',
      type: '[Category]',
      relation: 'hasMany',
    },
  },
  'categoriesIds.$': {
    type: String,
    optional: true,
  },


  // GraphQL-only fields
  pagePath: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      type: 'String',
      resolver: documentation => {
        return getPageUrl(documentation, false);
      },
    },
  },

  pageUrl: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      type: 'String',
      resolver: documentation => {
        return getPageUrl(documentation, true);
      },
    },
  },

  emailShareUrl: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      type: 'String',
      resolver: (documentation, args, { Documentations }) => getEmailShareUrl(documentation),
    },
  },

  twitterShareUrl: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      type: 'String',
      resolver: (documentation, args, { Documentations }) => getTwitterShareUrl(documentation),
    },
  },

  facebookShareUrl: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      type: 'String',
      resolver: (documentation, args, { Documentations }) => getFacebookShareUrl(documentation),
    },
  },
};

export default schema;
