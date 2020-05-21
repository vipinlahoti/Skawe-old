import Skawe from 'meteor/skawe:lib';
import React from 'react';

const DashboardPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Dashboard" description="Dashboard Page" />

      <Skawe.components.HeroJumbotron 
        title="Dashboard"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
      />

    </React.Fragment>
  )
}

Skawe.registerComponent('DashboardPage', DashboardPage);
