import Grudr from 'meteor/grudr:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const LoginPage = () =>
  <React.Fragment>
    <Grudr.components.HeadTags title="Login Page" description="Login Page" />

    <div className="section">
      <Container>
        <Row>
          <div className="accounts-card">
            <Card className="shadow-lg">
              <Card.Header>
                <div className="title-5 mb-2">
                  Registered Users
                  <span className="d-block">Have an account? Sign in now.</span>
                </div>
                <Form>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  
                  <Grudr.components.Button variant="black" block>Login</Grudr.components.Button>
                  
                  <p className="mt-1">Need to find your <Link to={{ pathname: '/forgot-password' }}>Password</Link>?</p>
                  <p>Don't have an account? <Link to={{ pathname: '/register' }}>Register Now</Link>.</p>

                </Form>
              </Card.Header>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Grudr.registerComponent('LoginPage', LoginPage);
