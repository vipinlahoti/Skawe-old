import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class AddPrivateIPInstance extends Component {
  render() {
    return (
      <React.Fragment>
        Add Private IP Instance
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('AddPrivateIPInstance', AddPrivateIPInstance);
