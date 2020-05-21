import Skawe from 'meteor/skawe:lib';
import React from 'react';

const ContactSalesPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Contact Sales" description="Contact Sales Page" />

      <Skawe.components.HeroJumbotron 
        title="Contact Sales"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
        blackButton={true}
        blackButtonPath="/register"
      />

    </React.Fragment>
  )
}

Skawe.registerComponent('ContactSalesPage', ContactSalesPage);
