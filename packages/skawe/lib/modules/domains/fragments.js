import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment DomainItem on Domain {
    _id
    createdAt
    name
    domainId
    status

    pagePath
    pageUrl

    # users
    userId
    user {
      ...UsersMinimumInfo
    }
  }
`);
