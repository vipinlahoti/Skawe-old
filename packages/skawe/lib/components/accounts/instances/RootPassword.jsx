import { Components, registerComponent } from 'meteor/vulcan:core';
import zxcvbn from 'zxcvbn';
import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class RootPassword extends Component {
   state = {
    value: ''
  }

  setScore = getScore => {
    this.props.passwordStrength(getScore);
  }

  handleChange = async e => {
    this.setState({value: e.target.value});
    const setPasswordStrength = zxcvbn(e.target.value);
    this.props.selectedRootPassword(e.target.value);
    this.props.passwordStrength(setPasswordStrength.score);
  }

  render() {
    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">Root Password</h6>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Control
                type="password"
                autoComplete="off"
                placeholder="Enter a Password"
                value={this.state.value}
                onChange={this.handleChange}/>
              <Components.PasswordStrengthMeter
                setScore={this.setScore}
                password={this.state.value}
              />
              <Form.Text className="text-muted">
                Password must:
                <ul>
                  <li>Be at least 6 characters</li>
                  <li>Contain at least two of the following character classes: uppercase letters, lowercase letters, numbers, and punctuation.</li>
                </ul>
              </Form.Text>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

registerComponent({ name: 'RootPassword', component: RootPassword });
