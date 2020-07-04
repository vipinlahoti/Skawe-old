import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class SettingsInstance extends Component {

  state = {
    deleteInstanceCheck: false,
    selectRootPassword: '',
    selectPasswordStrength: ''
  }

  selectedRootPassword = (setRootPassword) => {
    console.log(setRootPassword)
    this.setState({
      selectRootPassword: setRootPassword
    });
  }

  passwordStrength = getStrength => {
    console.log(getStrength)
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
    const deleteInstanceUrl = `linode/instances/${this.props.instanceId}`;
    
    Meteor.call('instances.deleteInstance', deleteInstanceUrl, (error, results) => {
      if (results) {
        console.log('deleteInstance results: === ', results)
      } else {
        console.log(error);
      }
    });
  }

  changePassword = async e => {
    e.preventDefault();
    console.log('changePassword', this.state.selectRootPassword)
  }

  render() {
    const { selectPasswordStrength } = this.state;
    const checkPasswordStrength = selectPasswordStrength >= 3;

    return (
      <React.Fragment>
        <div className="bg-light mb-1">
          <Skawe.components.RootPassword
            selectedRootPassword={this.selectedRootPassword}
            passwordStrength={this.passwordStrength}
          />
          <div className="p-1">
            <div className="mb-1"><small>Your Instance will be fully powered down in order to change your root password.</small></div>
            <Skawe.components.Button variant="primary" onClick={this.changePassword} disabled={!checkPasswordStrength}>
              Save
            </Skawe.components.Button>
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
          </Form.Group>

          <Skawe.components.Button variant="danger" disabled={!this.state.deleteInstanceCheck} onClick={this.deleteInstance}>
            Delete
          </Skawe.components.Button>
        </div>
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('SettingsInstance', SettingsInstance);
