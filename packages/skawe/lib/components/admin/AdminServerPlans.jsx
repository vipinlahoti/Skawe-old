import { Components, registerComponent, withMutation } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';
import { Plans } from '../../modules/plans/collection.js';

const Label = ({ document: plans }) => {

  return (
    <React.Fragment>
      <span className="d-block"><strong>{plans.label}</strong></span>
      <small>{plans.memory}GB RAM, {plans.vcpu}CPU, {plans.disk}GB Storage, {plans.transfer}GB Transfer </small>
    </React.Fragment>
  )
}

const Price = ({ document: plans }) => {
  return (
    <React.Fragment>
      <span className="d-block">{plans.priceHr}/hr</span>
      <span className="d-block">{plans.priceMo}/mo</span>
    </React.Fragment>
  )
}

const SellPrice = ({ document: plans }) => {
  return (
    <React.Fragment>
      <span className="d-block">{plans.sellPriceHr}/hr</span>
      <span className="d-block">{plans.sellPriceMo}/mo</span>
    </React.Fragment>
  )
}

const Backup = ({ document: plans }) => {
  return (
    <React.Fragment>
      <span className="d-block">{plans.addonBackupHr}/hr</span>
      <span className="d-block">{plans.addonBackupMo}/mo</span>
    </React.Fragment>
  )
}

const SellBackup = ({ document: plans }) => {
  return (
    <React.Fragment>
      <span className="d-block">{plans.sellAddonBackupHr}/hr</span>
      <span className="d-block">{plans.sellAddonBackupMo}/mo</span>
    </React.Fragment>
  )
}

class AdminServerPlans extends Component {
  state = {
    setApiData: {}
  }

  componentDidMount() {
    const setApiData = JSON.parse(localStorage.getItem('serverPlanList'));
    if (setApiData !== null) this.setState({ setApiData });
  }

  fetchAPI = async e => {
    const dataMutation = {
      url: 'types',
      type: 'full',
      method: 'GET'
    }
    localStorage.removeItem('serverPlanList');
    
    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        },
      } = result;
      const body = getInstancesData.data;
      const apiData = body.data;
      const setApiData = _groupBy(apiData.data, 'class');
      
      // localstorage setter
      localStorage.setItem('serverPlanList', JSON.stringify(setApiData));

      if (setApiData) {
        this.setState({ setApiData });
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  clearLStorage = async e => {
    localStorage.removeItem('serverPlanList');
  }

  render() {
    const { setApiData } = this.state;

    return (
      <React.Fragment>
        <Components.HeadTags title="Admin ServerPlans" description="Admin ServerPlans Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">Server Plan List from API</h5>
                <div>
                  <Components.Button size="small" onClick={this.clearLStorage}>
                    Clear Local Storage
                  </Components.Button>
                  <Components.Button size="small" variant="primary-fill" onClick={this.fetchAPI}>
                    Refetch from API
                  </Components.Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {Object.keys(setApiData).length ?
          <Components.InstanceJsonCard
            setApiData={setApiData}
            collection={Plans}
          /> : null}

        <hr />

        <div className="section-xsmall">
          <Row>
            <Col>
              <h5 className="title-5 mb-1">Server Plan from Database</h5>
              <Components.Datatable
                collection={Plans}
                columns={[
                  { name: 'label', component: Label },
                  { name: 'planId' },
                  { name: 'addons' },
                  { name: 'priceHr', label: 'Price', component: Price },
                  { name: 'sellPriceHr', label: 'Sell Price', component: SellPrice },
                  { name: 'addonBackupHr', label: 'Backup', component: Backup },
                  { name: 'sellAddonBackupHr', label: 'Sell Backup', component: SellBackup },
                ]}
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

const options = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

withMutation(options)(AdminServerPlans);
registerComponent('AdminServerPlans', AdminServerPlans, [withMutation, options]);
