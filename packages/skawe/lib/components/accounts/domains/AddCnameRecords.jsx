import { Components, registerComponent, withMutation, withMessages } from 'meteor/vulcan:core';
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

  createRecords = async e => {
    const hostName = this.state.hostName;
    const alias = this.state.alias;
    const tllValue = this.state.tllValue;
    const domainId = this.props.domainData.id;

    let setData;
    let dataMutation;

    if (this.props.records) {
      setData = {
        name: hostName,
        target: alias,
        ttl_sec: Number(tllValue),
      }
      
      dataMutation = {
        url: `domains/${domainId}/records/${this.props.records.id}`,
        method: 'PUT',
        data: setData
      }

    } else {
      setData = {
        name: hostName,
        target: alias,
        ttl_sec: Number(tllValue),
        type: 'CNAME',
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
    const { hostName, alias, tllValue } = this.state;
    const { records } = this.props;
    const checkDisable = (hostName.length > 0) && (alias.length > 0) && (String(tllValue).length > 0);

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

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

registerComponent({
  name: 'AddCnameRecords',
  component: AddCnameRecords,
  hocs: [
    withMessages,
    withMutation(instanceOptions),
  ]
});
