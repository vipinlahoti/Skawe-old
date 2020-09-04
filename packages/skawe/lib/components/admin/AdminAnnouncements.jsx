import { Components, registerComponent, withAccess } from 'meteor/vulcan:core';
import { Announcements } from '../../modules/announcements/collection.js';
import React from 'react';

const AdminAnnouncements = () => (
  <div className="admin-announcements">
    <Components.HeadTags title="Announcements" description="Announcements Page" />
    
    <h5 className="title-5 mb-1">Admin Announcements</h5>
    <div className="instances__list">
      <Components.Datatable
        collection={Announcements}
        columns={['description', 'code']}
      />
    </div>
  </div>
);

const accessOptions = {
  groups: ['admins'],
  redirect: '/',
  message: 'Sorry, you do not have the rights to access this page.',
};

registerComponent('AdminAnnouncements', AdminAnnouncements, [withAccess, accessOptions]);
