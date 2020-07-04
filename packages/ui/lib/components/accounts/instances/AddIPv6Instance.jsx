import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class AddIPv6Instance extends Component {
  render() {
    return (
      <React.Fragment>
        Add IPv6 Instance
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('AddIPv6Instance', AddIPv6Instance);
