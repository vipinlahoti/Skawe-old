import Skawe from '@skawe';
import constants from '@constants';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Privacy Policy" description="Privacy Policy Page" />
      <Skawe.components.InnerBanner title="Privacy Policy" />
      
      <div className="section">
        <Container>
          <Row className="center-xs">
            <Col sm={12}>
              <Skawe.components.TosLayout pageId={constants.privacyTOS} />
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
