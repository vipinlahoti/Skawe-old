import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment EventItem on Event {
    _id
    createdAt
    name

    # users
    userId
    user {
      ...UsersMinimumInfo
    }
  }
`);
