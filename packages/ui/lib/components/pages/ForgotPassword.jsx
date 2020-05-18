import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

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
                  Reset Password
                </div>
                <Form>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Skawe.components.Button variant="black" block>Login</Skawe.components.Button>
                  
                  <p className="mt-1">Don't have an account? <Link to={{ pathname: '/register' }}>Register Now</Link>.</p>

                </Form>
              </Card.Header>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Skawe.registerComponent('ForgotPassword', ForgotPassword);
