import Skawe from 'meteor/skawe:lib';
import { ServerPlans } from 'meteor/skawe:instances';
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';

class AdminServerPlans extends Component {
  state = {
    setApiData: {},
    apiData: {},
    storeServerPlan: {},
  }

  fetchAPI = async e => {
    const serverPlanUrl = 'linode/types';
    
    Meteor.call('instances.fetch', serverPlanUrl, (error, results) => {
      if (error) {
        alert(error.error);
      }
      else {
        const setApiDatas = _groupBy(results.data, 'class');
        const apiData = results.data;

        if (apiData) {
          this.setState({
            setApiData: setApiDatas,
            apiData: apiData
          });
        }
      }
    });
  }

  selectedData = (setSelectedItem) => {
    this.setState({
      storeServerPlan: setSelectedItem
    });
  }

  storeSelectedUtemToDB = () => {
    const serverPlanToStore = this.state.storeServerPlan;

    Meteor.call('instances.new', serverPlanToStore, 'ServerPlans', (error) => {
      if (error) {
        console.log(error)
      }
    });    
  }

  render() {
    const { setApiData, apiData } = this.state; // eslint-disable-line
    const { regionsList } = this.props;

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Admin ServerPlans" description="Admin ServerPlans Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">Server Plan List from API</h5>
                <Skawe.components.Button size="small" onClick={this.fetchAPI}>
                  Refetch from API
                </Skawe.components.Button>
              </div>
            </Col>
          </Row>
        </div>

        {Object.keys(setApiData).length ?
          <Skawe.components.ServerPlans
            setApiData={setApiData}
            apiData={apiData}
            selectedData={this.selectedData}
          /> : null }

        {Object.keys(setApiData).length ?
          <Skawe.components.Button size="small" onClick={this.storeSelectedUtemToDB}>
            Store selected in Database
          </Skawe.components.Button>
        : null}

        <hr />

        <div className="section-xsmall">
          <Row>
            <Col>
              <h5 className="title-5 mb-1">Server Plan from Database</h5>
              <Skawe.components.DataTable
                collection={ServerPlans}
                columns={['label', 'id', 'memory', 'vcpus', 'disk', 'transfer', 'retail Price mo', 'retail Price hr', 'sale Price mo', 'sale Price hr' ]}
                showEdit={true}
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('AdminServerPlans', AdminServerPlans);
