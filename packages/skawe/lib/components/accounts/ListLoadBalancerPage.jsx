import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const ListLoadBalancerPage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Dashboard" description="Dashboard Page" />
      
      <Components.FirstInstance
        icon="swap_horiz"
        button="Create"
        title="Add a Load Balancer"
        description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
      />

    </React.Fragment>
  )
}

registerComponent({ name: 'ListLoadBalancerPage', component: ListLoadBalancerPage });
