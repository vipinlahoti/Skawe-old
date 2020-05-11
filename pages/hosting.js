import Skawe from '@skawe';
import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Hosting" description="Web Hosting Page" />
      
      <Jumbotron className="section-small">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <div className="hero__wrapper">
                <div className="title-4 mb-0">
                  Hosting
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <div className="section">
        <Container>
          <Row>
            
            
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
