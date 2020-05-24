import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MiniCreateForm = () =>
  <div className="section bg-light">
    <Container>
      <Row className="center-xs">
        <Col sm={12} md={8}>
          <h3 className="title-3">Get started with SSD Cloud today</h3>

          <Components.Button isLink={true} variant="black-fill" path="/register">
            Create a Free Account
          </Components.Button>
          <Components.Button isLink={true} path="/pricing">
            See all Pricing
          </Components.Button>

        </Col>
      </Row>
    </Container>
  </div>

registerComponent({ name: 'MiniCreateForm', component: MiniCreateForm });
