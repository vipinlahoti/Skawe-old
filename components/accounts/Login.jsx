import Skawe from '@skawe';
import Link from 'next/link';

import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class Login extends Component {
 render() {
    return (
      <Card className="shadow-lg">
        <Card.Header className="p-5">
          <div className="title-5 mb-2">
            Registered Users
            <span>Have an account? Sign in now.</span>
          </div>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username or Customer #</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            
            <Button block>Login</Button>
            
            <p className="mt-1">
              Need to find your 
              <Link href="/retrieve-username">
                <a> Username </a>
              </Link>
              or
              <Link href="/forgot-password">
                <a> Password </a>
              </Link>
              ?
            </p>

            <p>
              Don't have an account? 
              <Link href="/register">
                <a> Register Now</a>
              </Link>
              .
            </p>

          </Form>
        </Card.Header>
      </Card>
    )
  }
}

Skawe.registerComponent('Login', Login);
