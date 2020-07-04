import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddedDomainInstance extends Component {
  render() {
    const { domainAddedData } = this.props;

    return (
      <div className="instances__list">
        No Domains Added
      </div>
    )
  }
}

Skawe.registerComponent('AddedDomainInstance', AddedDomainInstance);
