import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Register Page" description="Register Page" />
      
      <div className="section">
        <Container>
          <Row>
            <div className="accounts-card">
              <Skawe.components.Register />
            </div>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
