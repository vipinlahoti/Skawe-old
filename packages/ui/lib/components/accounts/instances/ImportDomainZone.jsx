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


// <Skawe.components.SkaweForms
//   buttonText="Save"
//   fields={[
//     {
//       id: 'domain',
//       type: 'text',
//       label: 'Domain',
//       required: true
//     },
//     {
//       id: 'remote-nameserver',
//       type: 'text',
//       label: 'Remote Nameserver',
//       required: true
//     }
//   ]}
// />
