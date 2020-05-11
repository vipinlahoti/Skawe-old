import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="404" description="Error 404 Page" />
      <div className="section">
        <Container>
          <Row className="center-xs">
            <Col sm={12}>
              <Skawe.components.Icon name="error_outline" iconClass="font-lg" />
              <p className="lead">Error 404</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
