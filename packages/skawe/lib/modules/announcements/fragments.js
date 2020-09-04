import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment AnnouncementItem on Announcement {
    _id
    description
    code
  }
`);
