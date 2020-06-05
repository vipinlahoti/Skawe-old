import SimpleSchema from 'simpl-schema';
import Skawe from './config.js';

/**
 * @summary Global schemas object. Note: not reactive, won't be updated after initialization
 * @namespace Skawe.schemas
 */
Skawe.schemas = {};

// Skawe.schemas.createSchema = (schema, options) => {
//   const modifiedSchema = schema;
//   Object.keys(modifiedSchema).forEach(fieldName => {
//     const field = schema[fieldName];
//     const { arrayItem, resolveAs } = field;
//     // find any field with an `arrayItem` property defined and add corresponding
//     // `foo.$` array item field to schema
//     if (arrayItem) {
//       modifiedSchema[`${fieldName}.$`] = arrayItem;
//     }
//     // backwards compatibility: copy resolveAs.type to resolveAs.typeName
//     // if (resolveAs) {
//     //   field.resolveAs.typeName = field.resolveAs.type;
//     // }
//   });

//   console.log(modifiedSchema)
//   return new SimpleSchema(modifiedSchema);
// };

SimpleSchema.extendOptions([
  'editable',
  'hidden',
  'mustComplete',
  'required',
  'profile',
  'control',
  'order',
  'group',
  'form',
  'control',

  'onCreate',
  'onInsert', // field insert callback
  'onEdit', // field edit callback
  'onRemove', // field remove callback

  'insertableBy',
  'editableBy',
  'viewableBy',
  'publish',

  'publish',
  'join'
]);

SimpleSchema.prototype.getProfileFields = function () {
  const schema = this._schema;
  const fields = _.filter(Object.keys(schema), function (fieldName) {
    const field = schema[fieldName];
    return !!field.profile;
  });
  return fields;
};

