import Skawe from 'meteor/skawe:lib';
import { Distributions, Regions, ServerPlans } from 'meteor/skawe:instances';
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
    selectLabel: '',
    selectRootPassword: '',
    selectAddonPrices: [],
    selectAddonPlans: [],
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
    this.setState({
      selectServerPlans: setServerPlans,
      selectAddonPrices: [`${setServerPlans[6]}`, `${setServerPlans[7]}`]
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
    this.setState({
      selectAddonPlans: setAddonPlans
    });
  }

  render() {
    const { selectDistribution, selectRegion, selectLabel, selectRootPassword, selectServerPlans, selectAddonPrices, selectAddonPlans } = this.state;
    console.log(
      'distributionsList: ', this.props.distributionsList,
      'regionsList: ', this.props.regionsList,
      'serverPlansList: ', this.props.serverPlansList
    )

    const rootPasswordTextWrapper = 
      <ul><li>Be at least 6 characters</li><li>Contain at least two of the following character classes: uppercase letters, lowercase letters, numbers, and punctuation.</li></ul>

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Cloud Instances" description="Cloud Instances Page" />

        <Container>
          <Row>
            <Col sm={12} md={8}>
              <div className="section-xsmall">
                <h5 className="title-5 mb-1">Create a Cloud Instance</h5>
              </div>

              <Tab.Container defaultActiveKey="first" className="pt-0">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Distributions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">One Click Apps</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Skawe.components.Distribution selectedDistribution={this.selectedDistribution} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    One Click Apps
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              <Skawe.components.Region
                showSpeedTest={true}
                selectedRegion={this.selectedRegion}
              />
              <Skawe.components.InstancePlans selectedPlans={this.selectedPlans} />
              <Skawe.components.InstanceLabel
                column={6}
                title="Server / Instance Label"
                placeholder="cloud-instance"
                description="Add a label to your Instance."
                selectedLabel={this.selectedLabel}
              />
              <Skawe.components.RootPassword selectedRootPassword={this.selectedRootPassword} />
              {/*<Skawe.components.SSHKeys />*/}
              <Skawe.components.AdditionalFeatures
                selectedAddonPrices={selectAddonPrices}
                selectedAddonPlans={this.selectedAddonPlans}
              />
            </Col>

            <Col sm={12} md={4}>
              <Skawe.components.PriceSummary
                region={selectRegion}
                os={selectDistribution}
                serverLabel={selectLabel}
                rootPassword={selectRootPassword}
                serverPlans={selectServerPlans}
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

  return {
    distributionsList: Distributions.find().fetch(),
    regionsList: Regions.find().fetch(),
    serverPlansList: ServerPlans.find().fetch(),
  };
})(CreateCloudInstancePage);

Skawe.registerComponent('CreateCloudInstancePage', CreateCloudInstancePageContainer);
