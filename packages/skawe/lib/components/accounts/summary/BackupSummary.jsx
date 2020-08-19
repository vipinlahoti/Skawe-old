import { Components, registerComponent, withMutation } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class BackupSummary extends Component {
  state = {
    listBackups: {},
  }

  componentDidMount() {
    this.getListBackups();
  }

  checkBackup = async e => {
    this.getListBackups(); 
  }

  getListBackups = async e => {
    const instanceId = this.props.instanceId;
    
    const dataMutation = {
      url: `instances/${instanceId}/backups`,
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
      const listBackups = body.data;
      
      if (listBackups) {
        this.setState({ listBackups });
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  render() {
    const listBackups = this.state.listBackups;
    const {
      instance,
      instanceId,
      instanceDbId,
      instanceStatus,
      instanceSingle
    } = this.props;
    
    return (
      <React.Fragment>
        {Object.keys(listBackups).length ?
          <Components.BackupsInstance
            instance={instance}
            instanceId={instanceId}
            instanceDbId={instanceDbId}
            instanceStatus={instanceStatus}
            listBackups={listBackups}
            backupPrice={instanceSingle.backupPrice}
            backupEnabled={instanceSingle.backupEnabled}
            backupCancelledAt={instanceSingle.backupCancelledAt}
            checkBackup={this.checkBackup}
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

withMutation(options)(BackupSummary);
registerComponent('BackupSummary', BackupSummary, [withMutation, options]);
