import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const AdminFooter = () =>
  <div className="section-xsmall ml-2">
    <div className="copyright text-secondary">Copyright &copy; 2020 All Rights Reserved.</div>
  </div>

registerComponent({ name: 'AdminFooter', component: AdminFooter });
