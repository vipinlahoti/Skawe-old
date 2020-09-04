import { Components, registerComponent, withMutation, withMessages } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class AddSoaRecords extends Component {
  state = {
    domain: this.props.records ? this.props.records.domain : '',
    email: this.props.records ? this.props.records.soa_email : '',
    tllValue: this.props.records ? this.props.records.ttl_sec : '',
    refresh: this.props.records ? this.props.records.refresh_sec : '',
    retry: this.props.records ? this.props.records.retry_sec : '',
    expire: this.props.records ? this.props.records.expire_sec : '',
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  }

  createRecords = async e => {
    const domain = this.state.domain;
    const email = this.state.email;
    const tllValue = this.state.tllValue;
    const refresh = this.state.refresh;
    const retry = this.state.retry;
    const expire = this.state.expire;
    const domainId = this.props.records.id;

    const setSoaData = {
      axfr_ips: [],
      domain: domain,
      expire_sec: Number(expire),
      refresh_sec: Number(refresh),
      retry_sec: Number(retry),
      soa_email: email,
      status: this.props.records.status,
      ttl_sec: Number(tllValue),
    }

    const dataMutation = {
      url: `domains/${domainId}`,
      method: 'PUT',
      data: setSoaData
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
        this.props.flash({ id: 'records.edited', type: 'success' });
        this.props.getDomain();
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  render() {
    const { domain, email, tllValue, refresh, retry, expire } = this.state;
    const checkDisable = 
      domain.length > 0
      && email.length > 0
      && (String(tllValue).length > 0)
      && (String(refresh).length > 0)
      && (String(retry).length > 0)
      && (String(expire).length > 0);

    return (
      <Components.FormElement>
        <Components.FormComponentText
          inputProperties={{
            label: 'Domain',
            name: 'domain',
            value: domain,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentEmail
          inputProperties={{
            label: 'SOA Email',
            name: 'email',
            value: email,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentNumber
          inputProperties={{
            label: 'Default TLL',
            name: 'tllValue',
            value: tllValue,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentNumber
          inputProperties={{
            label: 'Refresh Rate',
            name: 'refresh',
            value: refresh,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentNumber
          inputProperties={{
            label: 'Retry Rate',
            name: 'retry',
            value: retry,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />
        <Components.FormComponentNumber
          inputProperties={{
            label: 'Expire Rate',
            name: 'expire',
            value: expire,
            autoComplete: 'off',
            onChange: this.handleChange,
          }}
        />

        <Components.Button variant="primary-fill" onClick={this.createRecords} disabled={!checkDisable}>
          Save
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
  name: 'AddSoaRecords',
  component: AddSoaRecords,
  hocs: [
    withMessages,
    withMutation(instanceOptions),
  ]
});
