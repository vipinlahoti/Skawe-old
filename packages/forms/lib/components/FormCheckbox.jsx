import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class FormCheckbox extends Component {
  state = {
    ischecked: this.props.value || ''
  }

  handleInputChange = async e => {
    const name = e.target.name;
    const isChecked = e.target.checked;

    console.log(name, isChecked)

    this.setState({
      [name]: isChecked
    });
  }

  render() {
    const { label, name, value, help } = this.props;
    console.log(this.state[`${name}`], this.props.value)

    return (
      <Form.Group controlId={name}>
        <Form.Check type="switch" name={name} label={label} checked={this.state.name !== undefined ? this.state.name : this.props.value} onChange={this.handleInputChange} />
        <Form.Text className="text-muted">
          {help}
        </Form.Text>
      </Form.Group>
    )
  }
}

Skawe.registerComponent('FormCheckbox', FormCheckbox);
