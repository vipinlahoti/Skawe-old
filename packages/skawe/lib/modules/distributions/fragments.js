import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment DistributionItem on Distribution {
    _id
    distId
    label
    vendor
    image
  }
`);
