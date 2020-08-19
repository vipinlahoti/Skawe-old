import React from 'react';
import { Components, registerComponent, withAccess } from 'meteor/vulcan:core';
import { Categories } from '../../modules/categories/collection.js';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const AdminCategories = () => (
  <div className="admin-categories">
    <Components.HeadTags title="Categories" description="Categories Page" />
    
    <h5 className="title-5 mb-1">Admin Categories</h5>
    <div className="instances__list">
      <Components.Datatable
        collection={Categories}
        columns={['name', 'slug']}
        newFormProps={{ label: <FormattedMessage id="categories.new" /> }}
      />
    </div>
  </div>
);

const accessOptions = {
  groups: ['admins'],
  redirect: '/',
  message: 'Sorry, you do not have the rights to access this page.',
};

registerComponent('AdminCategories', AdminCategories, [withAccess, accessOptions]);

export default AdminCategories;
