import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class SettingsSummary extends Component {
  render() {
    const { instanceId } = this.props;
    return (
      <Skawe.components.SettingsInstance instanceId={instanceId} />
    )
  }
}

Skawe.registerComponent('SettingsSummary', SettingsSummary);
