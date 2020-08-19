import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const ListBlockStoragePage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Block Storage" description="Block Storage Page" />
      
      <Components.FirstInstance
        icon="create_new_folder"
        button="Create"
        title="Add extra storage to your Instance"
        description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
        path="/accounts/list-block-storage/create"
      />

    </React.Fragment>
  )
}

registerComponent({ name: 'ListBlockStoragePage', component: ListBlockStoragePage });
