import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment PageItem on Page {
    # pages
    _id
    orderBy
    title
    
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
    heroEyebrow
    heroTitle
    heroDescription

    outlineBtn
    outlineBtnUrl
    fillBtn
    fillBtnUrl
    heroForm

    # embedly
    thumbnailUrl
    
    body
    
    seoTitle
    seoDescription

    viewCount
    clickCount
  }
`);

