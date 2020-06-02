import Skawe from 'meteor/skawe:lib';
import React from 'react';
import Form from 'react-bootstrap/Form';

const Forms = ({disabled, children, ...rest}) =>
  <Form {...rest}>
    <fieldset disabled={disabled}>
      {children}
    </fieldset>
  </Form>

Skawe.registerComponent('Forms', Forms);
