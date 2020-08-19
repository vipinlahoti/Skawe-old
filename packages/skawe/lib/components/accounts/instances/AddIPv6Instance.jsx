import { Components, registerComponent } from 'meteor/vulcan:core';
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

registerComponent({ name: 'AddIPv6Instance', component: AddIPv6Instance });
