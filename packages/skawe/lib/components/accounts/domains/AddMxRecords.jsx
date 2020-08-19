import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class AddMxRecords extends Component {
  state = {
    mailServer: this.props.records ? this.props.records.target : '',
    subDomain: this.props.records ? this.props.records.name : '',
    tllValue: this.props.records ? this.props.records.ttl_sec : 0,
    priority: this.props.records ? this.props.records.priority : 10,
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  createNsRecords = async e => {
    const mailServer = this.state.mailServer;
    const subDomain = this.state.subDomain;
    const tllValue = this.state.tllValue;
    const priority = this.state.priority;
    console.log(
      'mailServer: ', mailServer,
      ' subDomain: ', subDomain,
      ' tllValue: ', tllValue,
      ' priority: ', priority
    )
  }

  render() {
    const { mailServer, priority, subDomain, tllValue } = this.state;
    const { records } = this.props;
    const checkDisable = (mailServer.length > 0) && (String(tllValue).length > 0) && (String(priority).length > 0);

    return (
      <Components.FormElement>
        <Components.FormComponentText
          inputProperties={{
            label: 'Mail Server',
            name: 'mailServer',
            value: mailServer,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentNumber
          inputProperties={{
            label: 'Priority',
            name: 'priority',
            value: priority,
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
        <Components.FormComponentText
          inputProperties={{
            label: 'Subdomain',
            name: 'subDomain',
            value: subDomain,
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

registerComponent({ name: 'AddMxRecords', component: AddMxRecords });
