import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const FirstInstanceAddon = ({title, description, icon, button, path}) =>
  <div className="section-medium">
    <Row className="center-xs middle-xs">
      <Col sm={12} md={6}>
        <Card>
          <Card.Body>
            <div className="card-icon card-icon-lg rounded-circle text-white">
              <Components.Icon name={icon}/>
            </div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Components.ModalTrigger size="small" title="Create a Storage for" component={
              <Components.Button variant="primary" size="small">
                Create a Storage
              </Components.Button>
            }>
            <div>Component</div>
          </Components.ModalTrigger>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>

registerComponent({ name: 'FirstInstanceAddon', component: FirstInstanceAddon });
