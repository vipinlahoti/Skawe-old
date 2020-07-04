import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const FirstInstanceAddon = ({title, description, icon, button, path}) =>
  <div className="section-medium">
    <Row className="center-xs middle-xs">
      <Col sm={12} md={6}>
        <Card>
          <Card.Body>
            <div className="card-icon card-icon-lg rounded-circle text-white">
              <Skawe.components.Icon name={icon}/>
            </div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Skawe.components.ModalTrigger title="Create a Storage for" component={
              <Skawe.components.Button variant="primary" size="small">
                Create a Storage
              </Skawe.components.Button>
            }>
            <Skawe.components.NewSupportTicket />
          </Skawe.components.ModalTrigger>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>

Skawe.registerComponent('FirstInstanceAddon', FirstInstanceAddon);
