import Skawe from 'meteor/skawe:lib';
import React from 'react';

const PricingPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Simple, predictable pricing" description="Simple, predictable pricing" />

      <Skawe.components.HeroJumbotron 
        title="Simple, predictable pricing"
        description="Storage, Bandwidth, CPU and RAM bundled into one simple price."
        blackButton={true}
        blackButtonPath="/register"
      />

    </React.Fragment>
  )
}

Skawe.registerComponent('PricingPage', PricingPage);
