import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

const CloudCard = ({icon, title, description, path, listPrice, salePrice}) =>
  <Col lg={3} md={4} sm={6} xs={4}>
    <ListGroup>
      <ListGroup.Item>
        <div className="card-icon card-icon-lg">
          <Components.Icon name={icon}/>
        </div>
        <h5 className="title-5">{title}</h5>
        <p>{description}</p>
        <p className="mb-0">Starting at</p>
        <div className="mb-1">
          <span className="title-5 mr-1">{salePrice}</span>
          <span className="title-5 list-price price-strike">{listPrice}</span>
        </div>
        <Components.Button isLink={true} variant="primary" path={path} size="small">
          Learn More
        </Components.Button>
      </ListGroup.Item>
    </ListGroup>
  </Col>

registerComponent({ name: 'CloudCard', component: CloudCard });
