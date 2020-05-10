import Skawe from '@skawe';
import Link from 'next/link';

import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class Login extends Component {
 render() {
    return (
      <Card className="shadow-lg">
        <Card.Header className="p-5">
          <div className="text-muted text-center mb-3">
            <small>Login with credentials</small>
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
            <Button variant="primary" block>
              Login
            </Button>
            <Link href="/forgot-password">
              <a className="d-block mt-3"><small>Forgot your password?</small></a>
            </Link>
            <Link href="/register">
              <a className="d-block mt-1"><small>Don't have an account? Register</small></a>
            </Link>
          </Form>
        </Card.Header>
      </Card>
    )
  }
}

Skawe.registerComponent('Login', Login);
