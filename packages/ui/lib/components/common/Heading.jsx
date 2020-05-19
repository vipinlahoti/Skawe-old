import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Heading = ({title, description, align}) =>
  <Row className={`${align}-xs mb-3`}>
    <Col sm={12} md={8} lg={8}>
      <h3 className="title-3" dangerouslySetInnerHTML={{ __html: title }}></h3>
      {description ?
        (<p className="lead" dangerouslySetInnerHTML={{ __html: description }}></p>)
      : null }
    </Col>
  </Row>

Skawe.registerComponent('Heading', Heading);
