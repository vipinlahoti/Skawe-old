import Skawe from 'meteor/skawe:lib';
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

  getListBackups = async e => {
    const instanceId = this.props.instanceId;
    const getInstanceBackupUrl = `linode/instances/${instanceId}/backups`;
    
    Meteor.call('instances.fetch', getInstanceBackupUrl, (error, results) => {
      if (error) {
        alert(error.error);
      }
      else {
        const apiData = results;
        if (apiData) {
          this.setState({ 
            listBackups: apiData
          });
        }
      }
    });
  }

  render() {
    const listBackups = this.state.listBackups;
    const { instance, instanceId } = this.props;
    
    return (
      <React.Fragment>
        {Object.keys(listBackups).length ?
          <Skawe.components.BackupsInstance
            instance={instance}
            listBackups={listBackups}
            instanceId={instanceId}
           />
        : <Skawe.components.ComponentLoading /> }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('BackupSummary', BackupSummary);
