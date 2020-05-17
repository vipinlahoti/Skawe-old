import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MiniCreateForm = () =>
  <div className="section bg-light">
    <Container>
      <Row className="center-xs">
        <Col sm={12} md={5} lg={5}>
          <h4 className="title-4">Get started with SSD Cloud</h4>
          <Skawe.components.Button type="link" variant="black-fill" path="/register">
            Create a Free Account
          </Skawe.components.Button>
          <Skawe.components.Button type="link" path="/hosting">
            See all Pricing
          </Skawe.components.Button>
        </Col>
      </Row>
    </Container>
  </div>

Skawe.registerComponent('MiniCreateForm', MiniCreateForm);
