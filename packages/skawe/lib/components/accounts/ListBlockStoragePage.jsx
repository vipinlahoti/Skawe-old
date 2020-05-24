import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const ListBlockStoragePage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Dashboard" description="Dashboard Page" />
      
      <Components.FirstInstance
        icon="create_new_folder"
        button="Create"
        title="Add extra storage to your Instance"
        description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
      />

    </React.Fragment>
  )
}

registerComponent({ name: 'ListBlockStoragePage', component: ListBlockStoragePage });
