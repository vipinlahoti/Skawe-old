import Skawe from 'meteor/skawe:lib';
import React from 'react';

const siteTitle = Skawe.settings.get('title');
const logoUrl = Skawe.settings.get('logoUrl');

const Loading = props => {
  return (
    <div className="loader">
      <Skawe.components.Logo logoUrl={logoUrl} siteTitle={siteTitle}/>
    </div>
  );
};

Skawe.registerComponent('Loading', Loading);
