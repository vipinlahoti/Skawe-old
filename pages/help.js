import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Help" description="Help Page" />
      <Skawe.components.InnerBanner title="Help" />
      
      <div className="section">
        <Container>
          <Row className="center-xs">
            <Col sm={12}>
              HELP
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
