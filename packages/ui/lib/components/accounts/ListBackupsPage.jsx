import Skawe from 'meteor/skawe:lib';
import React from 'react';

const ListBackupsPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Dashboard" description="Dashboard Page" />
      
      <Skawe.components.FirstInstance
        icon="settings_backup_restore"
        title="Add a Backup to your Instances"
        button="Create a Backup"
        description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
      />

    </React.Fragment>
  )
}

Skawe.registerComponent('ListBackupsPage', ListBackupsPage);
