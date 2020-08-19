/*
 * Show a list of all bookings
 * http://docs.vulcanjs.org/core-components.html#Datatable
 */

import { Components, registerComponent, withAccess } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import React from 'react';
import { Link } from 'react-router-dom';
import { statusesReverse } from '../../modules/data.js';
import { Pages } from '../../modules/pages/collection.js';

const Title = ({ document: page }) => (
  <Link to={page.pagePath}>
    {page.title}
  </Link>
);

const Features = ({ document: page }) =>
  <React.Fragment>
    {page.features && page.features.map((feature, index) => 
      <React.Fragment key={feature._id}>
        {feature.name}
      </React.Fragment>
    )}
  </React.Fragment>

const Status = ({ document: page }) => (
  <span className={`status-indicator status-indicator-${statusesReverse[page.status]}`}>
    {statusesReverse[page.status]}
  </span>
);

const AdminPages = () => (
  <div className="admin-pages">
    <Components.HeadTags title="Pages" description="Pages" />
    
    <h5 className="title-5 mb-1">Admin Pages</h5>
    <div className="instances__list">
      <Components.Datatable
        collection={Pages}
        columns={[
          { name: '_id' },
          { name: 'title', component: Title },
          { name: 'featuresIds', label: 'Features', filterable: true, component: Features },
          { name: 'status', filterable: true, component: Status },
          { name: 'userId', label: 'User' },
          { name: 'createdAt', label: 'Created At', sortable: true, contents: 'date', filterable: true },
          { name: 'postedAt', label: 'Posted At', sortable: true, contents: 'date', filterable: true },
        ]}
        rowClass={page => `page-item page-item-status-${statusesReverse[page.status]}`}
        options={{
          fragmentName: 'PageItem',
        }}
        showNew={true}
        showEdit={true}
      />
    </div>
  </div>
);

const accessOptions = {
  groups: ['admins'],
  redirect: '/',
  message: 'Sorry, you do not have the rights to access this page.',
};

registerComponent('AdminPages', AdminPages, [withAccess, accessOptions]);
