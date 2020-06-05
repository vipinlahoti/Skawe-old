import Skawe from 'meteor/skawe:lib';

/**
 * @method Mongo.Collection.getInsertableFields
 * Get an array of all fields editable by a specific user for a given collection
 * @param {Object} user – the user for which to check field permissions
 */
Skawe.utils.getInsertableFields = function (schema, user) {

  console.log('schema, user: ', schema, user);
  const fields = _.filter(_.keys(schema), function (fieldName) {
    const field = schema[fieldName];
    return field.insertableBy && field.insertableBy(user);
  });
  return fields;
};

/**
 * @method Mongo.Collection.getEditableFields
 * Get an array of all fields editable by a specific user for a given collection
 * @param {Object} user – the user for which to check field permissions
 */
Skawe.utils.getEditableFields = function (schema, user, document) {
  const fields = _.filter(_.keys(schema), function (fieldName) {
    const field = schema[fieldName];
    return field.editableBy && field.editableBy(user, document);
  });
  return fields;
};
