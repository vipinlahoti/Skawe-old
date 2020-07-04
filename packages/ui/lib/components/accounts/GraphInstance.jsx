import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class GraphInstance extends Component {
  render() {
    const { instanceStats } = this.props;
    const cpuStats = instanceStats.data.cpu;
    const ioStats = instanceStats.data.io;
    const netv4Stats = instanceStats.data.netv4;
    const netv6Stats = instanceStats.data.netv6;

    return (
      <React.Fragment>
        <Skawe.components.IPV4GraphInstance netv4Stats={netv4Stats} />
        <Skawe.components.IPV6GraphInstance netv6Stats={netv6Stats} />
        <Skawe.components.CPUGraphInstance cpuStats={cpuStats} />
        <Skawe.components.DiskIOGraphInstance ioStats={ioStats} />
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('GraphInstance', GraphInstance);
