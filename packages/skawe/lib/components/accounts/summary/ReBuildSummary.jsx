import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class ReBuildSummary extends Component {
  render() {
    return (
      <Components.RebuildInstance
        instanceId={this.props.instanceId}
        instanceStatus={this.props.instanceStatus}
        instanceDbId={this.props.instanceDbId} />
    )
  }
}

registerComponent({ name: 'ReBuildSummary', component: ReBuildSummary });
