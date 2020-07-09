import Skawe from 'meteor/skawe:lib';
import React from 'react';

const UniversalTOSPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Universal TOS" description="Universal TOS Page" />

      <Skawe.components.HeroJumbotron 
        title="Universal TOS"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
        blackButton={true}
        blackButtonPath="/register"
      />

    </React.Fragment>
  )
}

Skawe.registerComponent('UniversalTOSPage', UniversalTOSPage);
