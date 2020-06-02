import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const ForgotPassword = () =>
  <React.Fragment>
    <Skawe.components.HeadTags title="Forgot Password Page" description="Forgot Password Page" />

    <div className="section">
      <Container>
        <Row>
          <div className="accounts-card">
            <div className="accounts-card-banner"></div>
            <Card className="shadow-lg">
              <Card.Header>
                <div className="title-5 mb-2">
                  Forgot Password
                </div>
                <Skawe.components.CreateAccount state='forgotPwd'/>
                <p className="mt-1">Don't have an account? <Link to={{ pathname: '/register' }}>Register Now</Link>.</p>
                <p className="mt-1">Already have an account? <Link to={{ pathname: '/login' }}>Sign In</Link>.</p>
              </Card.Header>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Skawe.registerComponent('ForgotPassword', ForgotPassword);
