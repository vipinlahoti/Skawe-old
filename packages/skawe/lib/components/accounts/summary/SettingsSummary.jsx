import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class SettingsSummary extends Component {
  render() {
    const { instanceId, instanceDbId, instanceStatus, listDisk } = this.props;
    return (
      <Components.SettingsInstance
        listDisk={listDisk}
        instanceId={instanceId}
        instanceStatus={instanceStatus}
        instanceDbId={instanceDbId}
      />
    )
  }
}

registerComponent({ name: 'SettingsSummary', component: SettingsSummary });
