import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class OverviewSidebarInstance extends Component {

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

  render() {
    const { instance, usedBandwidth, instanceId } = this.props;
    const transferUsed = usedBandwidth.used;
    const totalTransfer = instance.specs.transfer * 1024;
    const makeTransferUsed = transferUsed / 1024;
    const setTransferUsed = makeTransferUsed.toFixed(2);
    const makeTransfer = setTransferUsed / totalTransfer;
    const setTransfer = makeTransfer.toFixed(4);

    return (
      <React.Fragment>

        <ListGroup className="cloud__card">
          <ListGroup.Item>
            <h6 className="title-6 mb-1">Monthly Network Transfer</h6>
            <div className="progress progress-animate">
              <div className="progress-fill" style={{width: `${setTransfer}%`}}></div>
            </div>
            <div className="d-flex between-xs">
              <small>{Skawe.utils.sizeConvertWithLabel(usedBandwidth.used)}</small>
              <small>{instance.specs.transfer} GB</small>
            </div>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="cloud__card">
          <ListGroup.Item>
            <h6 className="title-6 mb-1">Last Backup</h6>
            {instance.backups.last_successful}
            {instance.backups.enabled ? Skawe.utils.timeZoneFormat(instance.backups.last_successful, 'now') :
              <React.Fragment>
                <p>You do not have active backups.</p>
                <Skawe.components.Button variant="primary" size="small" onClick={this.enableBackup}>
                  Enable Now
                </Skawe.components.Button>
              </React.Fragment>
            }
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="cloud__card">
          <ListGroup.Item>
            <h6 className="title-6 mb-1">Manage your Domains</h6>
            <p>Click below to create a backup for all cloud instances automatically when new instace is created.</p>
            <Skawe.components.Button variant="primary" size="small" path="/accounts/list-dns-manager" isLink={true}>
              Add a Domain
            </Skawe.components.Button>
          </ListGroup.Item>
        </ListGroup>
      </React.Fragment>
    )
  }
}
Skawe.registerComponent('OverviewSidebarInstance', OverviewSidebarInstance);
