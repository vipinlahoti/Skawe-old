import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MiniFooter = () =>
  <div className="section-xsmall bg-primary text-white">
    <Container>
      <Row className="center-xs">
        <Col md={12}>
          <h4 className="mb-0 font-weight-light title-5">Need help? Call our award-winning support team 24/7.</h4>
        </Col>
      </Row>
    </Container>
  </div>

Skawe.registerComponent('MiniFooter', MiniFooter);
