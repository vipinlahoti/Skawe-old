import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment AppItem on App {
    _id
    distId
    typeId
    label
    script
    username
    image
  }
`);
