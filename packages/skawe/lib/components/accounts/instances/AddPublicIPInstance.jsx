import { Components, registerComponent } from 'meteor/vulcan:core';
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

registerComponent({ name: 'AddPublicIPInstance', component: AddPublicIPInstance });
