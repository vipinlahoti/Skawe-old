import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class RootPassword extends Component {
   state = {
    value: ''
  }

  handleChange = async e => {
    this.setState({value: e.target.value});
    this.props.selectedRootPassword(e.target.value);
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

Skawe.registerComponent('RootPassword', RootPassword);
