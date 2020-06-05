import Skawe from 'meteor/skawe:lib';
import React from 'react';
import PropTypes from 'prop-types';

const SkaweErrors = ({ errors }) => {
  console.log('errors', errors);

  return errors.map((err, i) => (
    <div key={i} role="alert" className="alert alert-error">
      {err.errStr}
    </div>
  ))
}

SkaweErrors.propTypes = {
  errors: PropTypes.array.isRequired
}

Skawe.registerComponent('Errors', SkaweErrors);
