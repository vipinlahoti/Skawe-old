import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const ListDnsManagerPage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Dashboard" description="Dashboard Page" />
      
      <Components.FirstInstance
        icon="public"
        button="Add a Domain"
        title="Manage your Domains"
        description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
      />

    </React.Fragment>
  )
}

registerComponent({ name: 'ListDnsManagerPage', component: ListDnsManagerPage });
