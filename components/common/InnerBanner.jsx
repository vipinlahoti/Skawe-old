import Skawe from '@skawe';
import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const InnerBanner = ({title}) =>
  <Jumbotron className="section-small">
    <Container>
      <Row>
        <Col sm={12} md={7} lg={7}>
          <div className="hero__wrapper">
            <div className="title-4 mb-0">
              {title}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </Jumbotron>

Skawe.registerComponent('InnerBanner', InnerBanner);
