import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Contact Us" description="Contact Us Page" />
      <Skawe.components.InnerBanner title="Contact Us" />
      
      <div className="section">
        <Container>
          <Row className="center-xs">
            <Col sm={12}>
              Contact us
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
