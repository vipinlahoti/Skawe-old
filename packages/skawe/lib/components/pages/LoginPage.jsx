import { Components, registerComponent } from 'meteor/vulcan:core';
import { STATES } from 'meteor/vulcan:accounts';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const LoginPage = () =>
  <React.Fragment>
    <Components.HeadTags title="Login Page" description="Login Page" />

    <div className="section">
      <Container>
        <Row>
          <div className="accounts-card">
            <div className="accounts-card-banner"></div>
            <Card className="shadow-lg">
              <Card.Header>
                <div className="title-5 mb-2">
                  Registered Users
                  <span className="d-block">Have an account? Sign in now.</span>
                </div>
                
                <Components.CreateAccount state={STATES.SIGN_IN}/>

                <p className="mt-1">Need to find your <Link to={{ pathname: '/forgot-password' }}>Password</Link>?</p>
                <p>Don't have an account? <Link to={{ pathname: '/register' }}>Register Now</Link>.</p>

              </Card.Header>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

registerComponent({ name: 'LoginPage', component: LoginPage });
