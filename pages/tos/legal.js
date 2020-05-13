import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Legal" description="Legal Page" />
      <Skawe.components.InnerBanner title="Legal" />
      
      <div className="section">
        <Container>
          <Row className="center-xs">
            <Col sm={12}>
              Legal
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
