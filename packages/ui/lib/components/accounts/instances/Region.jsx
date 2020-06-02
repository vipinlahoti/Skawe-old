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
    const { dataList, storageDescription } = this.props;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">Region</h6>
        {storageDescription ?
          <Row>
            <Col>
              <p>{storageDescription}</p>
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
                    id={`${location['id']},${location['country']}`}
                    name="region"
                    onChange={this.handleChange}
                  />
                  <ListGroup.Item className="p-1">
                    <div className="admin-card-description">
                      <h6 className="title-6 mb-0">{location.id}</h6>
                      <p className="mb-0">{location.country}</p>
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
