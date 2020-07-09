import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MiniCreateForm = () =>
  <div className="section">
    <Container>
      <Row className="center-xs">
        <Col sm={12} md={8}>
          <h3 className="title-3">Get started with SSD Cloud today</h3>

          <Skawe.components.Button isLink={true} variant="primary-fill" path="/register">
            Create a Free Account
          </Skawe.components.Button>
          <Skawe.components.Button isLink={true} variant="primary" path="/pricing">
            See all Pricing
          </Skawe.components.Button>

        </Col>
      </Row>
    </Container>
  </div>

Skawe.registerComponent('MiniCreateForm', MiniCreateForm);
