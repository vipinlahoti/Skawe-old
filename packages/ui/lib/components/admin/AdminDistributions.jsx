import Skawe from 'meteor/skawe:lib';
import { Distributions } from 'meteor/skawe:instances';
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';

class AdminDistributions extends Component {
  state = {
    setApiData: {}
  }

  componentDidMount() {
    const setApiData = JSON.parse(localStorage.getItem('distributionsList'));
    if (setApiData !== null) this.setState({ setApiData });
  }

  fetchAPI = async e => {
    const distributionUrl = 'images';
    localStorage.removeItem('distributionsList');
    
    Meteor.call('instances.fetch', distributionUrl, (error, results) => {
      if (error) {
        alert(error.error);
      }
      else {
        const apiData = results.data;
        const setApiData = _groupBy(apiData, 'vendor');
        
        // localstorage setter
        localStorage.setItem('distributionsList', JSON.stringify(setApiData));

        if (setApiData) {
          this.setState({ setApiData });
        }
      }
    });
  }

  clearLStorage = async e => {
    localStorage.removeItem('distributionsList');
  }

  render() {
    const { setApiData } = this.state;
    console.log(setApiData)

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Admin Distributions" description="Admin Distributions Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">Distribution List from API</h5>
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
            methodName="distributions.new"
            collection={Distributions}
          /> : null }

        <hr />

        <div className="section-xsmall">
          <Row>
            <Col>
              <h5 className="title-5 mb-1">Distribution List from Database</h5>
              <Skawe.components.DataTable
                collection={Distributions}
                showEdit={true}
                columns={['_id', 'image', 'category', 'label', 'distId']}
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('AdminDistributions', AdminDistributions);
