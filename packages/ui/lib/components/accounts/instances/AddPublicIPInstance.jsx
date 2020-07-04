import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class AddPublicIPInstance extends Component {
  render() {
    return (
      <React.Fragment>
        Add Public IP Instance
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('AddPublicIPInstance', AddPublicIPInstance);
