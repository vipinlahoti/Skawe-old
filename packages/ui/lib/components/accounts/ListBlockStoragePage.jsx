import Skawe from 'meteor/skawe:lib';
import React from 'react';

const ListBlockStoragePage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Block Storage" description="Block Storage Page" />
      
      <Skawe.components.FirstInstance
        icon="create_new_folder"
        button="Create"
        title="Add extra storage to your Instance"
        description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
        path="/accounts/list-block-storage/create"
      />

    </React.Fragment>
  )
}

Skawe.registerComponent('ListBlockStoragePage', ListBlockStoragePage);
