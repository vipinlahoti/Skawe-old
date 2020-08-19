import { Components, registerComponent, withAccess } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Features } from '../../modules/features/collection.js';
import React from 'react';

const AdminFeatures = () => (
  <div className="admin-features">
    <Components.HeadTags title="Features" description="Features Page" />
    
    <h5 className="title-5 mb-1">Admin Features</h5>
    <div className="instances__list">
      <Components.Datatable
        collection={Features}
        columns={['name', 'slug', 'order']}
        newFormProps={{ label: <FormattedMessage id="features.new" /> }}
      />
    </div>
  </div>
);

const accessOptions = {
  groups: ['admins'],
  redirect: '/',
  message: 'Sorry, you do not have the rights to access this page.',
};

registerComponent('AdminFeatures', AdminFeatures, [withAccess, accessOptions]);
