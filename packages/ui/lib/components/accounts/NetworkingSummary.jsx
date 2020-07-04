import Skawe from 'meteor/skawe:lib';
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
    const getInstanceBackupUrl = `linode/instances/${instanceId}/ips`;
    
    Meteor.call('instances.fetch', getInstanceBackupUrl, (error, results) => {
      if (error) {
        alert(error.error);
      }
      else {
        const apiData = results;
        if (apiData) {
          this.setState({ 
            networkIps: apiData
          });
          Skawe.instances.networkIps = apiData;
        }
      }
    });
  }

  render() {
    const networkIps = this.state.networkIps;

    return (
      <React.Fragment>
        {Object.keys(networkIps).length ?
          <Skawe.components.NetworkingInstance networkIps={networkIps} />
        : <Skawe.components.ComponentLoading /> }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('NetworkingSummary', NetworkingSummary);
