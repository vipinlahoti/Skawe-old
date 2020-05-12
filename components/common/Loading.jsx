import Skawe from '@skawe';
import React from 'react';

const wrapper = {
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  background: '#c8eeff'
};

const Loading = props => {
  const siteTitle = 'Skawe';

  return (
    <div style={wrapper}>
      <Skawe.components.Logo siteTitle={siteTitle} />
    </div>
  );
};

Skawe.registerComponent('Loading', Loading);
