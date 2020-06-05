import Skawe from 'meteor/skawe:lib';
import React from 'react';
import Form from 'react-bootstrap/Form';

const Forms = ({disabled, children, ...rest}) =>
  <Form {...rest}>
    <fieldset disabled={disabled}>
      <div className="fieldset">
        {children}
      </div>
    </fieldset>
  </Form>

Skawe.registerComponent('Forms', Forms);
