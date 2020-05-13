import Skawe from '@skawe';
import Link from 'next/link';
import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class ForgotPassword extends Component {
 render() {
    return (
      <Card className="shadow-lg">
        <Card.Header className="p-5">
          <div className="title-5 mb-2">
            Reset Password
          </div>

          <Form>
            <Form.Group controlId="email">
              <Form.Label>Username or Customer #</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Button block>Send Reset Link</Button>
            
            <p className="d-block mt-1">
              Need to find your 
              <Link href="/accounts/retrieve-username">
                <a> Username </a>
              </Link>
              ? Or
              <Link href="/accounts/login">
                <a> Sign In</a>
              </Link>
              .
            </p>
            <Link href="/accounts/register">
              <a className="d-block">Don't have an account? Register</a>
            </Link>

          </Form>
        </Card.Header>
      </Card>
    )
  }
}

Skawe.registerComponent('ForgotPassword', ForgotPassword);
