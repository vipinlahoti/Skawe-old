import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const ListBackupsPage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Dashboard" description="Dashboard Page" />
      
      <Components.FirstInstance
        icon="settings_backup_restore"
        title="Add a Backup to your Instances"
        button="Create a Backup"
        description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
      />

    </React.Fragment>
  )
}

registerComponent({ name: 'ListBackupsPage', component: ListBackupsPage });
