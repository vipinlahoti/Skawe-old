import Skawe from '@skawe';
import Link from 'next/link';
import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class Register extends Component {
 render() {
    return (
      <Card className="shadow-lg">
        <Card.Header className="p-5">

          <div className="title-5 mb-2">
            Create an Account
          </div>

          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" block>
              Register
            </Button>

            <p className="mt-1">
              By creating an account, you agree to Skawe's 
              <Link href="/tos/universal-tos">
                <a> Terms & Conditions </a>
              </Link>
               and 
               <Link href="/tos/privacy-policy">
                <a> Privacy Policy </a>
              </Link>
            </p>

            <p>
            Already have an account?
            <Link href="/accounts/login">
              <a> Sign In</a>
            </Link>
            .
          </p>
          </Form>
        </Card.Header>
      </Card>
    )
  }
}

Skawe.registerComponent('Register', Register);
