import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';

class RebuildInstance extends Component {
  state = {
    selectRootPassword: '',
    selectPasswordStrength: '',
    selectDistribution: [],
  }

  selectedRootPassword = (setRootPassword) => {
    console.log(setRootPassword)
    this.setState({
      selectRootPassword: setRootPassword
    });
  }

  passwordStrength = getStrength => {
    console.log(getStrength)
    this.setState({
      selectPasswordStrength: getStrength
    });
  }

  selectedDistribution = (setDistribution) => {
    console.log(setDistribution)
    this.setState({
      selectDistribution: setDistribution
    });
  }

  reBuildServer = async e => {
    e.preventDefault();
    console.log('reBuildServer');
  }

  render () {
    const { selectPasswordStrength, selectDistribution } = this.state;
    const checkPasswordStrength = selectDistribution.length && selectPasswordStrength >= 3;

    return (
      <React.Fragment>
        <h6 className="title-6">Rebuilding will destroy all data on all existing disks on this Instance.</h6>
        <div className="bg-light mb-1">
          <Skawe.components.DistributionSelect
            title="Choose a Distribution"
            placeholder="-- Select a Distribution --"
            selectedDistribution={this.selectedDistribution}
          />
        </div>

        <div className="bg-light mb-1">
          <Skawe.components.RootPassword
            selectedRootPassword={this.selectedRootPassword}
            passwordStrength={this.passwordStrength}
          />
        </div>

        <Skawe.components.Button variant="primary" disabled={!checkPasswordStrength} onClick={this.reBuildServer}>
          Rebuild
        </Skawe.components.Button>
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('RebuildInstance', RebuildInstance);
