import Skawe from 'meteor/skawe:lib';
import React from 'react';

const ProfessionalServicesPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Professional Services" description="Professional Services Page" />

      <Skawe.components.HeroJumbotron 
        title="Professional Services"
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

Skawe.registerComponent('ProfessionalServicesPage', ProfessionalServicesPage);
