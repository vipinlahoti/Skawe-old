import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class ResizeSummary extends Component {
  render() {
    const { instance, instanceId } = this.props;

    return (
      <Skawe.components.ResizeInstance instance={instance} instanceId={instanceId} />
    )
  }
}

Skawe.registerComponent('ResizeSummary', ResizeSummary);
