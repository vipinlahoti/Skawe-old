import { Components, registerComponent, withMutation, withMessages, withUpdate } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import _clone from 'lodash/clone';
import { Instances } from '../../../modules/instances/index.js';

class RebuildInstance extends Component {
  state = {
    selectRootPassword: '',
    selectPasswordStrength: '',
    disableButtion: '',
    instanceStatus: '',
    selectDistribution: [],
  }
 
  getInstanceData = async e => {
    const url = `instances/${this.props.instanceId}`;
    const dataMutation = {
      url: url,
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
      this.setState({ disableButtion: true })
      this.props.instanceStatus(cloudInstanceData);
      
      if (cloudInstanceData.status !== 'rebuilding'
          && this.state.instanceStatus === '') {
        this.getInstanceData();

      } else if (cloudInstanceData.status === 'rebuilding') {
        this.setState({ instanceStatus: cloudInstanceData.status })
        this.getInstanceData();

      } else {
        this.setState({ instanceStatus: '' })
        this.props.instanceStatus(cloudInstanceData);

        const data = {
          image: this.state.selectDistribution[2],
          status: this.state.instanceStatus.status,
        };

        this.props.updateInstance({
          selector: { _id: this.props.instanceDbId},
          data: data
        })
        .then(() => this.props.flash({ id: 'instance.rebuild_success', type: 'success' }));
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  selectedRootPassword = (setRootPassword) => {
    this.setState({
      selectRootPassword: setRootPassword
    });
  }

  passwordStrength = getStrength => {
    this.setState({
      selectPasswordStrength: getStrength
    });
  }

  selectedDistribution = (setDistribution) => {
    this.setState({
      selectDistribution: setDistribution
    });
  }

  reBuildServer = async e => {
    e.preventDefault();
    const instanceId = this.props.instanceId;
    const url = `instances/${instanceId}/rebuild`;

    const setCreate = {
      /* Distribution ID string: linode/debian9 */
      image: this.state.selectDistribution[0], // OS Image

      /* strong root password 'string' */
      root_pass: this.state.selectRootPassword, // Server Password
    };

    const dataMutation = {
      url: url,
      method: 'POST',
      type: 'full',
      data: setCreate
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });
      
      const {
        data: {
          getInstancesData
        },
      } = result;
      const body = getInstancesData.data;

      if (body.statusCode === 200) {
        this.props.flash({ id: 'instance.rebuild_starting', type: 'success' });
        this.getInstanceData();
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  render () {
    const { selectPasswordStrength, selectDistribution, disableButtion } = this.state;
    let checkPasswordStrength;

    if (disableButtion === '') {
      checkPasswordStrength = !(selectDistribution.length && selectPasswordStrength >= 3);
    }
    else {
      checkPasswordStrength = disableButtion;
    }

    return (
      <React.Fragment>
        <h6 className="title-6">Rebuilding will destroy all data on all existing disks on this Instance.</h6>
        <div className="bg-light mb-1">
          <Components.DistributionSelect
            title="Choose an Operating System"
            placeholder="-- Select an Operating System --"
            selectedDistribution={this.selectedDistribution}
          />
        </div>

        <div className="bg-light mb-1">
          <Components.RootPassword
            selectedRootPassword={this.selectedRootPassword}
            passwordStrength={this.passwordStrength}
          />
        </div>

        <Components.Button variant="primary" disabled={checkPasswordStrength} onClick={this.reBuildServer}>
          Rebuild
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
  name: 'RebuildInstance',
  component: RebuildInstance,
  hocs: [
    withMessages,
    withMutation(instanceOptions),
    withUpdate({
      collection: Instances,
      fragmentName: 'InstanceItem',
    })
  ]
});
