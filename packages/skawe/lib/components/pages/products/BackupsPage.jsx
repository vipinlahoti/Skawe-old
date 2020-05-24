import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const BackupsPage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Backups" description="Backups Page" />

      <Components.HeroJumbotron 
        title="Backups"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
        whiteButton={true}
        whiteButtonText="View Pricing"
        whiteButtonPath="/"
        blackButton={true}
        blackButtonPath="/register"
      />

    
    </React.Fragment>
  )
}

registerComponent({ name: 'BackupsPage', component: BackupsPage });
