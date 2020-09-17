import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GetStarted = () =>
  <div className="section bg-light">
    <Container>
      <Row className="center-xs">
        <Col md={8} sm={12}>
          <h3 className="title-3">Get started with SSD Cloud today</h3>
          <Components.Button variant="primary-fill" path="/accounts/dashboard" isLink={true}>
            Create Account
          </Components.Button>
          <Components.Button variant="primary" path="/page/b3APF6zxntxqsujcw/pricing" isLink={true}>
            See all Pricing
          </Components.Button>
        </Col>
      </Row>
    </Container>
  </div>

registerComponent({ name: 'GetStarted', component: GetStarted });
