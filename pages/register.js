import Skawe from '@skawe';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Register Page" description="Register Page" />
      
      <div className="login__wrapper">
        <Container>
          <Row>
            <div className="accounts-card">
              <div className="accounts-card-banner"></div>
              <Skawe.components.Register />
            </div>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
