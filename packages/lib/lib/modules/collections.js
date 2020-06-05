import SimpleSchema from 'simpl-schema';
import Skawe from './config.js';

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

/**
 * For a given cursor, get an array of all its joins
 */
Mongo.Collection.prototype.getCursorJoins = function (cursor, checkPublish = true, user) {

  const collection = this;
  const schema = collection.simpleSchema();
  const joins = collection.getJoins(checkPublish, user);
  const documents = cursor.fetch();
  let joinsArray = [];
  let collectionsToJoin = {};

  // loop over each join defined in the schema
  joins.forEach(join => {

    // if join collection is a function get its return, else use the object
    const joinCollection = typeof join.collection === "function" ? join.collection() : join.collection;
    const collectionName = joinCollection._name;
    const collectionPublicFields = joinCollection.getPublishedFields(user);

    // use join.fields if specified, else default to joining all public fields in the schema
    const fields = join.fields ? join.fields : collectionPublicFields; 

    let joinIDs = [];

    // loop over each document in the cursor
    documents.forEach(document => {

      // get the field containing the join id or ids
      const joinField = document[join.localProperty];
      let idsToAdd = [];

      if (Array.isArray(joinField)) { // join field is an array
        // if the join is limited, only take the first `join.limit` documents

        idsToAdd = join.limit ? _.first(joinField, join.limit) : joinField;
      } else { // join field is a single id, so wrap it in an array
        idsToAdd = [joinField];
      }

      // add id or ids to the list of joined ids
      joinIDs = joinIDs.concat(idsToAdd);
    
    });

    if (collectionsToJoin[collectionName]) { // if the current collection already has joins, add ids and fields to collectionsToJoin
      collectionsToJoin[collectionName].ids = collectionsToJoin[collectionName].ids.concat(joinIDs);
      collectionsToJoin[collectionName].fields = collectionsToJoin[collectionName].fields.concat(join.fields);
    } else { // else add it to the collectionsToJoin object
      collectionsToJoin[collectionName] = {
        collection: joinCollection,
        ids: joinIDs,
        fields: fields
      };
    }
    
  });

  // loop over collectionsToJoin to add each cursor to joinsArray
  _.each(collectionsToJoin, (item) => {

    const fields = Skawe.publishedFields.arrayToFields(_.unique(item.fields));

    // add cursor for this join to joinsArray
    joinsArray.push(item.collection.find({_id: {$in: _.unique(item.ids)}}, {fields: fields}));

  });

  return joinsArray;
};

/**
 * Mongo helper to get published field
 */
Mongo.Collection.prototype.getPublishedFields = function (user) {
  var schema = this.simpleSchema()._schema;
  var fields = _.filter(_.keys(schema), function (fieldName) {
    var field = schema[fieldName];
    return Skawe.utils.canAccessField(user, field);
  });
  return fields;
};


Mongo.Collection.prototype.smartPublish = function (publicationName, publicationOptions = {}) {

  const collection = this;
  publicationName = typeof publicationName === "undefined" ? collection._name+".list" : publicationName;

  Meteor.publish(publicationName, function (terms) {

    const currentUser = Meteor.users.findOne(this.userId);

    if (terms) {
      terms.currentUserId = this.userId;
    }

    this.autorun(function (computation) {

      let selector = terms && terms.selector ? terms.selector : {};
      let options = terms && terms.options ? terms.options : {};

      
      try {
        // if a callback exists, call it on terms to set selector and options
        if (publicationOptions.callback) {
          ({selector, options} = publicationOptions.callback(terms));
        }
      } catch (error) {
        console.log(`Publication “${publicationName}” callback error:`);
        console.log(error);
        return []; // if callback throws error, stop publication
      }

      // disabled for now because of FlowRouterSSR issue
      // Counts.publish(this, publicationName, collection.find(selector, options));
      
      if (publicationOptions.limit) {
        options.limit = _.min(publicationOptions.limit, options.limit);
      }

      options.fields = Skawe.publishedFields.arrayToFields(collection.getPublishedFields(currentUser));

      const cursor = collection.find(selector, options);

      return [cursor].concat(collection.getCursorJoins(cursor, currentUser));


    });

  });
};

Mongo.Collection.prototype.getJoins = function (checkPublish = true, user) {
  const schema = this.simpleSchema()._schema;
  const joins = [];

  _.each(_.keys(schema), fieldName => {

    const field = schema[fieldName];
    if (field.join && (!checkPublish || Skawe.utils.canAccessField(user, field))) {
      joins.push({
        localProperty: fieldName,
        ...field.join
      });
    }
  });

  return joins;
}


/**
 * @summary The global namespace for collections.
 * @namespace Skawe.collection
 */
Skawe.collection = {};

Skawe.collection = options => {
  const { collectionName } = options;
  let { schema } = options;

  // initialize new Mongo collection
  const collection = collectionName === 'Users'
      ? Meteor.users
      : new Mongo.Collection(collectionName.toLowerCase());

  // Add collection helpers for document
  collection.helpers({getCollection: () => collectionName});
  collection.helpers({getCollectionName: () => collectionName.toLowerCase()});

  // TODO: create dynamic schemas
  // if (schema) {
  //   // attach schema to collection
  //   collection.attachSchema(Skawe.schemas.createSchema(schema));
  // }

  // console.log('collection: ', collection)

  return collection;
};
