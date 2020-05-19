import Skawe from 'meteor/skawe:lib';
import React from 'react';

const Heading = ({title, description}) =>
  <React.Fragment>
    <h3 className="title-3">{title}</h3>
    <p className="lead">{description}</p>
  </React.Fragment>

Skawe.registerComponent('Heading', Heading);
