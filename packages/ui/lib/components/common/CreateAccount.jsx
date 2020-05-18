import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Form } from 'react-bootstrap';

const CreateAccount = ({type}) =>
  <Form className={`form-${type}`}>
    <Form.Group controlId="formGroupCreateAccountEmail">
      <Form.Control type="email" placeholder="Enter email" autoComplete="off" required />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Control type="password" placeholder="Password" autoComplete="off" required />
    </Form.Group>
    <Skawe.components.Button variant="black-fill" type="submit" className={type !== 'inline' ? 'btn-block' : ''}>
      Create an Account
    </Skawe.components.Button>
  </Form>

Skawe.registerComponent('CreateAccount', CreateAccount);
