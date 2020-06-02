import Users from '../modules/index.js';

/**
 * @summary Publish a single user
 * @param {String} idOrSlug
 */
Meteor.publish('users.single', function (terms) {

  const idOrSlug = terms._id || terms['slug'];
  const findById = Users.findOne(idOrSlug);
  const findBySlug = Users.findOne({'skawe.slug': idOrSlug});
  const user = typeof findById !== 'undefined' ? findById : findBySlug;
  const options = Users.isAdmin(this.userId) ? {} : {fields: Users.publishedFields.public};

  return user ? Users.find({_id: user._id}, options) : [];

});

/**
 * @summary Publish the current user
 */
Meteor.publish('users.current', function () {
  const user = Users.find({_id: this.userId}, {fields: {'services.password.bcrypt': false}});
  return user || [];
});
