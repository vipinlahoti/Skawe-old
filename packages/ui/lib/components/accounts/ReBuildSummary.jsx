import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class ReBuildSummary extends Component {
  render() {
    return (
      <Skawe.components.RebuildInstance />
    )
  }
}

Skawe.registerComponent('ReBuildSummary', ReBuildSummary);
