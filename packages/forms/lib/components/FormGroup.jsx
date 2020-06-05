import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormComponent from "./FormComponent.jsx";

class FormGroup extends Component {
  render() {
    return (
      <div className="form-section">
        {this.props.name === 'default' ? null : <h5 className="title-5 mt-3 mb-1">{this.props.label}</h5>}
        {this.props.fields.map(field => <FormComponent key={field.name} {...field} updateCurrentValue={this.props.updateCurrentValue} />)}
      </div>
    )
  }
}

FormGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  order: PropTypes.number,
  fields: PropTypes.array,
  updateCurrentValue: PropTypes.func
}

export default FormGroup;
