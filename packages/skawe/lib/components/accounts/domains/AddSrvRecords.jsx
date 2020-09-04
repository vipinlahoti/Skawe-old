import { Components, registerComponent, withMutation, withMessages } from 'meteor/vulcan:core';
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

    const domainId = this.props.domainData.id;

    let setData;
    let dataMutation;

    if (this.props.records) {
      setData = {
        port: Number(port),
        priority: Number(priority),
        protocol: protocol,
        service: service,
        target: target,
        ttl_sec: Number(tllValue),
        weight: Number(weight),
      }
      
      dataMutation = {
        url: `domains/${domainId}/records/${this.props.records.id}`,
        method: 'PUT',
        data: setData
      }

    } else {
      setData = {
        port: Number(port),
        priority: Number(priority),
        protocol: protocol,
        service: service,
        target: target,
        ttl_sec: Number(tllValue),
        weight: Number(weight),
        type: 'SRV'
      }
      
      dataMutation = {
        url: `domains/${domainId}/records`,
        method: 'POST',
        data: setData
      }
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const body = getInstancesData.data;

      if (body.statusCode === 200) {
        this.props.closeModal();
        if (this.props.records) {
          this.props.flash({ id: 'records.edited', type: 'success' });
        } else {
          this.props.flash({ id: 'records.created', type: 'success' });
        }
        this.props.domainRecords();
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
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

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

registerComponent({
  name: 'AddSrvRecords',
  component: AddSrvRecords,
  hocs: [
    withMessages,
    withMutation(instanceOptions),
  ]
});
