import Skawe from '@skawe';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Forgot Password" description="Forgot Password Page" />
      
      <div className="login__wrapper">
        <Container>
          <Row>
            <div className="accounts-card">
              <div className="accounts-card-banner"></div>
              <Skawe.components.ForgotPassword />
            </div>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
