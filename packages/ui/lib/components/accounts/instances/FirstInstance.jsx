import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const FirstInstance = ({title, description, icon, button, path}) =>
  <div className="section">
    <Row className="center-xs middle-xs">
      <Col sm={12} md={6}>
        <Card>
          <Card.Body>
            <div className="card-icon card-icon-lg rounded-circle text-white">
              <Skawe.components.Icon name={icon}/>
            </div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Skawe.components.Button variant="primary" isLink={true} path={path}>
              {button}
            </Skawe.components.Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>

Skawe.registerComponent('FirstInstance', FirstInstance);
