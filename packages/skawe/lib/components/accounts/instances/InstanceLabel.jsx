import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

const InstanceLabel = () =>
    <div className="section-distributions mb-1 bg-gray">
      <h6 className="title-6 mb-1">Server / Instance Label</h6>
      <Row>
      {[
        {name: 'Tokyo', description: 'Japan', img: 'none'},
      ].map((location, index) => 
        <Col md={4} key={index}>
          <ListGroup className="mb-1">
            <ListGroup.Item>
              <div className="admin-card-icon">
                <Components.Icon name="details"/>
              </div>
              <div className="admin-card-description">
                <h6 className="title-6">{location.name}</h6>
                <p>{location.description}</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      )}
    </Row>
  </div>

registerComponent({ name: 'InstanceLabel', component: InstanceLabel });
