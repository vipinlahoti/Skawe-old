import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment PostItem on Post {
    # posts
    _id
    title
    slug
    postedAt
    createdAt
    sticky
    status
    excerpt
    viewCount
    clickCount

    pagePath
    pageUrl
    
    # users
    userId
    user {
      ...UsersMinimumInfo
    }

    # embedly
    thumbnailUrl

    # categories
    categoriesIds
    categories {
      ...CategoryItem
    }
  }
`);

registerFragment(/* GraphQL */`
  fragment PostPage on Post {
    ...PostItem
    body
    htmlBody

    # commentCount
    comments {
      _id
    }
    commenters {
      ...UsersMinimumInfo
    }

    # voting
    currentUserVotes{
      ...VoteFragment
    }
    baseScore
    score
  }
`);

