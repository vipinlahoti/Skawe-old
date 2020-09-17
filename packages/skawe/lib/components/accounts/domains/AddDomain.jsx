import { Components, registerComponent, withMulti2, withCurrentUser, withMutation, withCreate } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import moment from 'moment';
import { Instances } from '../../../modules/instances/index.js';
import { Domains } from '../../../modules/domains/index.js';

class AddDomain extends Component {
  state = {
    domainValue: '',
    emailValue: '',
    selectedIpv4: '',
    selectedIpv6: '',
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  selectInstance = type => {
    const getIpv4 = type.value.split(',')[0];
    const getIpv6 = type.value.split(',')[1];

    this.setState({
      selectedIpv4: getIpv4,
      selectedIpv6: getIpv6.substring(0, getIpv6.length - 3)
    })
  }

  createRecords = async (type, name, id) => {
    const { domainValue, emailValue, selectedIpv4, selectedIpv6 } = this.state;
    let getDomain;
    let setCreate;

    if (domainValue.substring(0, 4) !== 'www.') {
      getDomain = domainValue;
    } else {
      getDomain = domainValue.slice(4);
    }

    if (type === 'A') {
      if (name === null) {
        setCreate = {
          target: selectedIpv4,
          type: 'A'
        };

      } else if (name === 'www') {
        setCreate = {
          name: 'www',
          target: selectedIpv4,
          type: 'A'
        };

      } else {
        setCreate = {
          name: 'mail',
          target: selectedIpv4,
          type: 'A'
        };
      }
    
    } else if (type === 'AAAA') {
      if (name === null) {
        setCreate = {
          target: selectedIpv6,
          type: 'AAAA'
        };

      } else if (name === 'www') {
        setCreate = {
          name: 'www',
          target: selectedIpv6,
          type: 'AAAA'
        };

      } else {
        setCreate = {
          name: 'mail',
          target: selectedIpv6,
          type: 'AAAA'
        };
      }

    } else {
      setCreate = {
        priority: 10,
        target: `mail.${getDomain}`,
        type: 'MX'
      };
    }

    const dataMutation = {
      url: `domains/${id}/records`,
      method: 'POST',
      data: setCreate
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  
  }

  createDomain = async e => {
    const { domainValue, emailValue, selectedIpv4 } = this.state;
    const { currentUser, createDomain } = this.props;
    const setCreate = {
      domain: domainValue,
      soa_email: emailValue,
      tags: [],
      type: 'master'
    };

    const dataMutation = {
      url: 'domains',
      method: 'POST',
      data: setCreate
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
        let cloudDomainData = body.data;

        const domainData = {
          name: cloudDomainData.domain,
          domainId: cloudDomainData.id,
          status: cloudDomainData.status,
          userId: currentUser._id
        };

        this.createRecords('A', null, cloudDomainData.id);
        this.createRecords('A', 'www', cloudDomainData.id);
        this.createRecords('A', 'mail', cloudDomainData.id);
        this.createRecords('AAAA', null, cloudDomainData.id);
        this.createRecords('AAAA', 'www', cloudDomainData.id);
        this.createRecords('AAAA', 'mail', cloudDomainData.id);
        this.createRecords('mx', null, cloudDomainData.id);

        createDomain({
          data: domainData
        }).then((domain) => {
          console.log('create domain: ', domain)
        })
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  render() {
    const { domainValue, emailValue, selectedIpv4 } = this.state;
    const { loading, results } = this.props;

    if (loading) {
      return <Components.Loading />
    
    } else {
      const selectInstance = {
        label: 'Select Instance',
        options: results.map(instance => ({ label: instance.label, value: `${instance.ipv4[0]},${instance.ipv6}` })),
        onChange: e => {
          this.selectInstance({ label: e.target.name, value: e.target.value });
        },
      }

      const checkDisable = domainValue.length > 0 && emailValue.length > 0 && selectedIpv4.length > 0;

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

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

const options = {
  collection: Instances,
  fragmentName: 'InstanceItem',
};

registerComponent({
  name: 'AddDomain',
  component: AddDomain,
  hocs: [
    withCurrentUser,
    [withMulti2, options],
    withMutation(instanceOptions),
    withCreate({
      collection: Domains,
      fragmentName: 'DomainItem',
    })
  ]
});
