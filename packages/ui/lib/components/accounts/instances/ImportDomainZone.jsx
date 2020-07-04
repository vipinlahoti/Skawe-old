import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class ImportDomainZone extends Component {
  state = {
    selectLabel: '',
  }

  selectedLabel = (setLabel) => {
    this.setState({
      selectLabel: setLabel
    });
  }

  render() {
    return (
      <React.Fragment>
        
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('ImportDomainZone', ImportDomainZone);
