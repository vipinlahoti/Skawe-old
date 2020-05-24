import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const CloudInstancePage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Cloud Instance" description="Cloud Instance Page" />

      <Components.HeroJumbotron 
        title="Cloud Instance"
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

registerComponent({ name: 'CloudInstancePage', component: CloudInstancePage });
