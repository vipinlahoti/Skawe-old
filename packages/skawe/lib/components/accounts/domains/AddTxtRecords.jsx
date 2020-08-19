import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class AddTxtRecords extends Component {
  state = {
    hostName: this.props.records ? this.props.records.name : '',
    dataValue: this.props.records ? this.props.records.target : '',
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
    const dataValue = this.state.dataValue;
    const tllValue = this.state.tllValue;
    console.log(
      'hostName: ', hostName,
      ' dataValue: ', dataValue,
      ' tllValue: ', tllValue
    )
  }

  render() {
    const { hostName, dataValue, tllValue } = this.state;
    const { records } = this.props;
    const checkDisable = (String(tllValue).length > 0);

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
        <Components.FormComponentTextarea
          inputProperties={{
            label: 'Value',
            name: 'dataValue',
            value: dataValue,
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

        <Components.Button variant="primary-fill" onClick={this.createNsRecords} disabled={!checkDisable}>
          { records ? 'Save' : 'Create' }
        </Components.Button>
      </Components.FormElement>
    )
  }
}

registerComponent({ name: 'AddTxtRecords', component: AddTxtRecords });
