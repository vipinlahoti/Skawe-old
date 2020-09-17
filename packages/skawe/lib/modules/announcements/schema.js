/*
 * Announcements schema
 */

const schema = {
  _id: {
    type: String,
    canRead: ['guests'],
    optional: true,
  },
  description: {
    type: String,
    input: 'textarea',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  code: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
};

export default schema;
