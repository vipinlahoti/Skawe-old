import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const ContactSalesPage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Contact Sales" description="Contact Sales Page" />

      <Components.HeroJumbotron 
        title="Contact Sales"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
        blackButton={true}
        blackButtonPath="/register"
      />

    </React.Fragment>
  )
}

registerComponent({ name: 'ContactSalesPage', component: ContactSalesPage });
