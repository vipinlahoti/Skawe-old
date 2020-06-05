import Skawe from 'meteor/skawe:lib';
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup.jsx';

class SkaweForms extends Component {

  constructor() {
    super()
    this.formRef = createRef()
    
    this.state = {
      disabled: false,
      errors: [],
      currentValues: {}
    }
  }

  // add error to state
  throwError = error => {
    this.setState({
      errors: [error]
    });
  }

  // clear all errors and re-enable the form
  clearErrors() {
    this.setState({
      errors: [],
      disabled: false,
    });
  }

  // render errors
  renderErrors() {
    return <div className="form-errors">{this.state.errors.map(message => <Skawe.components.Flash key={message} message={message}/>)}</div>
  }

  // if a document is being passed, this is an edit form
  getFormType = () => {
    return this.props.document ? 'edit' : 'new';
  }

  // return the current schema based on either the schema or collection prop
  getSchema = () => {
    return this.props.schema ? this.props.schema : this.props.collection.schema._schema;
  }

  // for each field, we apply the following logic:
  // - if its value is currently being inputted, use that
  // - else if its value was provided by the db, use that (i.e. props.document)
  getDocument = () => {
    const currentDocument = _.clone(this.props.document) || {};
    const document = Object.assign(currentDocument,  _.clone(this.state.currentValues));
    return document;
  }

  // get fields
  getFieldNames = () => {
    const fields = this.props.fields;

    // get all editable/insertable fields (depending on current form type)
    let relevantFields = 
        this.getFormType() === 'edit'
        ? Skawe.utils.getEditableFields(
          this.getSchema(),
          this.props.document, // replace with currentUser
          // this.props.currentUser,
          this.getDocument()
        )
        : Skawe.utils.getInsertableFields(
          this.getSchema(),
          this.props.currentUser,
          // this.props.currentUser
        );

    // if 'fields' prop is specified, restrict list of fields to it
    if (typeof fields !== 'undefined' && fields.length > 0) {
      relevantFields = _.intersection(relevantFields, fields);
    }

    return relevantFields;
  }


  getFieldGroups = () => {

    const schema = this.getSchema();

    // build fields array by iterating over the list of field names
    let fields = this.getFieldNames().map(fieldName => {

      // get schema for the current field
      const fieldSchema = schema[fieldName];

      fieldSchema.name = fieldName;

      // intialize properties
      let field = {
        name: fieldName,
        label: fieldSchema.label,
        datatype: fieldSchema.type,
        control: fieldSchema.control,
        order: fieldSchema.order
      }

      // add label
      field.label = field.label ? field.label : fieldName;

      // add value
      field.value = this.getDocument() && Skawe.utils.deepValue(this.getDocument(), fieldName) ? Skawe.utils.deepValue(this.getDocument(), fieldName) : '';

      // replace empty value, by the default value from the schema
      if (fieldSchema.defaultValue && field.value === '') {
        field.value = fieldSchema.defaultValue;
      }

      // add options if they exist
      if (fieldSchema.form && fieldSchema.form.options) {
        field.options = typeof fieldSchema.form.options === 'function' ? fieldSchema.form.options.call(fieldSchema) : fieldSchema.form.options;
      }

      if (fieldSchema.form && fieldSchema.form.disabled) {
        field.disabled = typeof fieldSchema.form.disabled === 'function' ? fieldSchema.form.disabled.call(fieldSchema) : fieldSchema.form.disabled;
      }

      if (fieldSchema.form && fieldSchema.form.help) {
        field.help = typeof fieldSchema.form.help === 'function' ? fieldSchema.form.help.call(fieldSchema) : fieldSchema.form.help;
      }

      // add placeholder
      if (fieldSchema.form && fieldSchema.form.placeholder) {
       field.placeholder = fieldSchema.form.placeholder;
      }

      if (fieldSchema.beforeComponent) field.beforeComponent = fieldSchema.beforeComponent;
      if (fieldSchema.afterComponent) field.afterComponent = fieldSchema.afterComponent;

      // add group
      if (fieldSchema.group) {
        field.group = fieldSchema.group;
      }

      // add document
      field.document = this.getDocument();

      console.log('field: ', field)

      return field;
    });

    // remove fields where control = "none"
    fields = _.reject(fields, field => field.control === 'none');
    fields = _.sortBy(fields, 'order');

    // get list of all groups used in current fields
    let groups = _.compact(_.unique(_.pluck(fields, 'group')));

    // for each group, add relevant fields
    groups = groups.map(group => {
      group.label = group.label || group.name;
      group.fields = _.filter(fields, field => {return field.group && field.group.name === group.name});
      return group;
    });

    // add default group
    groups = [{
      name: 'default',
      label: 'default',
      order: 0,
      fields: _.filter(fields, field => {return !field.group;})
    }].concat(groups);

    // sort by order
    groups = _.sortBy(groups, 'order');

    return groups;
  }

