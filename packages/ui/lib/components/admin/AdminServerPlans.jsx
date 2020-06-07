import Skawe from 'meteor/skawe:lib';
import { ServerPlans } from 'meteor/skawe:instances';
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';

class AdminServerPlans extends Component {
  state = {
    setApiData: {}
  }

  componentDidMount() {
    const setApiData = JSON.parse(localStorage.getItem('serverPlanList'));
    if (setApiData !== null) this.setState({ setApiData });
  }

  fetchAPI = async e => {
    const serverPlanUrl = 'linode/types';
    localStorage.removeItem('serverPlanList');
    
    Meteor.call('instances.fetch', serverPlanUrl, (error, results) => {
      if (error) {
        alert(error.error);
      }
      else {
        const apiData = results.data;
        const setApiData = _groupBy(results.data, 'class');

        // localstorage setter
        localStorage.setItem('serverPlanList', JSON.stringify(setApiData));

        if (setApiData) {
          this.setState({ setApiData });
        }
      }
    });
  }

  clearLStorage = async e => {
    localStorage.removeItem('serverPlanList');
  }

  render() {
    const { setApiData } = this.state;
    console.log(setApiData);

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Admin ServerPlans" description="Admin ServerPlans Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">Server Plan List from API</h5>
                <div>
                  <Skawe.components.Button size="small" onClick={this.clearLStorage}>
                    Clear Local Storage
                  </Skawe.components.Button>
                  <Skawe.components.Button size="small" variant="black-fill" onClick={this.fetchAPI}>
                    Refetch from API
                  </Skawe.components.Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {Object.keys(setApiData).length ?
          <Skawe.components.InstanceJsonCard
            setApiData={setApiData}
            methodName="serverplans.new"
            collection={ServerPlans}
          /> : null }

        <hr />

        <div className="section-xsmall">
          <Row>
            <Col>
              <h5 className="title-5 mb-1">Server Plan from Database</h5>
              <Skawe.components.DataTable
                collection={ServerPlans}
                showEdit={true}
                columns={[
                  '_id',
                  'planId',
                  'label',
                  'memory',
                  'disk',
                  'vcpu',
                  'transfer',
                  'class',
                  'priceHr',
                  'priceMo',
                  'salesPriceHr',
                  'salesPriceMo',
                  'addonBackupHr',
                  'addonBackupMo',
                  'salesAddonBackupHr',
                  'salesAddonBackupMo'
                ]}
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('AdminServerPlans', AdminServerPlans);
