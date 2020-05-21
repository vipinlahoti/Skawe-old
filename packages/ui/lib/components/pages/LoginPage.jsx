import Skawe from 'meteor/skawe:lib';
import { AccountsReactComponent } from 'meteor/skawe:accounts'
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const LoginPage = () =>
  <React.Fragment>
    <Skawe.components.HeadTags title="Login Page" description="Login Page" />

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
                
                <Skawe.components.CreateAccount state='signIn'/>

                <p className="mt-1">Need to find your <Link to={{ pathname: '/forgot-password' }}>Password</Link>?</p>
                <p>Don't have an account? <Link to={{ pathname: '/register' }}>Register Now</Link>.</p>

              </Card.Header>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Skawe.registerComponent('LoginPage', LoginPage);

// <Skawe.components.CreateAccount showLabel={true} buttonText="Login" />
