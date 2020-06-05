import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormComponent extends Component {

  handleChange = async e => {
    const name = e.target.name;
    const value = e.target.value;

    console.log('name: ', name, 'this.props.name: ', this.props.name)
    if (name === this.props.name) {
      console.log('## updateCurrentValue:## ', this.props, name, value)
      this.props.updateCurrentValue(this.props.name, value);
    }
  }

  renderComponent() {
    // see https://facebook.github.io/react/warnings/unknown-prop.html
    const { control, group, updateCurrentValue, document, ...rest } = this.props; // eslint-disable-line
    const base = this.props.control === 'function' ? this.props : rest;

    const properties = {
      ...base,
      onChange: this.handleChange,
      // ref: (ref) => this.formControl = React.createRef()
    };

    // if control is a React component, use it
    if (typeof this.props.control === 'function') {
      return <this.props.control {...properties} document={document} />

    } else { // else pick a predefined component

      switch (this.props.control) {
        case 'text':
          return <Skawe.components.FormInput type="text" {...properties} />;
        case 'email':
          return <Skawe.components.FormInput type="email" {...properties} />;
        case 'password':
          return <Skawe.components.FormInput type="password" {...properties} />;
        case 'textarea':
          return <Skawe.components.FormTextarea {...properties} />;
        case 'checkbox':
          return <Skawe.components.FormCheckbox {...properties} />;
        case 'select':
          return <Skawe.components.FormSelect {...properties} />;
        default:
          return <Skawe.components.FormInput {...properties} />;
      }
    }
  }

  render() {
    return (
      <div className={"input-" + this.props.name}>
        {this.props.beforeComponent ? this.props.beforeComponent : null}
        {this.renderComponent()}
        {this.props.afterComponent ? this.props.afterComponent : null}
      </div>
    )
  }

}

FormComponent.propTypes = {
  document: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  prefilledValue: PropTypes.any,
  options: PropTypes.any,
  control: PropTypes.any,
  datatype: PropTypes.any,
  disabled: PropTypes.bool,
  updateCurrentValue: PropTypes.func
}

export default FormComponent;
