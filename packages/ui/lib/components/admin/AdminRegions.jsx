import Skawe from 'meteor/skawe:lib';
import { Regions } from 'meteor/skawe:instances';
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';

class AdminRegions extends Component {
  state = {
    setApiData: {}
  }

  componentDidMount() {
    const setApiData = JSON.parse(localStorage.getItem('RegionList'));
    if (setApiData !== null) this.setState({ setApiData });
  }

  fetchAPI = async e => {
    const regionUrl = 'regions';
    localStorage.removeItem('RegionList');
    
    Meteor.call('instances.fetch', regionUrl, (error, results) => {
      if (error) {
        alert(error.error);
      }
      else {
        const apiData = results.data;
        const setApiData = _groupBy(apiData, 'id');

        // localstorage setter
        localStorage.setItem('RegionList', JSON.stringify(setApiData));

        if (setApiData) {
          this.setState({ setApiData });
        }
      }
    });
  }

  clearLStorage = async e => {
    localStorage.removeItem('RegionList');
  }

  render() {
    const { setApiData } = this.state;
    console.log(setApiData);

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Admin Regions" description="Admin Regions Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">Region List from API</h5>
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
            methodName="regions.new"
            collection={Regions}
          /> : null }

        <hr />

        <div className="section-xsmall">
          <Row>
            <Col>
              <h5 className="title-5 mb-1">Region List from Database</h5>
              <Skawe.components.DataTable
                collection={Regions}
                showEdit={true}
                columns={['_id', 'image', 'regionId', 'region', 'countryId', 'country', 'city', 'capabilities']}
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('AdminRegions', AdminRegions);
