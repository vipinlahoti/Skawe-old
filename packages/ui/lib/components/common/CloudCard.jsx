import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

const CloudCard = ({title, description, path, listPrice, salePrice}) =>
  <Col sm={12} md={6} lg={3}>
    <ListGroup>
      <ListGroup.Item>
        <h5 className="title-5">{title}</h5>
        <p>{description}</p>
        <p className="mb-0">Starting at</p>
        <div className="mb-1">
          <span className="title-5 mr-1">{salePrice}</span>
          <span className="title-5 list-price">{listPrice}</span>
        </div>
        <Skawe.components.Button type="link" variant="primary" path={path} size="small">
          Learn More
        </Skawe.components.Button>
      </ListGroup.Item>
    </ListGroup>
  </Col>

Skawe.registerComponent('CloudCard', CloudCard);
