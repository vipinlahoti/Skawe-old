import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class GraphInstance extends Component {
  render() {
    const { instanceStats } = this.props;
    const cpuStats = instanceStats.cpu;
    const ioStats = instanceStats.io;
    const netv4Stats = instanceStats.netv4;
    const netv6Stats = instanceStats.netv6;

    return (
      <React.Fragment>
        <Components.IPV4GraphInstance netv4Stats={netv4Stats} />
        <Components.IPV6GraphInstance netv6Stats={netv6Stats} />
        <Components.CPUGraphInstance cpuStats={cpuStats} />
        <Components.DiskIOGraphInstance ioStats={ioStats} />
      </React.Fragment>
    )
  }
}

registerComponent({ name: 'GraphInstance', component: GraphInstance });
