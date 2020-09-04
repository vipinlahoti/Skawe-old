import { Components, registerComponent, Utils, withMutation, withMessages, withUpdate } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { Instances } from '../../../modules/instances/index.js';

class SummaryHeader extends Component {
  state = {
    instanceStatus: ''
  }
 
  getInstanceData = async e => {
    const { instanceStatus } = this.state;
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
      const cloudInstanceData = body.data;

      this.setState({ instanceStatus: cloudInstanceData.status });
      this.props.instanceStatus(cloudInstanceData);
      
      if ((cloudInstanceData.status !== 'running') && (cloudInstanceData.status !== 'offline')) {
        this.getInstanceData();

      } else {
        this.props.updateInstance({
          selector: { _id: this.props.instanceDbId},
          data: { status: cloudInstanceData.status }
        });
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  instanceActions = async e => {
    const dataMutation = {
      url: e,
      method: 'POST',
      type: 'full',
    }
    console.log('dataMutation', dataMutation)

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const instanceResult = getInstancesData.data;
      
      if (instanceResult.statusCode === 200) {
        this.props.getInstanceData();
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }
  
  restartInstance = async e => {
    e.preventDefault();
    const url = `instances/${this.props.instanceId}/reboot`;
    this.instanceActions(url);
  }

  powerOffInstance = async e => {
    e.preventDefault();
    const url = `instances/${this.props.instanceId}/shutdown`;
    this.instanceActions(url);
  }

  powerOnInstance = async e => {
    e.preventDefault();
    const url = `instances/${this.props.instanceId}/boot`;
    this.instanceActions(url);
  }

  render() {
    const { cloudInstanceData, instanceId } = this.props;
    const { instanceStatus } = this.state;
    const badgeClass = classNames(cloudInstanceData.status === 'running' ? 'bg-primary' : 'bg-danger', 'badge');
    const imageIcon = cloudInstanceData.image.split('/')[1].toLowerCase().replace(/[0-9]./g, '');

    return (
      <React.Fragment>
        <Row className="middle-xs mb-3">
          <Col>
            <div className="page-summary d-flex middle-xs">
              <div className="admin-card-image d-flex middle-xs">
                <img src={`/images/${imageIcon}.png`} alt={imageIcon} />
              </div>
              <div>
                <h5 className="title-5 mb-0 d-flex middle-xs">
                  {cloudInstanceData.label}
                  <small className={badgeClass}>{Utils.toTitleCase(cloudInstanceData.status)}</small>
                </h5>
                <p className="mb-0">{Utils.toTitleCase(cloudInstanceData.image.split('/')[1])}, {cloudInstanceData.specs.vcpus}CPU, {cloudInstanceData.specs.disk / 1024}GB Storage, {cloudInstanceData.specs.memory / 1024}GB RAM</p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="text-right">
              { instanceStatus === 'offline' 
                || cloudInstanceData.status === 'offline' ?
              <Components.Button variant="primary-link" size="small" onClick={this.powerOnInstance}>
                <Components.Icon name="power_settings_new" />
                Power On
              </Components.Button>
              : null}

              { instanceStatus === 'running' 
                || cloudInstanceData.status === 'running' ?
              <React.Fragment>
                <Components.Button variant="black-link" size="small" onClick={this.restartInstance}>
                  <Components.Icon name="autorenew" />
                  Reboot
                </Components.Button>
                <Components.Button variant="danger-link" size="small" onClick={this.powerOffInstance}>
                  <Components.Icon name="power_settings_new" />
                  Power Off
                </Components.Button>
              </React.Fragment>
              : null }
            </div>
          </Col>
        </Row>

      </React.Fragment>
    )
  }
}

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

registerComponent({
  name: 'SummaryHeader',
  component: SummaryHeader,
  hocs: [
    withMessages,
    withMutation(instanceOptions),
    withUpdate({
      collection: Instances,
      fragmentName: 'InstanceItem',
    })
  ]
});
