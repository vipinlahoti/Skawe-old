import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Form } from 'react-bootstrap';

const NewsLetter = ({type}) =>
  <Form className={`form-${type}`}>
    <Form.Group controlId="formGroupNewsletterEmail">
      <Form.Control type="email" placeholder="Enter email" autoComplete="off" required />
    </Form.Group>
    <Skawe.components.Button variant="primary-fill" type="submit" className={type !== 'inline' ? 'btn-block' : ''}>
      Subscribe
    </Skawe.components.Button>
  </Form>

Skawe.registerComponent('NewsLetter', NewsLetter);
