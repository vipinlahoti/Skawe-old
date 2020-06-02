import Skawe from 'meteor/skawe:lib';
import React from 'react';
import Form from 'react-bootstrap/Form';

const FormTextarea = ({label, name, value, help}) => 
  <Form.Group controlId={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control as="textarea" defaultValue={value} />
    <Form.Text className="text-muted">
      {help}
    </Form.Text>
  </Form.Group>

Skawe.registerComponent('FormTextarea', FormTextarea);
