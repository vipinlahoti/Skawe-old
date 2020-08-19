/*
 * Backups schema
 */

const schema = {
  _id: {
    type: String,
    canRead: ['members'],
    optional: true,
  },
  backupId: {
    type: String,
    canRead: ['members'],
    canCreate: ['members'],
    canUpdate: ['members'],
  }
};

export default schema;
