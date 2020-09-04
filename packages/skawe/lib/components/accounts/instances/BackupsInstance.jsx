import {
  Components,
  registerComponent,
  Utils,
  withCurrentUser,
  withMutation,
  withUpdate,
  withMessages
} from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Instances } from '../../../modules/instances/index.js';

class BackupsInstance extends Component {
  state = {
    backupId: '',
    instanceStatus: '',
  }

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
      
      if (cloudInstanceData.status !== 'restoring'
          && this.state.instanceStatus === '') {
        this.getInstanceData();

      } else if (cloudInstanceData.status === 'restoring') {
        this.setState({ instanceStatus: cloudInstanceData.status })
        this.getInstanceData();

      } else {
        this.setState({ instanceStatus: '' })
        this.props.instanceStatus(cloudInstanceData);

        const data = {
          status: cloudInstanceData.status,
        };

        this.props.updateInstance({
          selector: { _id: this.props.instanceDbId},
          data: data
        })
        // .then(() => this.props.flash({ id: 'instance.backup_restore_success', type: 'success' }));
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  enableBackup = async e => {
    const checkDate = Utils.timeSinceLast(this.props.backupCancelledAt)
    const dataMutation = {
      url: `instances/${this.props.instanceId}/backups/enable`,
      method: 'POST',
      type: 'full',
    }

    if (checkDate >= 24) {
      try {
        const result = await this.props.getInstancesData({ dataMutation });

        const {
          data: {
            getInstancesData
          }
        } = result;
        const body = getInstancesData.data;
        const createBackups = body.data;
        const checkBackupInstance = Object.keys(createBackups).length;

        if (checkBackupInstance === 0) {
          this.setState({ instanceStatus: 'enableBackup' });
          this.props.checkBackup();
          this.getInstanceData();
          this.props.updateInstance({
            selector: { _id: this.props.instanceDbId},
            data: { backupEnabled: true }
          })
          .then(() => this.props.flash({ id: 'instance.backup_enabled', type: 'success' }));
        }

      } catch (error) {
        console.error(error); // eslint-disable-line
      }
    } else {
      this.props.flash({ id: 'instance.reactivate_backup', type: 'error' });
    }
  }

  cancelBackups = async e => {
    const dataMutation = {
      url: `instances/${this.props.instanceId}/backups/cancel`,
      method: 'POST',
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
      const cancelBackups = body.data;
      const checkBackupInstance = Object.keys(cancelBackups).length;

      if (checkBackupInstance === 0) {
        this.setState({ instanceStatus: 'cancelBackups' });
        const data = {
          backupCancelledAt: new Date(),
          backupEnabled: false
        };

        this.getInstanceData();
        this.props.updateInstance({
          selector: { _id: this.props.instanceDbId},
          data: data
        })
        .then(() => this.props.flash({ id: 'instance.backup_cancelled', type: 'success' }));
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  getBackupId = backupId => {
    this.setState({ backupId });
    setTimeout(() => {
      this.restoreInstance();
    }, 1000);
  }

  restoreInstance = async e => {
    const setRestoreBackup = {
      linode_id: Number(this.props.instanceId),
      overwrite: true
    };
    const dataMutation = {
      url: `instances/${this.props.instanceId}/backups/${this.state.backupId}/restore`,
      method: 'POST',
      type: 'full',
      data: setRestoreBackup
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });
      
      if (result) {
        const {
          data: {
            getInstancesData
          },
        } = result;
        const body = getInstancesData.data;
        if (body.statusCode === 200) {
          this.props.flash({ id: 'instance.backup_restore_starting', type: 'success' });
          this.getInstanceData();
        }
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  render() {
    const {
      instance,
      instanceId,
      listBackups,
      backupPriceHr,
      backupPriceMo,
      backupEnabled,
      backupCancelledAt
    } = this.props;

    return (
      <React.Fragment>
        {instance.backups.enabled ?
          <React.Fragment>
            <div className="bg-light p-1 mb-1">
              <Row>
                <Col>
                  <h6 className="title-6">Backups</h6>
                </Col>
              </Row>

              <Row>
                <Col>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Manual / Automatic</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Disks</th>
                        <th scope="col">Restore</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listBackups.automatic.map((backups, index) => 
                        <tr key={index}>
                          <td>Automatic</td>
                          <td>{backups.created}</td>
                          <td>
                            {backups.disks.map((disk, index) =>
                              <span key={index} className="d-block">{disk.label}({disk.filesystem}) - {disk.size} MB</span>
                            )}
                          </td>
                          <td>
                            <Components.Button variant="primary-link btn-no-arrow" size="small" className="pr-0" onClick={e => this.getBackupId(backups.id)}>
                              <Components.Icon name="settings_backup_restore" />
                              Restore to Existing Instance
                            </Components.Button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </div>

            <Row>
              <Col>
                <Components.Button variant="danger" onClick={this.cancelBackups}>
                  Cancel Backups
                </Components.Button>
              </Col>
            </Row>
          </React.Fragment>
        :
          <Row>
            <Col sm={12} md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Add a Backup to your Instances</Card.Title>
                  <Card.Text>Three backup slots are executed and rotated automatically: a daily backup, a 2-7 day old backup, and 8-14 day old backup. To enable backups for just ₹ {backupPriceHr} per hr or ₹ {backupPriceMo} per month, click below.</Card.Text>
                  <Components.Button variant="primary-fill" onClick={this.enableBackup}>
                    Enable Backup
                  </Components.Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        }
      </React.Fragment>
    )
  }
}

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

const backupRestoreOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

registerComponent({
  name: 'BackupsInstance',
  component: BackupsInstance,
  hocs: [
    withCurrentUser,
    withMessages,
    withMutation(instanceOptions),
    withMutation(backupRestoreOptions),
    withUpdate({
      collection: Instances,
      fragmentName: 'InstanceItem',
    })
  ]
});
