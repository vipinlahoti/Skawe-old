import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const Flash = ({message}) => {
  
  let type = message.type;
  type = type === 'error' ? 'danger' : type; // if type is "error", use "danger" instead

  return (
    <Alert className="flash-message" variant={type}>
      {message.content}
    </Alert>
  )
}

Flash.propTypes = {
  message: PropTypes.object.isRequired
}

Skawe.registerComponent('Flash', Flash);
