import Skawe from 'meteor/skawe:lib';
import React from 'react';
import Form from 'react-bootstrap/Form';

const Forms = ({children, ...rest}) => 
  <Form {...rest}>{children}</Form>

Skawe.registerComponent('Forms', Forms);
