import Skawe from 'meteor/skawe:lib';
import React from 'react';
import Form from 'react-bootstrap/Form';

const FormSelect = ({label, name, value, help, options}) => 
  <Form.Group controlId={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control as="select">
      {options.map((item, index) =>
        <option key={index}>{item}</option>
      )}
    </Form.Control>
    <Form.Text className="text-muted">
      {help}
    </Form.Text>
  </Form.Group>

Skawe.registerComponent('FormSelect', FormSelect);
