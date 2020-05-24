import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Announcement = ({text, code}) =>
  <div className="announcement__wrapper">
    <Container>
      <Row className="center-xs">
        <Col sm={12} md={10}>
          <div className="announcement">
            <h6 className="mb-0 mr-1 font-weight-light title-6">{text} {code ? <span className="coupon-code">{code}</span> : null }</h6>
          </div>
        </Col>
      </Row>
    </Container>
  </div>

registerComponent({ name: 'Announcement', component: Announcement });
