/*
 * Pages schema
 */

import { Connectors, Utils, getComponent, getSetting } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import moment from 'moment';
import { isFuture, getPageUrl } from './helpers.js';
import { statuses, statusesOptions } from '../data.js';

/**
 * @summary Pages config namespace
 * @type {Object}
 */
const formGroups = {
  admin: {
    name: 'admin',
    order: 3,
  },
  seo: {
    name: 'seo',
    order: 2,
  },
  main: {
    name: 'main',
    order: 1,
  },
};

/**
 * @summary Pages schema
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
    Timetstamp of page creation
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
    Seo Title
  */
  seoTitle: {
    label: 'SEO Title',
    type: String,
    optional: false,
    max: 70,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'text',
    group: formGroups.seo
  }, 
  /**
    Seo Description
  */
  seoDescription: {
    label: 'SEO Description',
    type: String,
    optional: false,
    max: 200,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'textarea',
    group: formGroups.seo
  },
  /**
    Title
  */
  title: {
    type: String,
    optional: false,
    max: 70,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'text',
    order: 20,
    searchable: true,
    group: formGroups.main
  },
  /**
    Slug
  */
  slug: {
    type: String,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ document: page }) => {
      return Utils.slugify(page.title);
    },
    onUpdate: ({ data }) => {
      if (data.title) {
        return Utils.slugify(data.title);
      }
    },
  },
  /**
    Page Hero Title (markdown)
  */
  heroTitle: {
    label: 'Hero Title',
    type: String,
    optional: false,
    max: 300,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'text',
    order: 30,
    group: formGroups.main
  },
  /**
    Page Hero Description (markdown)
  */
  heroDescription: {
    label: 'Hero Description',
    type: String,
    optional: false,
    max: 300,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'textarea',
    order: 30,
    group: formGroups.main
  },
  /**
    Outline Button
  */
  outlineBtn: {
    label: 'Outline Button',
    type: String,
    optional: true,
    max: 70,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'text',
    order: 40,
    group: formGroups.main
  },
  /**
    Outline Button Url
  */
  outlineBtnUrl: {
    label: 'Outline Button Url',
    type: String,
    optional: true,
    max: 70,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'text',
    order: 50,
    group: formGroups.main
  },
  /**
    Fill Button
  */
  fillBtn: {
    label: 'Fill Button',
    type: String,
    optional: true,
    max: 70,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'text',
    order: 60,
    group: formGroups.main
  },
  /**
    Fill Button Url
  */
  fillBtnUrl: {
    label: 'Fill Button Url',
    type: String,
    optional: true,
    max: 70,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'text',
    order: 70,
    group: formGroups.main
  },
  /**
    Whether the page has form on Hero banner
  */
  heroForm: {
    label: 'Hero Form',
    type: Boolean,
    optional: true,
    defaultValue: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'checkbox',
    order: 80,
    group: formGroups.main
  },
  /**
    Thumbnail
  */
  thumbnailUrl: {
    label: 'Image',
    type: String,
    optional: true,
    control: getComponent('Upload'),
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    order: 90,
    group: formGroups.main,
    form: {
      options: {
        preset: getSetting('cloudinaryPresets').blogs // this setting refers to the transformation you want to apply to the image
      },
    }
  },
  /**
    Page body (markdown)
  */
  body: {
    type: String,
    optional: true,
    max: 50000,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'textarea',
    order: 90,
    group: formGroups.main
  },
  /**
    Count of how many times the page's page was viewed
  */
  viewCount: {
    type: Number,
    optional: true,
    canRead: ['admins'],
    defaultValue: 0,
  },
  /**
    Count of how many times the page's link was clicked
  */
  clickCount: {
    type: Number,
    optional: true,
    canRead: ['admins'],
    defaultValue: 0,
  },
  /**
    The page's status. One of pending (`1`), approved (`2`), or deleted (`3`)
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
        return getSetting('forum.requirePagesApproval', false)
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
    Timestamp of page first appearing on the site (i.e. being approved)
  */
  postedAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'datetime',
    group: formGroups.admin,
    onCreate: ({ document: page }) => {
      if (page.status === statuses.approved) {
        return new Date();
      }
    },
    onUpdate: ({ data, document: page }) => {
      if (!page.postedAt && data.status === statuses.approved) {
        return new Date();
      }
    },
    resolveAs: {
      type: 'String',
      fieldName: 'postedAtFormatted',
      resolver: page => {
        return moment(page.postedAt).format('dddd, MMMM Do YYYY');
      },
    },
  },
  /**
    Save info for later spam checking on a page. We will use this for the akismet package
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
    The page author's `_id`.
  */
  userId: {
    type: String,
    optional: true,
    input: 'select',
    canRead: ['guests'],
    canCreate: ['admins'],
    hidden: true,
    resolveAs: {
      fieldName: 'user',
      type: 'User',
      relation: 'hasOne',
    },
  },
  featuresIds: {
    label: 'Feature',
    type: Array,
    input: 'checkboxgroup',
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    group: formGroups.main,
    options: ({ data }) =>
      data.features.results.map(feature => ({
        value: feature._id,
        label: feature.name,
        slug: feature.slug,
      })),
    query: `
      query FeaturesQuery {
        features{
          results{
            _id
            name
            slug
          }
        }
      }
      `,
    resolveAs: {
      fieldName: 'features',
      type: '[Feature]',
      relation: 'hasMany',
    },
  },
  'featuresIds.$': {
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
      resolver: page => {
        return getPageUrl(page, false);
      },
    },
  },

  pageUrl: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      type: 'String',
      resolver: page => {
        return getPageUrl(page, true);
      }
    }
  }
};

export default schema;
