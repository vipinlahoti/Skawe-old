import { Components, registerComponent } from 'meteor/vulcan:core';
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

    console.log(
      'nameValue: ', nameValue,
      ' dataValue: ', dataValue,
      ' tllValue: ', tllValue,
      ' tag: ', tllValue
    )
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

registerComponent({ name: 'AddCaaRecords', component: AddCaaRecords });
