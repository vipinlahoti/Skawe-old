import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Forgot Password" description="Forgot Password Page" />
 
      <div className="section">
        <Container>
          <Row>
            <div className="accounts-card">
              <Skawe.components.RetrieveUsername />
            </div>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
