import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const FirstInstance = ({title, description, icon, button, path}) =>
  <div className="section">
    <Row className="center-xs middle-xs">
      <Col sm={12} md={6}>
        <Card>
          <Card.Body>
            <div className="card-icon card-icon-lg rounded-circle text-white">
              <Components.Icon name={icon}/>
            </div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Components.Button variant="primary" isLink={true} path={path}>
              {button}
            </Components.Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>

registerComponent({ name: 'FirstInstance', component: FirstInstance });
