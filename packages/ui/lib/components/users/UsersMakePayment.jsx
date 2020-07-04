import Skawe from 'meteor/skawe:lib';
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

Skawe.registerComponent('UsersMakePayment', UsersMakePayment);
