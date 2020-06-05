import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SkaweForms extends Component {

  state = {
    disabled: false,
    errors: [],
    autofilledValues: {},
    currentValues: {}
  }

  // add error to state
  throwError = error => {
    this.setState({
      errors: [error]
    });
  }

  // if a document is being passed, this is an edit form
  getFormType() {
    return this.props.document ? "edit" : "new";
  }

  // return the current schema based on either the schema or collection prop
  getSchema() {
    return this.props.schema ? this.props.schema : this.props.collection.schema._schema;
  }

  // get fields
  getFieldNames() {
    const fields = this.props.fields;

    // get all editable/insertable fields (depending on current form type)
    let relevantFields = 
        this.getFormType() === "edit"
        ? Skawe.utils.getEditableFields(
          this.getSchema(),
          currentUser,
          this.getDocument()
        )
        : Skawe.utils.getInsertableFields(
          this.getSchema(),
          currentUser
        );

    // if "fields" prop is specified, restrict list of fields to it
    if (typeof fields !== "undefined" && fields.length > 0) {
      relevantFields = _.intersection(relevantFields, fields);
    }

    return relevantFields;
  }

  // common callback for both new and edit forms
  methodCallback(error, document) {

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
      if (this.getFormType() === 'new') this.refs.form.reset();
      // run success callback if it exists
      if (this.props.successCallback) this.props.successCallback(document);
      // note: we don't want to update the state of an unmounted component
      else this.clearErrors();

    }
  }

  // submit form handler
  submitForm(data) {
    this.setState({disabled: true});

    // complete the data with values from custom components
    data = {
      ...data, // original data generated thanks to Formsy
      ...this.state.currentValues, 
    };

    const fields = this.getFieldNames();

    if (this.getFormType() === 'new') { // new document form

      // remove any empty properties
      let document = _.compactObject(Skawe.utils.flatten(data));

      // call method with new document
      Meteor.call(this.props.methodName, document, this.methodCallback);

    } else { // edit document form

      const document = this.getDocument();

      // put all keys with data on $set
      const set = _.compactObject(Skawe.utils.flatten(data));

      // put all keys without data on $unset
      const unsetKeys = _.difference(fields, _.keys(set));
      const unset = _.object(unsetKeys, unsetKeys.map(()=>true));

      // build modifier
      const modifier = { $set: set };

      if (!_.isEmpty(unset)) modifier.$unset = unset;

      // call method with _id of document being edited and modifier
      Meteor.call(this.props.methodName, document._id, modifier, this.methodCallback);
    }
  }

  render() {
    // const { buttonText, fields } = this.props;
    // const makeField = Array.isArray(fields) ? fields : [fields];
    console.log(
      'collection: ', this.props.collection.schema._schema,
      'document: ', this.props.document,
      'methodName: ', this.props.methodName,
    )

    return (
      <div className={"document-" + this.getFormType()}>
        <Skawe.components.Forms
          onSubmit={this.submitForm}
          onKeyDown={this.formKeyDown}
          disabled={this.state.disabled}
          ref="form"
        >
         
          <Skawe.components.Button type="submit" variant="black-fill">Submit</Skawe.components.Button>
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
  cancelCallback: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.string)
}

const SkaweFormsContainer = Skawe.withAccount(SkaweForms);
Skawe.registerComponent('SkaweForms', SkaweFormsContainer);


// <Form onSubmit={this.handleSubmit}>
//   {makeField.map((field, index) =>
//     <Form.Group controlId={field.id} key={index}>
//       <Form.Label>
//         {field.label}
//         {field.required ? <span className="required-field">(Required)</span> : null }
//       </Form.Label>
//       <Form.Control
//         autoComplete="off"
//         name={field.id}
//         type={field.type}
//         as={field.fieldAs}
//         disabled={field.disable}
//         value={field.value ? field.value : this.state ? this.state[field.id] : ''}
//         placeholder={field.placeholder ? field.placeholder : null}
//         onChange={this.handleChange}
//         required={field.required} />
//       {field.help ? 
//         <Form.Text className="text-muted">
//           {field.help}
//         </Form.Text>
//       : null}
//     </Form.Group>
//   )}
//   <Skawe.components.Button variant="black-fill" type="submit">
//     {buttonText}
//   </Skawe.components.Button>
// </Form>
