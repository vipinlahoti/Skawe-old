import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Tab, Nav } from 'react-bootstrap';

class CloudInstanceSummaryPage extends Component {
  state = {
    cloudInstanceData: {},
    usedBandwidth: {},
    instanceStats: {}
  }

  componentDidMount() {
    const getInstanceData = Skawe.instances.getInstanceData;
    const getusedBandwidth = Skawe.instances.getusedBandwidth;
    const getStatsData = Skawe.instances.getStatsData;

    console.log('getInstanceData: ', getInstanceData);
    console.log('getusedBandwidth: ', getusedBandwidth);
    console.log('getStatsData: ', getStatsData);

    if (getInstanceData === undefined) {
      this.getInstanceData();
    }

    if (getusedBandwidth === undefined) {
      this.getusedBandwidth();
    }

    if (getInstanceData === undefined) {
      this.getStatsData();
    }
  }

  getInstanceData = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const instanceId = getCurrentRoute[4];
    const getMyInstancesUrl = `linode/instances/${instanceId}`;

    Meteor.call('instances.fetch', getMyInstancesUrl, (error, results) => {
      if (error) {
        console.log(error);
      }
      else {
        if (results) {
          this.setState({ 
            cloudInstanceData: results
          });
          Skawe.instances.getInstanceData = results;
        }
      }
    });
  }

  getStatsData = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const instanceId = getCurrentRoute[4];
    const getStatsUrl = `linode/instances/${instanceId}/stats`;

    Meteor.call('instances.fetch', getStatsUrl, (error, results) => {
      if (error) {
        console.log(error);
      }
      else {
        if (results) {
          this.setState({ 
            instanceStats: results
          });
          Skawe.instances.getStatsData = results;
        }
      }
    });
  }

  getusedBandwidth = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const instanceId = getCurrentRoute[4];
    const getUsedBandwidthUrl = `linode/instances/${instanceId}/transfer`;

    Meteor.call('instances.fetch', getUsedBandwidthUrl, (error, results) => {
      if (error) {
        console.log(error);
      }
      else {
        if (results) {
          this.setState({ 
            usedBandwidth: results
          });
          Skawe.instances.getusedBandwidth = results;
        }
      }
    });
  }

  render() {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const instanceId = getCurrentRoute[4];
    let cloudInstanceData;
    let usedBandwidth;
    let instanceStats;

    const skaweCloudInstanceData = Skawe.instances.getInstanceData;
    const skaweUsedBandwidth = Skawe.instances.getusedBandwidth;
    const skaweInstanceStats = Skawe.instances.getStatsData;

    if (skaweCloudInstanceData === undefined) {
      cloudInstanceData = this.state.cloudInstanceData;
    } else {
      cloudInstanceData = skaweCloudInstanceData;
    }

    if (skaweUsedBandwidth === undefined) {
      usedBandwidth = this.state.usedBandwidth;
    } else {
      usedBandwidth = skaweUsedBandwidth;
    }

    if (skaweInstanceStats === undefined) {
      instanceStats = this.state.instanceStats;
    } else {
      instanceStats = skaweInstanceStats;
    }

    return (
      <React.Fragment>
        {Object.keys(cloudInstanceData).length ?
          <React.Fragment>
            <Skawe.components.SummaryHeader cloudInstanceData={cloudInstanceData} instanceId={instanceId} />

            <Tab.Container defaultActiveKey="first">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="backups">Backups</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="networking">Networking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="resize">Resize</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="rebuild">Rebuild</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="settings">Settings</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col md={8}>
                      <Skawe.components.OverviewInstance instance={cloudInstanceData} />
                      {Object.keys(instanceStats).length ?
                        <Skawe.components.GraphInstance instanceId={instanceId} instanceStats={instanceStats} />
                      : <Skawe.components.ComponentLoading /> }
                    </Col>

                    <Col md={4}>
                      <Skawe.components.OverviewSidebarInstance
                        instance={cloudInstanceData}
                        usedBandwidth={usedBandwidth}
                        instanceId={instanceId}
                      />
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="backups">
                  <Skawe.components.BackupSummary
                    instance={cloudInstanceData}
                    instanceId={instanceId}
                   />
                </Tab.Pane>

                <Tab.Pane eventKey="networking">
                  <Skawe.components.NetworkingSummary
                    instance={cloudInstanceData}
                    instanceId={instanceId}
                  />
                </Tab.Pane>

                <Tab.Pane eventKey="resize">
                  <Skawe.components.ResizeSummary
                    instance={cloudInstanceData}
                    instanceId={instanceId}
                  />
                </Tab.Pane>

                <Tab.Pane eventKey="rebuild">
                  <Skawe.components.ReBuildSummary instanceId={instanceId} />
                </Tab.Pane>

                <Tab.Pane eventKey="settings">
                  <Skawe.components.SettingsSummary instanceId={instanceId} />
                </Tab.Pane>

              </Tab.Content>
            </Tab.Container>
          </React.Fragment>
        : <Skawe.components.ComponentLoading /> }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('CloudInstanceSummaryPage', CloudInstanceSummaryPage);


