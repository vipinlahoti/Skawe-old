import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const RegisterPage = () =>
  <React.Fragment>
    <Skawe.components.HeadTags title="Register Page" description="Register Page" />

    <div className="section">
      <Container>
        <Row>
          <div className="accounts-card">
            <div className="accounts-card-banner"></div>
            <Card className="shadow-lg">
              <Card.Header>
                <div className="title-5 mb-2">
                  Create an Account
                </div>

                <Skawe.components.CreateAccount
                  buttonText="Create an Account"
                  state='signUp'
                />

                <p className="mt-1">Already have an account? <Link to={{ pathname: '/login' }}>Sign In</Link>.</p>
              </Card.Header>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Skawe.registerComponent('RegisterPage', RegisterPage);