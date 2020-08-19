import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment PlanItem on Plan {
    _id
    planId
    label
    priceHr
    priceMo
    sellPriceHr
    sellPriceMo
    memory
    disk
    transfer
    vcpu
    class
    addons
    addonBackupHr
    addonBackupMo
    sellAddonBackupHr
    sellAddonBackupMo
  }
`);
