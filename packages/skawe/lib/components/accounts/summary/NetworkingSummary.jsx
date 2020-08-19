import { Components, registerComponent, Utils, withMutation } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class NetworkingSummary extends Component {
  state = {
    networkIps: {},
  }

  componentDidMount() {
    this.getNetworkIps();
  }

  getNetworkIps = async e => {
    const instanceId = this.props.instanceId;
    const dataMutation = {
      url: `instances/${instanceId}/ips`,
      method: 'GET',
      type: 'full',
    }
    
    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const body = getInstancesData.data;
      const networkIps = body.data;
      
      if (networkIps) {
        this.setState({ networkIps });
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  render() {
    const networkIps = this.state.networkIps;

    return (
      <React.Fragment>
        {Object.keys(networkIps).length ?
          <Components.NetworkingInstance
            instanceId={this.props.instanceId}
            instanceStatus={this.props.instanceStatus}
            networkIps={networkIps}
            getNetworkIps={this.getNetworkIps}
          />
        : <Components.Loading /> }
      </React.Fragment>
    )
  }
}

const options = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

withMutation(options)(NetworkingSummary);
registerComponent('NetworkingSummary', NetworkingSummary, [withMutation, options]);
