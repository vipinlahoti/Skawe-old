import SimpleSchema from 'simpl-schema';

const addressSchema = new SimpleSchema({
  addressLine1: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canUpdate: ['members'],
    canCreate: ['members'],
    max: 100, // limit street address to 100 characters
  },
  addressLine2: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canUpdate: ['members'],
    canCreate: ['members'],
    max: 100, // limit street address to 100 characters
  },
  zipCode: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['members'],
    canCreate: ['members'],
    input: 'text',
  },
  country: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['members'],
    canCreate: ['members'],
  }
});

export default addressSchema;
