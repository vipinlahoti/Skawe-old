import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class ImportDomainZone extends Component {
  render() {
    return (
      <React.Fragment>
        ImportDomainZone
      </React.Fragment>
    )
  }
}

registerComponent({ name: 'ImportDomainZone', component: ImportDomainZone });
