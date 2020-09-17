import { Components, registerComponent, Utils, withMutation, withMessages, withUpdate } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import _clone from 'lodash/clone';
import { Instances } from '../../../modules/instances/index.js';

class ResizeInstance extends Component {
  state = {
    selectServerPlans: [],
    instanceStatus: '',
    disableButton: '',
  }

  getInstanceData = async e => {
    const { instanceStatus } = this.state;
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
      const cloudInstanceData = body.data;
      this.props.instanceStatus(cloudInstanceData);
      this.setState({ disableButton: true });

      if (cloudInstanceData.status !== 'resizing'
          && this.state.instanceStatus === '') {
        this.getInstanceData();

      } else if (cloudInstanceData.status === 'resizing') {
        this.setState({ instanceStatus: cloudInstanceData.status })
        this.getInstanceData();

      } else {
        this.setState({ instanceStatus: '', disableButton: false })
        this.props.instanceStatus(cloudInstanceData);

        const data = {
          type: String(cloudInstanceData.type),
          cpu: String(this.state.selectServerPlans[2]),
          ram: String(this.state.selectServerPlans[4]),
          storage: String(this.state.selectServerPlans[3]),
          status: String(cloudInstanceData.status),
          transfer: String(this.state.selectServerPlans[7]),
          backupPrice: String(this.state.selectServerPlans[6]),
        };

        this.props.updateInstance({
          selector: { _id: this.props.instanceDbId},
          data: data
        })
        .then(() => this.props.flash({ id: 'instance.resize_success', type: 'success' }));
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  selectedPlans = (setServerPlans) => {
    this.setState({
      selectServerPlans: setServerPlans
    });
  }

  resizeInstance = async e => {
    e.preventDefault();
    const { instanceId, listDisks, checkResize } = this.props;
    const getSelectedPlan = Number(this.state.selectServerPlans[3].replace(/\D/g,''));
    const getCurrentPlan = Number(checkResize.replace(/\D/g,''));
    
    if (getSelectedPlan > getCurrentPlan) {
      const url = `instances/${instanceId}/resize`;
      const setCreate = {
        /* server Type string: 'g6-standard-2' */
        type: this.state.selectServerPlans[0], // Server Type
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
          this.props.flash({ id: 'instance.resize_starting', type: 'success' });
          this.getInstanceData();
        }

      } catch (error) {
        console.error(error); // eslint-disable-line
      }
    
    } else {
      this.props.flash({ id: 'instance.resize_upgrade_higher', type: 'error' });
    }
  
  }

  render() {
    const { instance, instanceDbId, instanceId } = this.props;
    const { selectServerPlans, disableButton } = this.state;
    let checkDisabled;

    if (disableButton === '') {
      checkDisabled = !(selectServerPlans.length);
    }
    else {
      checkDisabled = disableButton;
    }

    return (
      <React.Fragment>
        <div className="bg-light mb-1">
          <Components.InstancePlans
            title="Choose a new plan"
            description="You can temporarily or permanently resize your Instance to a different plan."
            selectedPlans={this.selectedPlans}
            disableActive={instance.type}
            input={{ sort: {createdAt: 'asc'} }}
            colSize={3}
          />
        </div>

        <Components.Button variant="primary" disabled={checkDisabled} onClick={this.resizeInstance}>
          Resize a Server
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
  name: 'ResizeInstance',
  component: ResizeInstance,
  hocs: [
    withMessages,
    withMutation(instanceOptions),
    withUpdate({
      collection: Instances,
      fragmentName: 'InstanceItem',
    })
  ]
});
