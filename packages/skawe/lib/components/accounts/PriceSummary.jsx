import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const PriceSummary = () =>

  <div className="price-summary">
    <h5 className="title-5 text-primary">Summary</h5>

    <div className="section-xsmall border-bottom">
      <h6 className="title-6">Tokyo</h6>
      <p className="mb-0">Japan</p>
    </div>

    <div className="section-xsmall border-bottom">
      <h6 className="title-6">Cent OS</h6>
      <p className="mb-0">Cent OS 8 x64</p>
    </div>

    <div className="section-xsmall border-bottom">
      <h6 className="title-6">25 GB SSD</h6>
      <p className="mb-0">1 CPU, 1GB RAM, 1000GB Bandwidth</p>
    </div>

    <div className="section-xsmall border-bottom">
      <h6 className="title-6">Server Hostname</h6>
      <p className="mb-0">demo-host-name</p>
    </div>

    <div className="section-xsmall border-bottom">
      <h6 className="title-6">Server Label</h6>
      <p className="mb-0">demo-label-name</p>
    </div>

    <div className="section-xsmall border-bottom">
      <h6 className="title-6">Additional Features</h6>
      <p className="mb-0">IPV6 Enabled</p>
      <p className="mb-0">Private Networking Enabled</p>
      <p className="mb-0">Backup Enabled - ₹99/mo</p>
    </div>

    <div className="section-xsmall">
      <h5 className="title-5 text-primary">₹499 <small>/mo</small></h5>
    </div>

    <Components.Button variant="primary" block>
      Create
    </Components.Button>
  </div>

registerComponent({ name: 'PriceSummary', component: PriceSummary });
