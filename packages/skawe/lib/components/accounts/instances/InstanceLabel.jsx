import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class InstanceLabel extends Component {
  state = {
    value: ''
  }

  handleChange = async e => {
    this.setState({value: e.target.value});
    this.props.selectedLabel(e.target.value);
  }

  render() {
    const { column, title, placeholder, description, required } = this.props;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">{title}
        {required ? <span className="required-field">(Required)</span> : null }
        </h6>
        <Row>
          <Col md={column}>
            <Form>
              <Form.Control
                type="text"
                autoComplete="off"
                required={required}
                placeholder={placeholder}
                value={this.state.value}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                {description}
              </Form.Text>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

registerComponent({ name: 'InstanceLabel', component: InstanceLabel });
