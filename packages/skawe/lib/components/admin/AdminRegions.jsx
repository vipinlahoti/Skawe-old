import { Components, registerComponent, withMutation } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';
import { Regions } from '../../modules/regions/collection.js';

class AdminRegions extends Component {
  state = {
    setApiData: {}
  }

  componentDidMount() {
    const setApiData = JSON.parse(localStorage.getItem('regionList'));
    if (setApiData !== null) this.setState({ setApiData });
  }

  fetchAPI = async e => {
    const dataMutation = {
      url: 'regions',
      method: 'GET'
    }
    localStorage.removeItem('regionList');
    
    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        },
      } = result;
      const body = getInstancesData.data;
      const flatBody = body.data;

      const setApiData = _groupBy(flatBody.data, 'id');
      
      // localstorage setter
      localStorage.setItem('regionList', JSON.stringify(setApiData));

      if (setApiData) {
        this.setState({ setApiData });
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  clearLStorage = async e => {
    localStorage.removeItem('regionList');
  }

  render() {
    const { setApiData } = this.state;

    return (
      <React.Fragment>
        <Components.HeadTags title="Admin Regions" description="Admin Regions Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">Region List from API</h5>
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
            collection={Regions}
          /> : null}

        <hr />

        <div className="section-xsmall">
          <Row>
            <Col>
              <h5 className="title-5 mb-1">Region List from Database</h5>
              <Components.Datatable
                collection={Regions}
                columns={['image', 'region', 'regionId', 'countryId', 'country', 'capabilities']}
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

registerComponent('AdminRegions', AdminRegions, [withMutation, options]);
