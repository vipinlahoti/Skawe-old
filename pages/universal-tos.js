import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Universal Terms of Services" description="Universal Terms of Services Page" />
      <Skawe.components.InnerBanner title="Universal Terms of Service Agreement" />

      <div className="section">
        <Container>
          <Row className="center-xs">
            <Col sm={12}>
              <Skawe.components.TosLayout pageId="utos" />
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
