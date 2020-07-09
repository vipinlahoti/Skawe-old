import Skawe from 'meteor/skawe:lib';
import { CloudInstances, Distributions, Regions, ServerPlans } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

class CreateCloudInstancePage extends Component {
  state = {
    selectRegion: [],
    selectDistribution: [],
    selectLabel: '',
    selectRootPassword: '',
    selectServerPlans: [],
    selectAddonPrices: [],
    selectAddonPlans: [],
    selectPasswordStrength: '',
    addonPlans: [
        {
          id: 'enable-backup',
          label: 'Enable Backup',
          autoLabel: 'Auto Backup Enabled',
          autoEnable: this.props.currentUser.autoBackup,
          priceMo: '',
          priceHr: '',
          description: 'Three backup slots are executed and rotated automatically: a daily backup, a 2-7 day old backup, and an 8-14 day old backup. Plans are priced according to the Linode plan selected above.'
        },
        {
          id: 'private-ip',
          label: 'Private IP',
          priceMo: '',
          priceHr: '',
          description: 'Add an Internal IP to this VM.'
        }
      ]
  }

  selectedDistribution = (setDistribution) => {
    this.setState({
      selectDistribution: setDistribution
    });
  }

  selectedRegion = (setRegion) => {
    this.setState({
      selectRegion: setRegion
    });
  }

  selectedPlans = (setServerPlans) => {
    console.log('setServerPlans: ', setServerPlans)
    this.setState({
      selectAddonPrices: setServerPlans,
      selectServerPlans: setServerPlans
    });
  }

  selectedLabel = (setLabel) => {
    this.setState({
      selectLabel: setLabel
    });
  }

  selectedRootPassword = (setRootPassword) => {
    this.setState({
      selectRootPassword: setRootPassword
    });
  }

  selectedAddonPlans = (setAddonPlans) => {
    const selectAddon = [];

    for (let i = 0; i < setAddonPlans.length; i++) {
      if (setAddonPlans[i].show) {
        if (setAddonPlans[i].id === 'enable-backup') {
          setAddonPlans[i]['priceMo'] = this.state.selectAddonPrices[6];
        }
        selectAddon.push(setAddonPlans[i])
      }
    }

    this.setState({
      selectAddonPlans: selectAddon
    });
  }

  passwordStrength = getStrength => {
    this.setState({
      selectPasswordStrength: getStrength
    });
  }

  render() {
    const { 
      selectDistribution,
      selectRegion,
      selectLabel,
      selectRootPassword,
      selectPasswordStrength,
      selectServerPlans,
      addonPlans,
      selectAddonPrices,
      selectAddonPlans
    } = this.state;

    const userId = this.props.currentUser._id;
    const userAutoBackup = this.props.currentUser.autoBackup;
    const cloudInstancesList = this.props.cloudInstancesList.length;

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Cloud Instances" description="Cloud Instances Page" />

        <Container>
          <Row>
            <Col md={8} sm={8} xs={12}>
              <div className="section-xsmall">
                <h5 className="title-5 mb-1">Create a Cloud Instance</h5>
              </div>

              <Tab.Container defaultActiveKey="first">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Distributions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">One Click Apps</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content className="pb-0">
                  <Tab.Pane eventKey="first">
                    <Skawe.components.DistributionSelect
                      title="Choose a Distribution"
                      placeholder="-- Select a Distribution --"
                      selectedDistribution={this.selectedDistribution}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Skawe.components.DistributionSelect
                      title="Choose an App to install"
                      placeholder="-- Select an App --"
                      selectedDistribution={this.selectedDistribution}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              <Skawe.components.RegionSelect
                title="Choose a Region"
                placeholder="-- Select a Region --"
                showSpeedTest={true}
                selectedRegion={this.selectedRegion}
              />
              <Skawe.components.InstancePlans
                title="Choose a Plan"
                selectedPlans={this.selectedPlans}
              />
              {/*<Skawe.components.InstanceLabel
                column={6}
                title="Server / Instance Label"
                placeholder="cloud-instance"
                description="Add a label to your Instance, ex: 'your-server-name'"
                selectedLabel={this.selectedLabel}
              />*/}
              <Skawe.components.RootPassword
                selectedRootPassword={this.selectedRootPassword}
                passwordStrength={this.passwordStrength}
              />
              {/*<Skawe.components.SSHKeys />*/}
              <Skawe.components.AdditionalFeatures
                selectedAddonPrices={selectAddonPrices}
                addonPlans={addonPlans}
                selectedAddonPlans={this.selectedAddonPlans}
                userAutoBackup={userAutoBackup}
              />
            </Col>

            <Col md={4} sm={4} xs={4}>
              <Skawe.components.PriceSummary
                distribution={selectDistribution}
                region={selectRegion}
                serverPlans={selectServerPlans}
                serverLabel={selectLabel}
                rootPassword={selectRootPassword}
                passwordStrength={selectPasswordStrength}
                addOnsPlans={selectAddonPlans}
                userId={userId}
                cloudInstanceCount={cloudInstancesList}
              />
            </Col>
          </Row>
        </Container>

      </React.Fragment>
    )
  }
}

const CreateCloudInstancePageContainer = withTracker(() => {
  Meteor.subscribe('distributions.list');
  Meteor.subscribe('regions.list');
  Meteor.subscribe('serverplans.list');
  Meteor.subscribe('cloudinstances.list');

  return {
    distributionsList: Distributions.find().fetch(),
    regionsList: Regions.find().fetch(),
    serverPlansList: ServerPlans.find().fetch(),
    cloudInstancesList: CloudInstances.find().fetch(),
  };
})(CreateCloudInstancePage);

const CreateCloudInstancePageUserContainer = Skawe.withAccount(CreateCloudInstancePageContainer);
Skawe.registerComponent('CreateCloudInstancePage', CreateCloudInstancePageUserContainer);
