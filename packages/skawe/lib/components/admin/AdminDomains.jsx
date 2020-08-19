import { Components, registerComponent, withAccess } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import React from 'react';
import { Domains } from '../../modules/domains/collection.js';

const AdminDomains = () => (
  <div className="admin-departments">
    <Components.HeadTags title="Domains" description="Domains Page" />

    <h5 className="title-5 mb-1">Admin Domains</h5>
    <div className="instances__list">
      <Components.Datatable
        collection={Domains}
        columns={['name', 'domainId', 'status']}
        options={{
          fragmentName: 'DomainItem',
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

registerComponent('AdminDomains', AdminDomains, [withAccess, accessOptions]);
