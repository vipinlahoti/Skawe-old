import { Components, registerComponent, withMulti2, withCurrentUser } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import moment from 'moment';
import { Instances } from '../../../modules/instances/index.js';

class AddDomain extends Component {

  state = {
    domainValue: '',
    emailValue: '',
    selectedInstance: '',
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  selectInstance = type => {
    console.log('type', type)
  }

  createDomain = async e => {
    console.log('create')
  }

  render() {
    const { domainValue, emailValue, selectedInstance } = this.state;
    const { loading, results } = this.props;

    if (loading) {
      return <Components.Loading />
    
    } else {
      const selectInstance = {
        label: 'Select Instance',
        options: results.map(instance => ({ label: instance.label, value: instance._id })),
        onChange: e => {
          this.selectInstance({ label: e.target.name, value: e.target.value });
        },
      }

      const checkDisable = domainValue.length > 0 && emailValue.length > 0 && selectedInstance.length > 0;

      return (
        <div>
          <Components.FormElement>
            <Components.FormComponentText
              inputProperties={{
                label: 'Domain',
                name: 'domainValue',
                value: domainValue,
                autoComplete: 'off',
                onChange: this.handleChange,
              }}
            />
            <Components.FormComponentEmail
              inputProperties={{
                label: 'Email Address',
                name: 'emailValue',
                value: emailValue,
                autoComplete: 'off',
                onChange: this.handleChange,
              }}
            />
            <Components.FormComponentSelect
              inputProperties={selectInstance}
              datatype={[{ type: String }]}
            />

            <Components.Button variant="primary-fill" onClick={this.createDomain} disabled={!checkDisable}>
              Create
            </Components.Button>
          </Components.FormElement>
        </div>
      )

    } 
  }
}

// registerComponent({ name: 'AddDomain', component: AddDomain });
const options = {
  collection: Instances,
  fragmentName: 'InstanceItem',
};

registerComponent({ name: 'AddDomain', component: AddDomain, hocs: [withCurrentUser, [withMulti2, options]] });
