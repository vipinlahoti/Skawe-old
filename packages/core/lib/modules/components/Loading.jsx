import Skawe from 'meteor/skawe:lib';
import React from 'react';

const siteTitle = Skawe.settings.get('title');
const logoUrl = Skawe.settings.get('logoUrl');

const wrapper = {
  alignItems: 'center',
  borderTop: '5px solid #5e72e4',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center'
};

const Loading = props => {
  return (
    <div style={wrapper}>
      <Skawe.components.Logo logoUrl={logoUrl} siteTitle={siteTitle}/>
    </div>
  );
};

Skawe.registerComponent('Loading', Loading);
