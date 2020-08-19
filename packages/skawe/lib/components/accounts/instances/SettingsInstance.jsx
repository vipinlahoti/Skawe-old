import { Components, registerComponent, withMutation, withMessages, withDelete } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Instances } from '../../../modules/instances/index.js';

class SettingsInstance extends Component {

  state = {
    deleteInstanceCheck: false,
    selectRootPassword: '',
    selectPasswordStrength: ''
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

  deleteInstanceCheck = async e => {
    const name = e.target.name;
    const isChecked = e.target.checked;

    this.setState({
      [name]: isChecked
    })
  }

  deleteInstance = async e => {
    e.preventDefault();
    const url = `instances/${this.props.instanceId}`;
    const dataMutation = {
      url: url,
      method: 'DELETE',
      type: 'full',
    }
    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const deleteInstance = getInstancesData.data;
      
      if (deleteInstance.statusCode === 200) {
        this.props.deleteInstance({
          selector: { _id: this.props.instanceDbId}
        })
        .then(() => this.props.history.push({ pathname: '/accounts/list-cloud-instance' }));
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
    
  }

  changePassword = async e => {
    e.preventDefault();
    const setCreate = {
      password: this.state.selectRootPassword
    };

    if (this.props.instanceStatus !== 'running') {
      const url = `instances/${this.props.instanceId}/disks/${this.props.listDisk}/password`;
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
          }
        } = result;
        const checkResponse = getInstancesData.data;
        
        if (checkResponse && checkResponse.statusCode === 200) {
          this.setState({ selectRootPassword: '' });
          this.props.flash({ id: 'instance.password_change_success', type: 'success' });
        }

      } catch (error) {
        console.error(error); // eslint-disable-line
      }

    } else {
      this.props.flash({ id: 'instance.password_check_offline', type: 'error' });
    }
  }

  render() {
    const { selectPasswordStrength } = this.state;
    const checkPasswordStrength = selectPasswordStrength >= 3;

    return (
      <React.Fragment>
        <div className="bg-light mb-1">
          <Components.RootPassword
            selectedRootPassword={this.selectedRootPassword}
            passwordStrength={this.passwordStrength}
          />
          <div className="p-1">
            <div className="mb-1"><small>Your Instance will be fully powered down in order to change your root password.</small></div>
            <Components.Button variant="primary" onClick={this.changePassword} disabled={!checkPasswordStrength}>
              Save
            </Components.Button>
          </div>
        </div>
        <div className="section-distributions bg-light mb-1">
          <h6 className="title-6">Delete Instance</h6>
          <Form.Group>
            <Form.Label className="custom-checkbox mb-0">
              <input
                type="checkbox"
                id="deleteInstanceCheck"
                name="deleteInstanceCheck"
                checked={this.state.deleteInstanceCheck}
                onChange={this.deleteInstanceCheck}
              />
              <div className="check"></div>
              <div className="mb-0">
                Deleting an Instance will result in permanent data loss.
              </div>
            </Form.Label>
            <Form.Text className="text-muted">
              <ul>
                <li>Gives up all IP addresses,</li>
                <li>Deletes all Disks, Backups, Configs, etc.,</li>
                <li>Stops billing for the Instance and its associated services.</li>
              </ul>
            </Form.Text>
          </Form.Group>

          <Components.Button variant="danger" disabled={!this.state.deleteInstanceCheck} onClick={this.deleteInstance}>
            Delete
          </Components.Button>
        </div>
      </React.Fragment>
    )
  }
}

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

registerComponent({
  name: 'SettingsInstance',
  component: SettingsInstance,
  hocs: [
    withRouter,
    withMessages,
    withMutation(instanceOptions),
    withDelete({
      collection: Instances,
      fragmentName: 'InstanceItem',
    })
  ]
});
