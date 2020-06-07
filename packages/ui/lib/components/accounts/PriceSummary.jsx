import Skawe from 'meteor/skawe:lib';
import React from 'react';

const PriceSummary = ({
    distribution,
    region,
    serverPlans,
    selectSizeCount,
    serverLabel,
    rootPassword,
    addOnsPlans
  }) => {

  console.log(
    '## PriceSummary ##',
    'region: ', region,
    'distribution: ', distribution,
    'serverPlans: ', serverPlans,
    'selectSizeCount: ', selectSizeCount,
    'serverLabel: ', serverLabel,
    'rootPassword: ', rootPassword,
    'addOnsPlans: ', addOnsPlans
  );

  const setSSDPrice = serverPlans && serverPlans.length ? Number(serverPlans[5]) : 0;
  let setAddOnPrice = [setSSDPrice];

  for (let i = 0; i < addOnsPlans.length; i++) {
    setAddOnPrice.push(Number(addOnsPlans[i]['priceMo']));
  }

  let totalPrice =  setAddOnPrice.reduce((a, b) => a + b, 0)

  console.log(totalPrice)

  return (
    <div className="price-summary">
      <h5 className="title-5 text-primary">Summary</h5>

      {distribution && distribution.length ?
        <div className="section-xsmall border-bottom">
          <h6 className="title-6">{distribution[1]}</h6>
          <p className="mb-0">{distribution[2]}</p>
        </div>
        : null }

      {region && region.length ?
        <div className="section-xsmall border-bottom">
          <h6 className="title-6">{region[1]}</h6>
          <p className="mb-0">{region[0]}</p>
        </div>
      : null}

      {serverPlans && serverPlans.length ?
        <div className="section-xsmall border-bottom">
          <h6 className="title-6">{serverPlans[1]}</h6>
          <p className="mb-0">{serverPlans[4]} RAM, {serverPlans[3]} SSD, {serverPlans[2]}</p>
        </div>
        : null }

      {serverLabel ?
      <div className="section-xsmall border-bottom">
        <h6 className="title-6">Server Label</h6>
        <p className="mb-0">{serverLabel}</p>
      </div>
      : null}

      {addOnsPlans && addOnsPlans.length ?
        <div className="section-xsmall border-bottom">
          <h6 className="title-6">Additional Features</h6>
          {addOnsPlans.map((addOns, index) => 
            <p className="mb-0" key={index}>{addOns.label} ₹{addOns.priceMo}{addOns.priceMo ? '/mo' : ''} </p>
          )}
        </div>
      : null }

      {serverPlans && serverPlans.length ?
        <div className="section-xsmall">
          <h5 className="title-5 text-primary">₹{totalPrice}<small>/mo</small></h5>
        </div>
      : null }

      <Skawe.components.Button variant="primary" block disabled={!serverPlans.length}>
          Create a Server
      </Skawe.components.Button>

    </div>
  )
}
Skawe.registerComponent('PriceSummary', PriceSummary);
