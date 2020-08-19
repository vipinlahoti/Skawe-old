import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class ResizeSummary extends Component {
  render() {
    const {
      instance,
      instanceId,
      instanceDbId,
      instanceStatus,
      listDisks,
      instanceSingle
    } = this.props;

    return (
      <Components.ResizeInstance
        instance={instance}
        instanceId={instanceId}
        instanceDbId={instanceDbId}
        instanceStatus={instanceStatus}
        listDisk={listDisks}
        checkResize={instanceSingle.storage}
      />
    )
  }
}

registerComponent({ name: 'ResizeSummary', component: ResizeSummary });
