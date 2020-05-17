import SimpleSchema from 'simpl-schema';
import Skawe from './config.js';

/**
 * @summary Global schemas object. Note: not reactive, won't be updated after initialization
 * @namespace Skawe.schemas
 */
Skawe.schemas = {};

SimpleSchema.extendOptions([
  'editable',
  'hidden',
  'required',
  'profile',
  'control',
  'order',
  'group',

  'insertableBy',
  'editableBy',
  'publish'
]);

SimpleSchema.prototype.getProfileFields = function () {
  const schema = this._schema;
  const fields = _.filter(Object.keys(schema), function (fieldName) {
    const field = schema[fieldName];
    return !!field.profile;
  });
  return fields;
};
