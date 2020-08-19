import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class AddCnameRecords extends Component {
  state = {
    hostName: this.props.records ? this.props.records.name : '',
    alias: this.props.records ? this.props.records.target : '',
    tllValue: this.props.records ? this.props.records.ttl_sec : 0,
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  createNsRecords = async e => {
    const hostName = this.state.hostName;
    const alias = this.state.alias;
    const tllValue = this.state.tllValue;
    console.log(
      'hostName: ', hostName,
      ' alias: ', alias,
      ' tllValue: ', tllValue
    )
  }

  render() {
    const { hostName, alias, tllValue } = this.state;
    const { records } = this.props;
    const checkDisable = (hostName.length > 0) && (String(tllValue).length > 0);

    return (
      <Components.FormElement>
        <Components.FormComponentText
          inputProperties={{
            label: 'Hostname',
            name: 'hostName',
            value: hostName,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentText
          inputProperties={{
            label: 'Alias to',
            name: 'alias',
            value: alias,
            autoComplete: 'off',
            placeholder: 'hostname or @ for root',
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

        <Components.Button variant="primary-fill" onClick={this.createNsRecords} disabled={!checkDisable}>
          { records ? 'Save' : 'Create' }
        </Components.Button>
      </Components.FormElement>
    )
  }
}

registerComponent({ name: 'AddCnameRecords', component: AddCnameRecords });
