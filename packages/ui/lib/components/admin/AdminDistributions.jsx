import Skawe from 'meteor/skawe:lib';
import { Distributions } from 'meteor/skawe:instances';
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';

class AdminDistributions extends Component {
  state = {
    setApiData: {},
    apiData: {},
    storeDistribution: {},
  }

  fetchAPI = async e => {
    const distributionUrl = 'images';
    
    Meteor.call('instances.fetch', distributionUrl, (error, results) => {
      if (error) {
        alert(error.error);
      }
      else {
        const apiData = results.data;
        let makeApiData = [];

        for (let i = 0; i < apiData.length; i++) {
          const generateApiData = {
            image: `/images/${(apiData[i]['vendor']).toLowerCase()}.png`,
            category: apiData[i]['vendor'],
            apiId: apiData[i]['id'],
            label: apiData[i]['label'],
            deprecated: apiData[i]['deprecated'],
            isPublic: apiData[i]['is_public']
          }

          makeApiData.push(generateApiData)
        }

        const setApiDatas = _groupBy(makeApiData, 'category');

        // console.log(setApiDatas)

        if (setApiDatas && apiData) {
          this.setState({
            setApiData: setApiDatas,
            apiData: makeApiData
          });
        }
      }
    });
  }

  selectedData = (setSelectedItem) => {
    this.setState({
      storeDistribution: setSelectedItem
    });
  }

  storeSelectedUtemToDB = () => {
    const distributionToStore = this.state.storeDistribution;

    Meteor.call('instances.new', distributionToStore, 'Distributions', (error) => {
      if (error) {
        console.log(error)
      }
    });    
  }

  render() {
    const { setApiData, apiData } = this.state; // eslint-disable-line
    const { distributionsList } = this.props;

    console.log(setApiData)

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Admin Distributions" description="Admin Distributions Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">Distribution List from API</h5>
                <Skawe.components.Button size="small" onClick={this.fetchAPI}>
                  Refetch from API
                </Skawe.components.Button>
              </div>
            </Col>
          </Row>
        </div>

        {Object.keys(setApiData).length ?
          <Skawe.components.OsDistributions
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
              <h5 className="title-5 mb-1">Distribution List from Database</h5>
              <Skawe.components.DataTable
                collection={Distributions}
                columns={['image', 'category', 'apiId', 'label', 'deprecated', 'isPublic']}
                showEdit={true}
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('AdminDistributions', AdminDistributions);
