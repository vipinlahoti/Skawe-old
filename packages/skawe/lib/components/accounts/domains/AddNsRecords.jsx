import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class AddNsRecords extends Component {
  state = {
    nameServer: this.props.records ? this.props.records.target : '',
    subDomain: this.props.records ? this.props.records.name : '',
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
    const nameServer = this.state.nameServer;
    const subDomain = this.state.subDomain;
    const tllValue = this.state.tllValue;
    console.log(
      'nameServer: ', nameServer,
      ' subDomain: ', subDomain,
      ' tllValue: ', tllValue
    )
  }

  render() {
    const { nameServer, subDomain, tllValue } = this.state;
    const { records } = this.props;
    const checkDisable = (nameServer.length > 0) && (String(tllValue).length > 0);

    return (
      <Components.FormElement>
        <Components.FormComponentText
          inputProperties={{
            label: 'Name Server',
            name: 'nameServer',
            value: nameServer,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentText
          inputProperties={{
            label: 'Subdomain',
            name: 'subDomain',
            value: subDomain,
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

registerComponent({ name: 'AddNsRecords', component: AddNsRecords });
