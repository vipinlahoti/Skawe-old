import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="WHOIS" description="WHOIS Page" />
      <Skawe.components.InnerBanner title="WHOIS" />
      
      <div className="section">
        <Container>
          <Row className="center-xs">
            <Col sm={12}>
              WHOIS
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
