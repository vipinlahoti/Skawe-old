import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment DocumentationItem on Documentation {
    # documentations
    _id
    title
    slug
    postedAt
    createdAt
    status
    viewCount
    clickCount

    pagePath
    pageUrl
    
    # users
    userId
    user {
      ...UsersMinimumInfo
    }

    # categories
    categoriesIds
    categories {
      ...CategoryItem
    }
  }
`);

registerFragment(/* GraphQL */`
  fragment DocumentationPage on Documentation {
    ...DocumentationItem
    body
    htmlBody

    # embedly
    thumbnailUrl
  }
`);

