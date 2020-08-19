import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class AddSrvRecords extends Component {
  state = {
    service: this.props.records ? this.props.records.service : '',
    target: this.props.records ? this.props.records.target : '',
    tllValue: this.props.records ? this.props.records.ttl_sec : 0,
    protocol: this.props.records ? this.props.records.protocol : 'tcp',
    priority: this.props.records ? this.props.records.priority : 10,
    weight: this.props.records ? this.props.records.weight : 5,
    port: this.props.records ? this.props.records.port : 80,
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  createNsRecords = async e => {
    const service = this.state.service;
    const protocol = this.state.protocol;
    const priority = this.state.priority;
    const weight = this.state.weight;
    const port = this.state.port;
    const target = this.state.target;
    const tllValue = this.state.tllValue;

    console.log(
      'service: ', service,
      ' protocol: ', protocol,
      ' priority: ', priority,
      ' weight: ', weight,
      ' port: ', port,
      ' target: ', target,
      ' tllValue: ', tllValue,
    )
  }

  render() {
    const { service, protocol, priority, weight, port, target, tllValue } = this.state;
    const { records } = this.props;
    const checkDisable = 
      (service.length > 0)
      && (target.length > 0)
      && (String(priority).length > 0)
      && (String(weight).length > 0)
      && (String(port).length > 0)
      && (String(tllValue).length > 0)
      && protocol.length > 0;

    return (
      <Components.FormElement>
        <Components.FormComponentText
          inputProperties={{
            label: 'Service',
            name: 'service',
            value: service,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentText
          inputProperties={{
            label: 'Protocol',
            name: 'protocol',
            value: protocol,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentNumber
          inputProperties={{
            label: 'Priorirt',
            name: 'priority',
            value: priority,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentNumber
          inputProperties={{
            label: 'Weight',
            name: 'weight',
            value: weight,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentNumber
          inputProperties={{
            label: 'Port',
            name: 'port',
            value: port,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentText
          inputProperties={{
            label: 'Target',
            name: 'target',
            value: target,
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

registerComponent({ name: 'AddSrvRecords', component: AddSrvRecords });
