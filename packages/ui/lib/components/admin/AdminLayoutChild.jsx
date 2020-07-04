import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AdminLayoutChild = ({children}) =>
  <div className="section-dashboard">
    <Container>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  </div>

Skawe.registerComponent('AdminLayoutChild', AdminLayoutChild);
