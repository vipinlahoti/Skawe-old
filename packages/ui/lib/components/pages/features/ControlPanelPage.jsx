import Skawe from 'meteor/skawe:lib';
import React from 'react';

const ControlPanelPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Hosting" description="Web Hosting Page" />

      <Skawe.components.HeroJumbotron 
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

Skawe.registerComponent('ControlPanelPage', ControlPanelPage);
