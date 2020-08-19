import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

const SSHKeys = () =>
  <div className="section-distributions mb-1 bg-light">
    <h6 className="title-6 mb-1">SSH Keys</h6>
    <Row>
      <Col>
        Users
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Components.Button variant="primary-fill" size="small">
          Add SSH Key
        </Components.Button>
      </Col>
    </Row>
  </div>

registerComponent({ name: 'SSHKeys', component: SSHKeys });
