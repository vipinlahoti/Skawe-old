import Skawe from 'meteor/skawe:lib';
import React from 'react';
import Form from 'react-bootstrap/Form';

const FormCheckbox = ({label, name, value, help}) => 
  <Form.Group controlId={name}>
    <Form.Check type="switch" label={label} value={value} />
    <Form.Text className="text-muted">
      {help}
    </Form.Text>
  </Form.Group>

Skawe.registerComponent('FormCheckbox', FormCheckbox);