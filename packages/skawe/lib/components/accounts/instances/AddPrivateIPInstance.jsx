import { Components, registerComponent, withMutation, withMessages } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class AddPrivateIPInstance extends Component {

  getInstanceData = async e => {
    const dataMutation = {
      url: `instances/${this.props.instanceId}`,
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
      let cloudInstanceData = body.data;
      this.props.instanceStatus(cloudInstanceData);
      this.props.getNetworkIps();

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  getNetworkIps = async e => {
    const instanceId = this.props.instanceId;
    const url = `instances/${instanceId}/ips`;

    const setPrivateIP = {
      type: 'ipv4',
      public: false
    };

    const dataMutation = {
      url: url,
      method: 'POST',
      type: 'full',
      data: setPrivateIP
    }
    
    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const networkIps = getInstancesData.data;
      
      if (networkIps.statusCode === 200) {
        this.props.closeModal();
        this.getInstanceData();
        this.props.flash({ id: 'instance.add_private_ipv4_success', type: 'success' })
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

        <Components.Button variant="primary-fill" onClick={this.getNetworkIps}>
          Allocate
        </Components.Button>

        <Components.Button>
          Cancel
        </Components.Button>
      </React.Fragment>
    )
  }
}

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

registerComponent({
  name: 'AddPrivateIPInstance',
  component: AddPrivateIPInstance,
  hocs: [
    withMessages,
    withMutation(instanceOptions),
  ]
});
