import SimpleSchema from 'simpl-schema';
import Skawe from './config.js';

/**
 * @summary The global namespace for Skawe utils.
 * @namespace Skawe.utils
 */
Skawe.collection = {};

Skawe.collection = options => {
  const { collectionName } = options;

  // initialize new Mongo collection
  const collection = collectionName === 'Users'
      ? Meteor.users
      : new Mongo.Collection(collectionName.toLowerCase());

  return collection;
};

/**
 * @summary @summary Add an additional field (or an array of fields) to a schema.
 * @param {Object|Object[]} field
 */
Mongo.Collection.prototype.addField = function (fieldOrFieldArray) {

  var collection = this;
  var fieldSchema = {};

  var fieldArray = Array.isArray(fieldOrFieldArray) ? fieldOrFieldArray : [fieldOrFieldArray];

  // loop over fields and add them to schema
  fieldArray.forEach(function (field) {
    fieldSchema[field.fieldName] = field.fieldSchema;
  });

  // add field schema to collection schema
  collection.attachSchema(fieldSchema);
};

/**
 * @summary Get a list of a schema's private fields
 * @namespace Skawe.schemas
 */
Mongo.Collection.prototype.getPrivateFields = function () {
  var schema = this.simpleSchema()._schema;
  var fields = _.filter(_.keys(schema), function (fieldName) {
    var field = schema[fieldName];
    return field.publish !== true;
  });
  return fields;
};

/**
 * @summary Get a list of a schema's public fields
 * @namespace Skawe.schemas
 */
Mongo.Collection.prototype.getPublicFields = function () {
  var schema = this.simpleSchema()._schema;
  var fields = _.filter(_.keys(schema), function (fieldName) {
    var field = schema[fieldName];
    return field.publish === true;
  });
  return fields;
};

Mongo.Collection.prototype.attachSchema = function (schemaOrFields) {
  if (schemaOrFields instanceof SimpleSchema) {
    this.simpleSchema = () => schemaOrFields;
  } else {
    this.simpleSchema().extend(schemaOrFields);
  }
};

// see https://github.com/dburles/meteor-collection-helpers/blob/master/collection-helpers.js
Mongo.Collection.prototype.helpers = function (helpers) {
  var self = this;

  if (self._transform && !self._helpers)
    throw new Meteor.Error(
      "Can't apply helpers to '" + self._name + "' a transform function already exists!"
    );

  if (!self._helpers) {
    self._helpers = function Document(doc) {
      return Object.assign(this, doc);
    };
    self._transform = function (doc) {
      return new self._helpers(doc);
    };
  }

  Object.keys(helpers).forEach(function (key) {
    self._helpers.prototype[key] = helpers[key];
  });
};
