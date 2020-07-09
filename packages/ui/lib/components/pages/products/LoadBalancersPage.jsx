import Skawe from 'meteor/skawe:lib';
import React from 'react';

const LoadBalancersPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Load Balancers" description="Load Balancers Page" />

      <Skawe.components.HeroJumbotron 
        title="Load Balancers"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
        whiteButton={true}
        whiteButtonText="View Pricing"
        whiteButtonPath="/pricing"
        blackButton={true}
        blackButtonPath="/register"
      />


    </React.Fragment>
  )
}

Skawe.registerComponent('LoadBalancersPage', LoadBalancersPage);
