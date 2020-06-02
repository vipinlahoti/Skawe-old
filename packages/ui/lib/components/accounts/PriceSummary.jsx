import Skawe from 'meteor/skawe:lib';
import React from 'react';

const PriceSummary = ({region, os, serverPlans, selectSizeCount, serverLabel, addOns}) =>

  <div className="price-summary">
    <h5 className="title-5 text-primary">Summary</h5>

    {os && os.length ?
    <div className="section-xsmall border-bottom">
      <h6 className="title-6">{os[1]}</h6>
      <p className="mb-0">{os[2]}</p>
    </div>
    : null }

    {region && region.length ?
    <div className="section-xsmall border-bottom">
      <h6 className="title-6">Region</h6>
      <p className="mb-0">{region[1]}</p>
    </div>
    : null }

    {selectSizeCount ?
      <div className="section-xsmall border-bottom">
      <h6 className="title-6">Size</h6>
      <p className="mb-0">{selectSizeCount} GB</p>
    </div>
    : null }

    {serverPlans && serverPlans.length ?
    <div className="section-xsmall border-bottom">
      <h6 className="title-6">{serverPlans[3]}</h6>
      <p className="mb-0">{serverPlans[4]} RAM, {serverPlans[2]} SSD, {serverPlans[1]} CPU</p>
    </div>
    : null }

    {serverLabel ?
    <div className="section-xsmall border-bottom">
      <h6 className="title-6">Server Label</h6>
      <p className="mb-0">{serverLabel}</p>
    </div>
    : null}

    {addOns ?
    <div className="section-xsmall border-bottom">
      <h6 className="title-6">Additional Features</h6>
      <p className="mb-0">IPV6 Enabled</p>
      <p className="mb-0">Private Networking Enabled</p>
      <p className="mb-0">Backup Enabled - ₹99/mo</p>
    </div>
    : null}

    {serverPlans && serverPlans.length ?
    <React.Fragment>
      <div className="section-xsmall">
        <h5 className="title-5 text-primary">₹{serverPlans[5]} <small>/mo</small></h5>
      </div>

      <Skawe.components.Button variant="primary" block>
        Create
      </Skawe.components.Button>
    </React.Fragment>
    : null }

    {selectSizeCount ?
    <React.Fragment>
      <div className="section-xsmall">
        <h5 className="title-5 text-primary">₹{selectSizeCount * 12} <small>/mo</small></h5>
      </div>

      <Skawe.components.Button variant="primary" block>
          Create
      </Skawe.components.Button>
    </React.Fragment>
    : null }

  </div>

Skawe.registerComponent('PriceSummary', PriceSummary);
