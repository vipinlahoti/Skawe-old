import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class BackupsInstance extends Component {

  enableBackup = async e => {
    const enableBackupsUrl = `linode/instances/${this.props.instanceId}/backups/enable`;

    Meteor.call('instances.enableBackup', enableBackupsUrl, (error, results) => {
      if (results) {
        console.log('enableBackups results: === ', results)
      } else {
        alert(error);
      }
    });
  }

  cancelBackups = async e => {
    const cancelBackupsUrl = `linode/instances/${this.props.instanceId}/backups/cancel`;

    Meteor.call('instances.cancelBackup', cancelBackupsUrl, (error, results) => {
      if (results) {
        console.log('cancelBackups results: === ', results)
      } else {
        alert(error);
      }
    });
  }

  restoreInstance = backupId => {
    const restoreBackupsUrl = `linode/instances/${this.props.instanceId}/backups/${backupId}/restore`;
    const setRestoreBackup = {
      linode_id: this.props.instanceId,
      overwrite: true
    }

    Meteor.call('instances.restoreBackup', restoreBackupsUrl, setRestoreBackup, (error, results) => {
      if (results) {
        console.log('restoreBackup results: === ', results)
      } else {
        alert(error);
      }
    });
  }

  render() {
    const { instance, instanceId, listBackups } = this.props;

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
                            <Skawe.components.Button variant="primary-link btn-no-arrow" size="small" className="pr-0" onClick={e => this.restoreInstance(backups.id)}>
                              <Skawe.components.Icon name="settings_backup_restore" />
                              Restore to Existing Instance
                            </Skawe.components.Button>
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
                <Skawe.components.Button variant="danger" onClick={this.cancelBackups}>
                  Cancel Backups
                </Skawe.components.Button>
              </Col>
            </Row>
          </React.Fragment>
        :
          <Skawe.components.FirstInstance
            callback={this.enableBackup}
            icon="settings_backup_restore"
            title="Add a Backup to your Instances"
            button="Enable Backup"
            description="Three backup slots are executed and rotated automatically: a daily backup, a 2-7 day old backup, and 8-14 day old backup. To enable backups for just $2.00 per month, click below."
          />
        }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('BackupsInstance', BackupsInstance);
