import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Privacy Policy" description="Privacy Policy Page" />
      <div className="section">
        <Container>
          <Row className="center-xs">
            <Col sm={12}>
              Content Here
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
