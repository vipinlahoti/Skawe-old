import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment PageItem on Page {
    # pages
    _id
    title
    heroTitle
    slug
    postedAt
    createdAt
    status

    pagePath
    pageUrl
    
    # users
    userId
    user {
      ...UsersMinimumInfo
    }
    
    # features
    featuresIds
    features {
      ...FeatureItem
    }
  }
`);

registerFragment(/* GraphQL */`
  fragment PagePage on Page {
    ...PageItem
    seoTitle
    seoDescription

    viewCount
    clickCount

    # embedly
    thumbnailUrl
    
    body
    heroDescription
    outlineBtn
    outlineBtnUrl
    fillBtn
    fillBtnUrl
    heroForm
  }
`);

