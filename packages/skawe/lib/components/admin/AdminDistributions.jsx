import { Components, registerComponent, withMutation } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';
import { Distributions } from '../../modules/distributions/collection.js';

class AdminDistributions extends Component {
  state = {
    setApiData: {}
  }

  componentDidMount() {
    const setApiData = JSON.parse(localStorage.getItem('distributionsList'));
    if (setApiData !== null) this.setState({ setApiData });
  }

  fetchAPI = async e => {
    const dataMutation = {
      url: 'images',
      method: 'GET'
    }
    localStorage.removeItem('distributionsList');

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        },
      } = result;
      const body = getInstancesData.data;
      const flatBody = body.data;
      
      let apiData = [];

      for (i = 0; i < flatBody.data.length; i++) {
        const makeApiData = {
          id: flatBody.data[i]['id'],
          label: flatBody.data[i]['label'],
          deprecated: flatBody.data[i]['deprecated'],
          vendor: flatBody.data[i]['vendor'],
        }

        apiData.push(makeApiData);
      }

      const setApiData = _groupBy(apiData, 'vendor');
      
      // localstorage setter
      localStorage.setItem('distributionsList', JSON.stringify(setApiData));

      if (setApiData) {
        this.setState({ setApiData });
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  clearLStorage = async e => {
    localStorage.removeItem('distributionsList');
  }

  render() {
    const { setApiData } = this.state;

    return (
      <React.Fragment>
        <Components.HeadTags title="Admin Distributions" description="Admin Distributions Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">Distribution List from API</h5>
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
            collection={Distributions}
          /> : null }

        <hr />

        <div className="section-xsmall">
          <Row>
            <Col>
              <h5 className="title-5 mb-1">Distribution List from Database</h5>
              <Components.Datatable
                collection={Distributions}
                columns={['label', 'distId', 'vendor', 'image']}
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

withMutation(options)(AdminDistributions);
registerComponent('AdminDistributions', AdminDistributions, [withMutation, options]);
