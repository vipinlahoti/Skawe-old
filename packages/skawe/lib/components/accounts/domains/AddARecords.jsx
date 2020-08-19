import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class AddARecords extends Component {
  state = {
    hostName: this.props.records ? this.props.records.name : '',
    ipAddress: this.props.records ? this.props.records.target : '',
    tllValue: this.props.records ? this.props.records.ttl_sec : 0,
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  createRecords = async e => {
    const hostName = this.state.hostName;
    const ipAddress = this.state.ipAddress;
    const tllValue = this.state.tllValue;
    console.log(
      'hostName: ', hostName,
      ' ipAddress: ', ipAddress,
      ' tllValue: ', tllValue
    )
  }

  render() {
    const { hostName, ipAddress, tllValue } = this.state;
    const { records } = this.props;
    const checkDisable = (ipAddress.length > 0) && (String(tllValue).length > 0);

    return (
      <Components.FormElement>
        <Components.FormComponentText
          inputProperties={{
            label: 'Hostname',
            name: 'hostName',
            value: hostName,
            placeholder: 'hostname or @ for root',
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentText
          inputProperties={{
            label: 'IP Address',
            name: 'ipAddress',
            value: ipAddress,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentNumber
          inputProperties={{
            label: 'TLL',
            name: 'tllValue',
            value: tllValue,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />

        <Components.Button variant="primary-fill" onClick={this.createRecords} disabled={!checkDisable}>
          { records ? 'Save' : 'Create' }
        </Components.Button>
      </Components.FormElement>
    )
  }
}

registerComponent({ name: 'AddARecords', component: AddARecords });
