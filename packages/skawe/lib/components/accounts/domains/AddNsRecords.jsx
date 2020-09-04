import { Components, registerComponent, withMutation, withMessages } from 'meteor/vulcan:core';
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

  createRecords = async e => {
    const nameServer = this.state.nameServer;
    const subDomain = this.state.subDomain;
    const tllValue = this.state.tllValue;
    const domainId = this.props.domainData.id;

    let setData;
    let dataMutation;

    if (this.props.records) {
      setData = {
        name: subDomain,
        target: nameServer,
        ttl_sec: Number(tllValue),
      }
      
      dataMutation = {
        url: `domains/${domainId}/records/${this.props.records.id}`,
        method: 'PUT',
        data: setData
      }

    } else {
      setData = {
        name: subDomain,
        target: nameServer,
        ttl_sec: Number(tllValue),
        type: 'NS',
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
  name: 'AddNsRecords',
  component: AddNsRecords,
  hocs: [
    withMessages,
    withMutation(instanceOptions),
  ]
});
