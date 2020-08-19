import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment BackupItem on Backup {
    _id
    backupId
  }
`);
