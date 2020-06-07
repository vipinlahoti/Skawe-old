import Skawe from 'meteor/skawe:lib';
import { Regions } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Row, Col, ListGroup, Form } from 'react-bootstrap';

class Region extends Component {
  state = {
    checkedItems: new Map(),
    apiDataList: this.props.apiData
  }

  handleChange = async e => {
    const id = e.target.id;
    const splitId = id.split(',');
    this.props.selectedRegion(splitId);
  }

  render() {
    const { dataList, showSpeedTest } = this.props;

    console.log('region: ', dataList)

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">Region</h6>
        {showSpeedTest ?
          <Row>
            <Col>
              <small className="d-block mb-1">Use our speedtest page to find the best region for your current location.</small>
            </Col>
          </Row>
        : null }
        <Row>
          {dataList.map((location, index) => 
            <Col md={4} key={index}>
              <ListGroup>
                <Form.Label className="admin-checkbox">
                  <input 
                    type="radio"
                    id={`${location['city']},${location['country']},${location['regionId']}`}
                    name="region"
                    onChange={this.handleChange}
                  />
                  <ListGroup.Item className="p-1">
                    <div className="admin-card-image d-flex middle-xs">
                      <img src={location.image} alt={location.city} />
                    </div>
                    <div className="admin-card-description">
                      <p className="mb-0">{location.country}</p>
                      <h6 className="title-6 mb-0">{location.city}</h6>
                    </div>
                  </ListGroup.Item>
                </Form.Label>
              </ListGroup>
            </Col>
          )}
        </Row>
      </div>
    )
  }
}

const RegionContainer = withTracker(() => {
  Meteor.subscribe('regions.list');

  return {
    dataList: Regions.find().fetch(),
  };
})(Region);

Skawe.registerComponent('Region', RegionContainer);
