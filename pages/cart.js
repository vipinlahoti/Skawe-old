import Skawe from '@skawe';
import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Cart" description="Cart Page" />
      
      <Jumbotron className="section-hero-small">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <div className="hero__wrapper">
                <div className="title-4 mb-0">
                  Cart
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <div className="section">
        <Container>
          <Row className="center-xs">
            <Col sm={12}>
              <Skawe.components.Icon name="shopping_cart" iconClass="font-lg" />
              <p className="lead text-mute">There are no items in your basket.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
