import Skawe from 'meteor/skawe:lib';
import { Regions } from 'meteor/skawe:instances';
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';

class AdminRegions extends Component {
  state = {
    apiData: {},
    storeRegion: {},
  }

  fetchAPI = async e => {
    const regionUrl = 'regions';
    
    Meteor.call('instances.fetch', regionUrl, (error, results) => {
      if (error) {
        alert(error.error);
      }
      else {
        const apiData = results.data;

        if (apiData) {
          this.setState({
            apiData: apiData
          });
        }
      }
    });
  }

  selectedData = (setSelectedItem) => {
    this.setState({
      storeRegion: setSelectedItem
    });
  }

  storeSelectedUtemToDB = () => {
    const regionToStore = this.state.storeRegion;

    Meteor.call('instances.new', regionToStore, 'Regions', (error) => {
      if (error) {
        console.log(error)
      }
    });    
  }

  render() {
    const { apiData } = this.state; // eslint-disable-line
    const { regionsList } = this.props;

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Admin Regions" description="Admin Regions Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">Region List from API</h5>
                <Skawe.components.Button size="small" onClick={this.fetchAPI}>
                  Refetch from API
                </Skawe.components.Button>
              </div>
            </Col>
          </Row>
        </div>

        {Object.keys(apiData).length ?
          <Skawe.components.OsDistributions
            apiData={apiData}
            selectedData={this.selectedData}
          /> : null }

        {Object.keys(apiData).length ?
          <Skawe.components.Button size="small" onClick={this.storeSelectedUtemToDB}>
            Store selected in Database
          </Skawe.components.Button>
        : null}

        <hr />

        <div className="section-xsmall">
          <Row>
            <Col>
              <h5 className="title-5 mb-1">Region List from Database</h5>
              <Skawe.components.DataTable
                collection={Regions}
                columns={['image', 'id', 'label', 'country-label', 'country', 'status']}
                showEdit={true}
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('AdminRegions', AdminRegions);
