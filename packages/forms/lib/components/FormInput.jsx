import Skawe from 'meteor/skawe:lib';
import React from 'react';
import Form from 'react-bootstrap/Form';

const FormInput = ({label, name, value, help, ...rest}) => 
  <Form.Group controlId={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      autoComplete="off"
      name={name}
      value={value}
      {...rest}
      />
    <Form.Text className="text-muted">
      {help}
    </Form.Text>
  </Form.Group>

Skawe.registerComponent('FormInput', FormInput);
