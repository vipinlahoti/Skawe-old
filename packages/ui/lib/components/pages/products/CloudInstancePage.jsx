import Skawe from 'meteor/skawe:lib';
import React from 'react';

const CloudInstancePage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Cloud Instance" description="Cloud Instance Page" />

      <Skawe.components.HeroJumbotron 
        title="Cloud Instance"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
        whiteButton={true}
        whiteButtonText="View Pricing"
        whiteButtonPath="/pricing"
        blackButton={true}
        blackButtonPath="/register"
      />


    </React.Fragment>
  )
}

Skawe.registerComponent('CloudInstancePage', CloudInstancePage);
