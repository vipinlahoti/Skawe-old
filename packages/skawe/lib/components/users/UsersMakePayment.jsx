import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class UsersMakePayment extends Component {

  render() {
    return (
      <React.Fragment>
        Make payment
      </React.Fragment>
    )
  }
}

registerComponent({ name: 'UsersMakePayment', component: UsersMakePayment });
