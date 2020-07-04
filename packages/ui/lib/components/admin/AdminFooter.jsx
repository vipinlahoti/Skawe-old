import Skawe from 'meteor/skawe:lib';
import React from 'react';

const AdminFooter = () =>
  <div className="section-xsmall dashboard-footer pl-2">
    <div className="copyright text-secondary">Copyright &copy; 2020 All Rights Reserved.</div>
  </div>

Skawe.registerComponent('AdminFooter', AdminFooter);
