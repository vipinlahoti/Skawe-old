import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';
import { Row, Col, Form } from 'react-bootstrap';

class PasswordStrengthMeter extends Component {
  createPasswordLabel = (result) => {
    switch (result.score) {
      case 0:
        return 'Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'Weak';
    }
  }

  render() {
    const { password } = this.props;
    const setPasswordStrength = zxcvbn(password);

    return (
      <div className="password-strength-meter">
        <progress
          className={`password-strength-meter-progress strength-${this.createPasswordLabel(setPasswordStrength)}`}
          value={setPasswordStrength.score}
          max="4"
        />
        {password && (
          <React.Fragment>
            <small className="d-block"><strong>Password strength:</strong> {this.createPasswordLabel(setPasswordStrength)}</small>
          </React.Fragment>
        )}
      </div>
    )
  }
}

Skawe.registerComponent('PasswordStrengthMeter', PasswordStrengthMeter);
