import { Components, registerComponent, Utils, withSingle, withMutation, withUpdate } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mapProps from 'recompose/mapProps';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Instances } from '../../../modules/instances/index.js';

class CloudInstanceSummaryPage extends Component {
  state = {
    cloudInstanceData: {},
    usedBandwidth: {},
    instanceStats: {},
    listDisk: '',
  }

  componentDidMount() {
    const getInstanceData = Utils.instances.getInstanceData;
    const getusedBandwidth = Utils.instances.getusedBandwidth;
    const getStatsData = Utils.instances.getStatsData;
    const getListDisks = Utils.instances.getListDisks;

    if (getInstanceData === undefined) {
      this.getInstanceData();
    }

    if (getusedBandwidth === undefined) {
      this.getusedBandwidth();
    }

    if (getStatsData === undefined) {
      this.getStatsData();
    }

    if (getListDisks === undefined) {
      this.getListDisks();
    }
  }

  getInstanceData = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const instanceId = getCurrentRoute[getCurrentRoute.length - 1];
    const instanceDbId = getCurrentRoute[getCurrentRoute.length - 2];

    const dataMutation = {
      url: `instances/${instanceId}`,
      method: 'GET',
      type: 'full',
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const body = getInstancesData.data;
      const cloudInstanceData = body.data;
      
      if (cloudInstanceData) {
        this.setState({ cloudInstanceData });
        Utils.instances.getInstanceData = cloudInstanceData;

        if (cloudInstanceData.status !== 'running' && cloudInstanceData.status !== 'offline') {
          this.getInstanceData();
        }

        if (cloudInstanceData.status === 'running' || cloudInstanceData.status === 'offline') {
          const data = {
            status: cloudInstanceData.status,
          };
          this.props.updateInstance({
            selector: { _id: instanceDbId},
            data: data
          })
        }
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  getStatsData = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const instanceId = getCurrentRoute[getCurrentRoute.length - 1];

    const dataMutation = {
      url: `instances/${instanceId}/stats`,
      method: 'GET',
      type: 'full',
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const body = getInstancesData.data;
      const flatBody = body.data;
      const instanceStats = flatBody.data;

      if (instanceStats) {
        this.setState({ instanceStats: instanceStats });
        Utils.instances.getStatsData = instanceStats;
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  getusedBandwidth = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const instanceId = getCurrentRoute[getCurrentRoute.length - 1];
    
    const dataMutation = {
      url: `instances/${instanceId}/transfer`,
      method: 'GET',
      type: 'full',
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const body = getInstancesData.data;
      const usedBandwidth = body.data;
      
      if (usedBandwidth) {
        this.setState({ usedBandwidth });
        Utils.instances.getusedBandwidth = usedBandwidth;
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  getListDisks = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const instanceId = getCurrentRoute[getCurrentRoute.length - 1];

    const dataMutation = {
      url: `instances/${instanceId}/disks`,
      method: 'GET',
      type: 'full',
    }
    
    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const body = getInstancesData.data;
      const flatBody = body.data;
      const listDisk = flatBody.data;

      if (listDisk) {
        for (let i = 0; i < listDisk.length; i ++) {
          if (listDisk[i]['filesystem'] === 'ext4') {
            this.setState({ listDisk: listDisk[i]['id'] });  
            Utils.instances.getListDisks = listDisk[i]['id'];
          }
        }
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  instanceStatus = (cloudInstanceData) => {
    this.setState({ cloudInstanceData });
    Utils.instances.getInstanceData = {};
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="instance-page">
          <Components.Loading />
        </div>
      );
    } else if (!this.props.document) {
      return (
        <Components.Error404 />
      );
    } else {
      const currentRoute = this.props.location.pathname;
      const getCurrentRoute = currentRoute.split('/');
      const instanceId = getCurrentRoute[getCurrentRoute.length - 1];
      const instanceDbId = getCurrentRoute[getCurrentRoute.length - 2];
      const instanceSingle = this.props.document;

      let cloudInstanceData;
      let usedBandwidth;
      let instanceStats;
      let listDisks;

      const skaweCloudInstanceData = Utils.instances.getInstanceData;
      const skaweUsedBandwidth = Utils.instances.getusedBandwidth;
      const skaweInstanceStats = Utils.instances.getStatsData;
      const skaweListDisks = Utils.instances.getListDisks;

      if ((skaweCloudInstanceData === undefined) || (Object.keys(skaweCloudInstanceData).length === 0)) {
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

      if (skaweListDisks === undefined) {
        listDisks = this.state.getListDisks;
      } else {
        listDisks = skaweListDisks;
      }

      console.log('cloudInstanceData: ', cloudInstanceData);
      return (
        <React.Fragment>
          <Components.HeadTags title="Cloud Instance" description="Cloud Instance Page" />
          
          <Container>
            {Object.keys(cloudInstanceData).length ?
              <React.Fragment>
                <Components.SummaryHeader
                  cloudInstanceData={cloudInstanceData}
                  instanceId={instanceId}
                  instanceStatus={this.instanceStatus}
                  instanceDbId={instanceDbId}
                  getInstanceData={this.getInstanceData}
                />

                {cloudInstanceData.status !== 'running' && cloudInstanceData.status !== 'offline' ?
                  <React.Fragment>
                    <h3 className="title-3">{Utils.toTitleCase(cloudInstanceData.status)}</h3>
                    <div className="progress progress-small progress-animate mb-3">
                      <div className="progress-fill progress-fill-fast"></div>
                    </div>
                  </React.Fragment>
                : null}
                  
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
                          <Components.OverviewInstance
                            instance={cloudInstanceData}
                            instanceSingle={instanceSingle}
                            getInstanceData={this.getInstanceData}
                          />

                          {Object.keys(instanceStats).length ?
                            <Components.GraphInstance
                              instanceId={instanceId}
                              instanceStats={instanceStats}
                              getInstanceData={this.getInstanceData}
                            />
                          : 
                            <div className="p-1 bg-light bg-dark-light">
                              <div className="instances__list">
                                Graphs for this Instance are not yet available.
                              </div>
                            </div>
                          }
                        </Col>

                        <Col md={4}>
                          <Components.OverviewSidebarInstance
                            instance={cloudInstanceData}
                            usedBandwidth={usedBandwidth}
                            instanceId={instanceId}
                          />
                        </Col>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="backups">
                      <Components.BackupSummary
                        instance={cloudInstanceData}
                        instanceId={instanceId}
                        instanceDbId={instanceDbId}
                        instanceStatus={this.instanceStatus}
                        instanceSingle={instanceSingle}
                       />
                    </Tab.Pane>

                    <Tab.Pane eventKey="networking">
                      <Components.NetworkingSummary
                        instance={cloudInstanceData}
                        instanceId={instanceId}
                        instanceStatus={this.instanceStatus}
                      />
                    </Tab.Pane>

                    <Tab.Pane eventKey="resize">
                      <Components.ResizeSummary
                        instance={cloudInstanceData}
                        instanceId={instanceId}
                        instanceDbId={instanceDbId}
                        listDisk={listDisks}
                        instanceStatus={this.instanceStatus}
                        instanceSingle={instanceSingle}
                      />
                    </Tab.Pane>

                    <Tab.Pane eventKey="rebuild">
                      <Components.ReBuildSummary
                        instanceId={instanceId}
                        instanceDbId={instanceDbId}
                        instanceStatus={this.instanceStatus}
                      />
                    </Tab.Pane>

                    <Tab.Pane eventKey="settings">
                      <Components.SettingsSummary
                        listDisk={listDisks}
                        instanceStatus={cloudInstanceData.status}
                        instanceId={instanceId}
                        instanceDbId={instanceDbId}
                      />
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              
              </React.Fragment>
            : <Components.Loading /> }
          </Container>
        </React.Fragment>
      )
    }
  }
}

const queryOptions = {
  collection: Instances,
  queryName: 'instancesSingleQuery',
  fragmentName: 'InstanceItem',
};

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

const mapPropsFunction = props => ({
  ...props,
  documentId: props.match && props.match.params._id,
});


registerComponent({
  name: 'CloudInstanceSummaryPage',
  component: CloudInstanceSummaryPage,
  hocs: [
    mapProps(mapPropsFunction),
    withMutation(instanceOptions),
    withUpdate({
      collection: Instances,
      fragmentName: 'InstanceItem',
    }),
    [withSingle, queryOptions],
  ]
});
