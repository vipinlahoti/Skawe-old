import Skawe from 'meteor/skawe:lib';
import React from 'react';

const Heading = ({title, description}) =>
  <React.Fragment>
    <h3 className="title-3" dangerouslySetInnerHTML={{ __html: title }}></h3>
    <p className="lead" dangerouslySetInnerHTML={{ __html: description }}></p>
  </React.Fragment>

Skawe.registerComponent('Heading', Heading);
