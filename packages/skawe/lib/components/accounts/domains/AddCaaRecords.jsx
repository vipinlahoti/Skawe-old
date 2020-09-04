import { Components, registerComponent, withMutation, withMessages } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class AddCaaRecords extends Component {
  state = {
    nameValue: this.props.records ? this.props.records.name : '',
    dataValue: this.props.records ? this.props.records.target : '',
    tllValue: this.props.records ? this.props.records.ttl_sec : 0,
    tag: this.props.records ? this.props.records.tag : 'issue',
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  createNsRecords = async e => {
    const nameValue = this.state.nameValue;
    const dataValue = this.state.dataValue;
    const tllValue = this.state.tllValue;
    const tag = this.state.tag;
    const domainId = this.props.domainData.id;

    let setData;
    let dataMutation;

    if (this.props.records) {
      setData = {
        name: nameValue,
        tag: tag,
        target: dataValue,
        ttl_sec: Number(tllValue),
      }
      
      dataMutation = {
        url: `domains/${domainId}/records/${this.props.records.id}`,
        method: 'PUT',
        data: setData
      }

    } else {
      setData = {
        name: nameValue,
        tag: tag,
        target: dataValue,
        ttl_sec: Number(tllValue),
        type: 'CAA',
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
    const { nameValue, tag, dataValue, tllValue } = this.state;
    const { records } = this.props;
    const checkDisable = (dataValue.length > 0) && (String(tllValue).length > 0) && tag.length > 0;

    return (
      <Components.FormElement>
        <Components.FormComponentText
          inputProperties={{
            label: 'Name',
            name: 'nameValue',
            value: nameValue,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentText
          inputProperties={{
            label: 'Tag',
            name: 'tag',
            value: tag,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentText
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

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

registerComponent({
  name: 'AddCaaRecords',
  component: AddCaaRecords,
  hocs: [
    withMessages,
    withMutation(instanceOptions),
  ]
});
