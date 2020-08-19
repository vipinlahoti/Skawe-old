import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment TicketItem on Ticket {
    # tickets
    _id
    subject
    slug
    createdAt
    lastReplyedAt

    pagePath
    pageUrl
    
    # users
    userId
    user {
      ...UsersMinimumInfo
    }

    # embedly
    thumbnailUrl

    # departments
    departmentsIds
    departments {
      ...DepartmentItem
    }

    # replyCount
    replies{
      _id
    }
    replyers {
      ...UsersMinimumInfo
    }

    # voting
    currentUserVotes {
      ...VoteFragment
    }
    baseScore
    score
  }
`);

registerFragment(/* GraphQL */`
  fragment TicketPage on Ticket {
    ...TicketItem
    body
    htmlBody
  }
`);

