import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

class SummaryHeader extends Component {
 
  getInstanceData = async e => {
    const getMyInstancesUrl = `linode/instances/${this.props.instanceId}`;
    
    Meteor.call('instances.fetch', getMyInstancesUrl, (error, results) => {
      if (error) {
        alert(error.error);
      }
      else {
        const apiData = results;
        if (apiData) {
          this.setState({ 
            bootStatus: apiData.status,
            bootPercent: this.state.bootPercent + 10,
          });
        }
        Skawe.instances.cloudInstance = [apiData];
      }
    });
  }
  
  restartInstance = async e => {
    e.preventDefault();
    const restartInstanceUrl = `linode/instances/${this.props.instanceId}/reboot`;

    Meteor.call('instances.restartInstance', restartInstanceUrl, (error, results) => {
      if (error) {
        alert(error);
      } else {
        this.getInstanceData();
      }
    });
  }

  powerOffInstance = async e => {
    e.preventDefault();
    const powerOffInstanceUrl = `linode/instances/${this.props.instanceId}/shutdown`;

    Meteor.call('instances.powerOffInstance', powerOffInstanceUrl, (error, results) => {
      if (error) {
        alert(error);
      } else {
        this.getInstanceData();
      }
    });
  }

  powerOnInstance = async e => {
    e.preventDefault();
    const powerOnInstanceUrl = `linode/instances/${this.props.instanceId}/boot`;

    Meteor.call('instances.powerOnInstance', powerOnInstanceUrl, (error, results) => {
      if (error) {
        alert(error);
      } else {
        this.getInstanceData();
      }
    });
  }

  render() {
    const { cloudInstanceData, instanceId } = this.props;
    const badgeClass = classNames(cloudInstanceData.status === 'running' ? 'bg-primary' : 'bg-danger', 'badge');

    return (
      <React.Fragment>
        <Row className="middle-xs mb-3">
          <Col>
            <div className="page-summary d-flex middle-xs">
              <div className="admin-card-image d-flex middle-xs">
                <img src="/images/centos.png" alt="centos" />
              </div>
              <div>
                <h5 className="title-5 mb-0 d-flex middle-xs">
                  {cloudInstanceData.label}
                  <small className={badgeClass}>{cloudInstanceData.status}</small>
                </h5>
                <p className="mb-0">{Skawe.utils.capitalise(cloudInstanceData.image.split('/')[1])}, {cloudInstanceData.specs.vcpus}CPU, {cloudInstanceData.specs.disk / 1024}GB Storage, {cloudInstanceData.specs.memory / 1024}GB RAM</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="text-right">
              { cloudInstanceData.status === 'offline' ?
              <Skawe.components.Button variant="primary-link" size="small" onClick={this.powerOnInstance}>
                <Skawe.components.Icon name="power_settings_new" />
                Power On
              </Skawe.components.Button>
              :
              <React.Fragment>
                <Skawe.components.Button variant="black-link" size="small" onClick={this.restartInstance}>
                  <Skawe.components.Icon name="autorenew" />
                  Reboot
                </Skawe.components.Button>
                <Skawe.components.Button variant="danger-link" size="small" onClick={this.powerOffInstance}>
                  <Skawe.components.Icon name="power_settings_new" />
                  Power Off
                </Skawe.components.Button>
              </React.Fragment>
              }
            </div>
          </Col>
        </Row>

      </React.Fragment>
    )
  }
}

Skawe.registerComponent('SummaryHeader', SummaryHeader);

