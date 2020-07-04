import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class PriceSummary extends Component {

  createInstance = () => {
    let enableBackupFlag;
    let enablePrivateIpFlag;
    const addons = this.props.addOnsPlans;
    const createInstanceUrl = 'linode/instances';
    
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

    const setCreate = {
      /* Distribution ID string: linode/debian9 */
      image: this.props.distribution[0], // OS Image

      /* Region string: 'us-east' */
      region: this.props.region[2], // Region
      
      /* server Type string: 'g6-standard-2' */
      type: this.props.serverPlans[0], // Server Type
      
      /* server label 'string' */
      // label: this.props.serverLabel, // Server Label
      label: `skawe${this.props.userId}${this.props.cloudInstanceCount + 1}`,
      
      /* strong root password 'string' */
      root_pass: this.props.rootPassword, // Server Password
      
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
      // stackscript_id: '', // ID of stack script - one click apps
      
      /* gh_username string: 'linode'
       */
      // stackscript_data: {  // object containing stach script username
        // gh_username: ''
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
      region: `${this.props.region[0]}, ${this.props.region[1]}`, // Region
      /* Distribution ID string: CentOS 8 */
      image: this.props.distribution[2], // OS Image
      /* cpu: '1CPU' */
      cpu: this.props.serverPlans[2], // cpu
      /* storage: '25GB Storage' */
      storage: `${this.props.serverPlans[3]} Storage`, // storage
      /* ram: '1GB RAM' */
      ram: `${this.props.serverPlans[4]} RAM`, // ram
      /* transfer: '1000 GB Bandwidth' */
      transfer: `${this.props.serverPlans[7]} Bandwidth`, // transfer
      /* backup: '$2' */
      backup: this.props.serverPlans[6], // backup
    }

    Meteor.call('cloudInstance.new', createInstanceUrl, setCreate, setExtra, (error, results) => {
      if (error) {
        console.log(error);
      }
      else {
        console.log(results);
      }
    });
  }

  render() {
    const {
      distribution,
      region,
      serverPlans,
      serverLabel,
      rootPassword,
      passwordStrength,
      addOnsPlans
    } = this.props;
    const setSSDPrice = serverPlans && serverPlans.length ? Number(serverPlans[5]) : 0;
    let setAddOnPrice = [setSSDPrice];

    for (let i = 0; i < addOnsPlans.length; i++) {
      setAddOnPrice.push(Number(addOnsPlans[i]['priceMo']));
    }

    let totalPrice =  setAddOnPrice.reduce((a, b) => a + b, 0);
    let checkButtonDisable = serverPlans.length > 0 && region.length > 0 && distribution.length > 0 && rootPassword && passwordStrength >= 3;

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
            <p className="mb-0">{serverPlans[4]} RAM, {serverPlans[3]} SSD, {serverPlans[2]}</p>
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
              <p className="mb-0" key={index}>{addOns.label} {addOns.priceMo ? `₹${addOns.priceMo}` : null}{addOns.priceMo ? '/mo' : ''} </p>
            )}
          </div>
        : null }

        {serverPlans && serverPlans.length ?
          <div className="section-xsmall">
            <h5 className="title-5 text-primary">₹{totalPrice}<small>/mo</small></h5>
          </div>
        : null }

        <Skawe.components.Button variant="primary" block disabled={!checkButtonDisable} onClick={this.createInstance}>
            Create a Server
        </Skawe.components.Button>

      </div>
    )
  }
}

Skawe.registerComponent('PriceSummary', PriceSummary);
