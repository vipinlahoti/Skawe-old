import { Components, getSetting, registerComponent, withMutation, withMessages, withCreate } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Instances } from '../../../modules/instances/index.js';

class PriceSummary extends Component {
  state = {
    disableButton: '',
    buttonText: 'Create a Server'
  }

  createInstance = async e => {
    this.setState({
      disableButton: true,
      buttonText: 'Building...'
    });

    let enableBackupFlag;
    let enablePrivateIpFlag;
    const addons = this.props.addOnsPlans;
    
    for (let i = 0; i < addons.length; i++) {
      if (addons[i]['id'] === 'private-ip') {
        enablePrivateIpFlag = true
      } else if (addons[i]['id'] === 'enable-backup') {
        enableBackupFlag = true
      } else {
        enablePrivateIpFlag = false
        enableBackupFlag = false
      }
    }

    const now = new Date().getTime();

    const { distribution, apps, region, serverPlans, rootPassword } = this.props;

    const setCreate = {
      /* Distribution ID string: linode/debian9 */
      image: distribution[0], // OS Image

      /* Region string: 'us-east' */
      region: region[2], // Region
      
      /* server Type string: 'g6-standard-2' */
      type: serverPlans[0], // Server Type
      
      /* server label 'string' */
      // label: serverLabel, // Server Label
      label: `skawe_${now}`,
      
      /* strong root password 'string' */
      root_pass: rootPassword, // Server Password
      
      /* enable auto backup: true/false */
      backups_enabled: enableBackupFlag, // Enable Backups
      
      /* Private newtowk IP: true/false */
      private_ip: enablePrivateIpFlag, // Enable private IPS
      
      /* ID of existing backup from which new server is created 
       * Number: 1234
       */
       // backup_id: '', // Back UP from which new instance need to create
      
      /* When deploying from an Image, this field is optional
       * This is used to set the swap disk size for the newly-created instance
       * Number: 512
       */
      // swap_size: '', // Swap Size if custom iso added
      
      /* The StackScript to deploy to the newly-created: Number: 10079*/
      // stackscript_id: apps.length ? Number(apps[0]) : '', // ID of stack script - one click apps
      
      /* gh_username string: 'linode'
       */
      // stackscript_data: {  // object containing stach script username
      //   gh_username: apps.length ? apps[5] : ''
      // },
      
      /* SSH key Array
       * ['ssh-rsa AAAA_valid_public_ssh_key_123456785== user@their-computer']
       */
      // authorized_keys: [], // SSH key as array
      
      /* Authorised Users array ['myUser', 'secondaryUser'] */
      // authorized_users: [], // list of authorised users as array
      
      /* Boot after build 'true/false' */
      // booted: true,
    }

    const setExtra = {
      /* Region string: 'Mumbai, IN' */
      region: `${region[0]}, ${region[1]}`, // Region
      /* Distribution ID string: CentOS 8 */
      image: distribution[2], // OS Image
      /* cpu: '1CPU' */
      cpu: serverPlans[2], // cpu
      /* storage: '25GB Storage' */
      storage: `${serverPlans[3]}`, // storage
      /* ram: '1GB RAM' */
      ram: `${serverPlans[4]}`, // ram
      /* transfer: '1000 GB Bandwidth' */
      transfer: `${serverPlans[5]}`, // transfer
      /* enable backup: true/false */
      backupEnabled: enableBackupFlag, // Enable Backups
      /* price: '0.50' */
      priceHr: serverPlans[6], // price
      /* price: '360' */
      priceMo: serverPlans[7], // price
      /* backup: '$0.0025' */
      backupPriceHr: serverPlans[8], // backup
      /* backup: '$2' */
      backupPriceMo: serverPlans[9], // backup
    }

    console.log(setCreate, setExtra)

    const dataMutation = {
      url: 'instances',
      type: 'full',
      method: 'POST',
      data: setCreate
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });
      
      const {
        data: {
          getInstancesData
        },
      } = result;
      const body = getInstancesData.data;

