import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const ControlPanelPage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Hosting" description="Web Hosting Page" />

      <Components.HeroJumbotron 
        title="Control Panel"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
        whiteButton={true}
        whiteButtonText="Visit Marketplace"
        whiteButtonPath="/"
        blackButton={true}
        blackButtonPath="/register"
      />


    </React.Fragment>
  )
}

registerComponent({ name: 'ControlPanelPage', component: ControlPanelPage });