  // manually update current value (i.e. on blur). See above for on change instead
  updateCurrentValue = (fieldName, fieldValue) => {
    const currentValues = this.state.currentValues;
    currentValues[fieldName] = fieldValue;
    this.setState({currentValues: currentValues});

    console.info(
      '### updateCurrentValue fieldName: ', fieldName,
      '### fieldValue: ', fieldValue,
      '### currentValues: ', currentValues
    )
  }

  // common callback for both new and edit forms
  methodCallback = (error, document) => {

    if (error) { // error
      this.setState({disabled: false});
      console.log('methodCallback: ', error); // eslint-disable-line
      // add error to state
      this.throwError({
        content: error,
        type: 'error'
      });

    } else { // success
      // reset form if this is a new document form
      // if (this.getFormType() === 'new') this.refs.form.reset();
      // run success callback if it exists
      if (this.props.successCallback) this.props.successCallback(document);
      // note: we don't want to update the state of an unmounted component
      else this.clearErrors();

    }
  }

  // submit form handler
  submitForm = async event => {
    event && event.preventDefault();

    // if form is disabled (there is already a submit handler running) don't do anything
    if (this.state.disabled) {
      return;
    }
    
    // clear errors and disable form while it's submitting
    this.setState(prevState => ({ errors: [], disabled: true }));

    const fields = this.getFieldNames();

    // complete the data with values from custom components
    const data = {
      ..._.pick(this.getDocument(), ...fields),
      ...this.state.currentValues, 
    };

    console.log('this.state.currentValues: ', data);

    if (this.getFormType() === 'new') { // new document form

      // remove any empty properties
      let document = _.compactObject(Skawe.utils.flatten(data));

      console.info(
        'if submitForm: ', this.props.methodName,
        ' === ', document
      );

      // call method with new document
      Meteor.call(this.props.methodName, document, this.methodCallback);

    } else { // edit document form

      const document = this.getDocument();

      // put all keys with data on $set
      const set = _.compactObject(Skawe.utils.flatten(data));

      console.log('### set ###', data, set);
      // put all keys without data on $unset
      const unsetKeys = _.difference(fields, _.keys(set));
      const unset = _.object(unsetKeys, unsetKeys.map(() => true));

      // build modifier
      const modifier = { $set: set };

      if (!_.isEmpty(unset)) modifier.$unset = unset;

      console.info(
        'else submitForm: ', this.props.methodName,
        ' === ', document._id,
        ' === ', modifier
      );

      // call method with _id of document being edited and modifier
      Meteor.call(this.props.methodName, document._id, modifier, this.methodCallback);
    }
  }

  render() {
    const fieldGroups = this.getFieldGroups();

    return (
      <div className={"document-" + this.getFormType()}>
        <Skawe.components.Forms
          onSubmit={this.submitForm}
          disabled={this.state.disabled}
          // ref={this.formRef}
          // ref="form"
        >
          {this.renderErrors()}
          {fieldGroups.map(group => <FormGroup key={group.name} {...group} updateCurrentValue={this.updateCurrentValue} />)}
          <Skawe.components.Button
            type="submit"
            variant="black-fill"
          >
            {this.props.buttonText ?  this.props.buttonText : 'Submit'}
          </Skawe.components.Button>
          {this.props.cancelCallback ? <a className="form-cancel" onClick={this.props.cancelCallback}>Cancel</a> : null}
        </Skawe.components.Forms>
      </div>
    )
  }
}

SkaweForms.propTypes = {
  collection: PropTypes.object,
  schema: PropTypes.object,
  document: PropTypes.object, // if a document is passed, this will be an edit form
  successCallback: PropTypes.func,
  errorCallback: PropTypes.func,
  methodName: PropTypes.string,
  buttonText: PropTypes.string,
  cancelCallback: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.string)
}

const SkaweFormsContainer = Skawe.withAccount(SkaweForms);
Skawe.registerComponent('SkaweForms', SkaweFormsContainer);