      if (body.statusCode === 200 ) {
        const apiData = body.data;
        const instanceData = {
          instanceId: String(apiData.id),
          type: String(apiData.type),
          cpu: String(setExtra.cpu),
          image: String(setExtra.image),
          label: String(apiData.label),
          ram: String(setExtra.ram),
          region: String(setExtra.region),
          storage: String(setExtra.storage),
          status: String(apiData.status),
          ipv4: apiData.ipv4,
          ipv6: apiData.ipv6,
          transfer: String(setExtra.transfer),
          priceHr: String(setExtra.priceHr),
          priceMo: String(setExtra.priceMo),
          backupEnabled: setExtra.backupEnabled,
          backupPriceHr: String(setExtra.backupPriceHr),
          backupPriceMo: String(setExtra.backupPriceMo),
        };


        setTimeout(() => {
          this.props.createInstance({
            data: instanceData
          }).then((instance) => {
            const {
              data: {
                createInstance
              },
            } = instance;
            const body = createInstance.data;
            const eventData = {
              name: `Instance ${body.label} is Created`
            }
            this.props.history.push({ pathname: body.pagePath });
          })

        }, 4000);
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  render() {
    const {
      apps,
      distribution,
      region,
      serverPlans,
      serverLabel,
      rootPassword,
      passwordStrength,
      addOnsPlans
    } = this.props;
    const { disableButton, buttonText } = this.state;
    const setSSDPrice = serverPlans && serverPlans.length ? Number(serverPlans[7]) : 0;
    let setAddOnPrice = [setSSDPrice];

    for (let i = 0; i < addOnsPlans.length; i++) {
      setAddOnPrice.push(Number(addOnsPlans[i]['priceMo'][1]));
    }

    let totalPrice =  setAddOnPrice.reduce((a, b) => a + b, 0);
    let checkButtonDisable;

    if (disableButton === '') {
      checkButtonDisable = !(serverPlans.length > 0 && region.length > 0 && distribution.length > 0 && rootPassword && passwordStrength >= 3);
    }
    else {
      checkButtonDisable = disableButton;
    }

    return (
      <div className="price-summary">
        <h5 className="title-5 text-primary">Summary</h5>

        {distribution && distribution.length ?
          <div className="section-xsmall border-bottom">
            <h6 className="title-6">{distribution[1]}</h6>
            <p className="mb-0">{distribution[2]}</p>
          </div>
          : null }

        {region && region.length ?
          <div className="section-xsmall border-bottom">
            <h6 className="title-6">{region[1]}</h6>
            <p className="mb-0">{region[0]}</p>
          </div>
        : null}

        {serverPlans && serverPlans.length ?
          <div className="section-xsmall border-bottom">
            <h6 className="title-6">{serverPlans[1]}</h6>
            <p className="mb-0">{serverPlans[4]}GB RAM, {serverPlans[3]}GB SSD, {serverPlans[2]}CPU</p>
            <p className="mb-0">₹ {serverPlans[7]}/mo - ₹ {serverPlans[6]}/hr</p>
          </div>
          : null }

        {serverLabel ?
        <div className="section-xsmall border-bottom">
          <h6 className="title-6">Server Label</h6>
          <p className="mb-0">{serverLabel}</p>
        </div>
        : null}

        {addOnsPlans && addOnsPlans.length ?
          <div className="section-xsmall border-bottom">
            <h6 className="title-6">Additional Features</h6>
            {addOnsPlans.map((addOns, index) => 
              <p className="mb-0" key={index}>{addOns.label} {addOns.priceMo ? `₹ ${addOns.priceMo[1]}/mo - ₹ ${addOns.priceMo[0]}/hr` : null} </p>
            )}
          </div>
        : null }

        {serverPlans && serverPlans.length ?
          <div className="section-xsmall">
            <h5 className="title-5 text-primary">₹ {totalPrice}<small>/mo</small></h5>
          </div>
        : null }

        <Components.Button variant="primary" block disabled={checkButtonDisable} onClick={this.createInstance}>
            {buttonText}
        </Components.Button>

      </div>
    )
  }
}

const options = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

registerComponent({
  name: 'PriceSummary',
  component: PriceSummary,
  hocs: [
    withMessages,
    withRouter,
    withMutation(options),
    withCreate({
      collection: Instances,
      fragmentName: 'InstanceItem',
    })
  ]
});
