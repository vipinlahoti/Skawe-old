import Grudr from 'meteor/grudr:lib';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MiniCreateForm = () =>
  <div className="section bg-light">
    <Container>
      <Row className="center-xs">
        <Col sm={12} md={5} lg={5}>
          <h4 className="title-4">Get started with SSD Cloud</h4>
          <Grudr.components.Button type="link" variant="black-fill" path="/register">
            Create a Free Account
          </Grudr.components.Button>
          <Grudr.components.Button type="link" path="/hosting">
            See all Pricing
          </Grudr.components.Button>
        </Col>
      </Row>
    </Container>
  </div>

Grudr.registerComponent('MiniCreateForm', MiniCreateForm);
