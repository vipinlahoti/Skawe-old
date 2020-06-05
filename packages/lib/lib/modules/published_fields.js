import Skawe from './config.js';

Skawe.publishedFields = {};

/**
 * Convert an array of fields to publish into a Mongo fields specifier
 * @param {Array} fieldsArray
 */
Skawe.publishedFields.arrayToFields = fieldsArray => {
  return _.object(fieldsArray, _.map(fieldsArray, function () {return true}));
}

/**
 * Add an array of fields to a Mongo fields specifier
 * @param {Array} fieldsSpecifier
 * @param {Array} fieldsArray
 */
Skawe.publishedFields.addToFields = (fieldsSpecifier, fieldsArray) => {
  fieldsSpecifier = _.extend(fieldsSpecifier, this.arrayToFields(fieldsArray));
}
