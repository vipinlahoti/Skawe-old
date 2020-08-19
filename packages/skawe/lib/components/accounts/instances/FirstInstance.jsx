import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const FirstInstance = ({title, description, icon, button, path, callback}) =>
  <Row>
    <Col sm={12} md={6}>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Components.Button variant="primary-fill" isLink={true} path={path} onClick={callback}>
            {button}
          </Components.Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>

registerComponent({ name: 'FirstInstance', component: FirstInstance });
