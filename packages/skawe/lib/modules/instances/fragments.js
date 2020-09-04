import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment InstanceItem on Instance {
    # instances
    _id
    createdAt
    instanceId
    type
    cpu
    image
    label
    ram
    region
    storage
    transfer
    status
    ipv4
    ipv6
    priceHr
    priceMo

    pagePath
    pageUrl
    
    # users
    userId
    user {
      ...UsersMinimumInfo
    }

    # backups
    backupPriceHr
    backupPriceMo
    backupEnabled
    backupCancelledAt
  }
`);

registerFragment(/* GraphQL */`
  fragment InstancePage on Instance {
    ...InstanceItem
  }
`);
