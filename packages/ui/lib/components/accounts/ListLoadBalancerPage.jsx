import Skawe from 'meteor/skawe:lib';
import React from 'react';

const ListLoadBalancerPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Load Balancers" description="Load Balancers Page" />
      
      <Skawe.components.FirstInstance
        icon="swap_horiz"
        button="Create"
        title="Add a Load Balancer"
        description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
        path="/accounts/list-load-balancer/create"
      />

    </React.Fragment>
  )
}

Skawe.registerComponent('ListLoadBalancerPage', ListLoadBalancerPage);
