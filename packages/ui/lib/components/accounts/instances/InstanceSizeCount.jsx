import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class InstanceSizeCount extends Component {
  state = {
    value: 20
  }

  handleChange = async e => {
    this.setState({value: e.target.value});
    this.props.selectedSizeCount(e.target.value);
  }

  render() {
    const { title, placeholder, description } = this.props;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">{title}
        <span className="required-field">(Required)</span>
        </h6>
        <Row>
          <Col md={6}>
            <Form.Control
              type="number"
              min="1"
              max="100"
              placeholder={placeholder}
              value={this.state.value}
              onChange={this.handleChange}/>
            <Form.Text className="text-muted">
              {description}
            </Form.Text>
          </Col>
        </Row>
      </div>
    )
  }
}

Skawe.registerComponent('InstanceSizeCount', InstanceSizeCount);
