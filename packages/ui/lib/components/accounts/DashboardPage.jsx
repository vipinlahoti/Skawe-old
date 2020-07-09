import Skawe from 'meteor/skawe:lib';
import { CloudInstances } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data'
import React, { Component } from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';

class DashboardPage extends Component {

  render() {
    const { currentUser, cloudInstancesList } = this.props;

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Dashboard" description="Dashboard Page" />
        
        <Container>
          <Row>
            <Col md={8} sm={12} xs={12}>
              <div className="mb-3">
                <Row>
                  <Col>
                    <h6 className="title-6">Cloud Instance</h6>
                  </Col>
                  <Col>
                    <div className="d-flex end-xs">
                      <Skawe.components.Button variant="primary-link" size="small" className="pr-0" path="/accounts/list-cloud-instance/create" isLink={true}>
                        <Skawe.components.Icon name="add_circle_outline" />
                        Create New Instance
                      </Skawe.components.Button>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    { cloudInstancesList ?
                      <Skawe.components.DeployedInstance cloudInstanceData={cloudInstancesList} />
                    : <Skawe.components.ComponentLoading /> }
                  </Col>
                </Row>
              </div>

              <div className="mb-3">
                <Row>
                  <Col>
                    <h6 className="title-6">Domains</h6>
                  </Col>
                  <Col>
                    <div className="d-flex end-xs">
                      <Skawe.components.Button variant="primary-link" size="small" className="pr-0" path="/accounts/list-dns-manager" isLink={true}>
                        <Skawe.components.Icon name="add_circle_outline" />
                        Add a Domain
                      </Skawe.components.Button>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="p-1 bg-light bg-dark-light">
                      <Skawe.components.AddedDomainInstance />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={4} sm={12} xs={12}>
              {!currentUser.autoBackup ?
              <div className="text-left block-right">
                <ListGroup className="cloud__card">
                  <ListGroup.Item>
                    <h6 className="title-6 mb-1">Backup your data</h6>
                    <p>Click below to create a backup for all cloud instances automatically when new instace is created.</p>
                    <Skawe.components.Button variant="primary" size="small" path="/accounts/settings" isLink={true}>
                      Enable Now
                    </Skawe.components.Button>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              : null}

              <div className="text-left block-right">
                <ListGroup className="cloud__card">
                  <ListGroup.Item>
                    <h6 className="title-6 mb-1">Add Managed Services</h6>
                    <p>Managed services includes Backups, Longview Pro, cPanel, and round-the-clock monitoring to help keep your systems up and running. +$120/month per Instance.</p>
                    <Skawe.components.Button variant="primary" size="small">
                      Add Managed
                    </Skawe.components.Button>
                  </ListGroup.Item>
                </ListGroup>
              </div>

            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

const DashboardPageInstance = withTracker(() => {
  Meteor.subscribe('cloudinstances.userlist');

  return {
    cloudInstancesList: CloudInstances.find().fetch(),
  };
})(DashboardPage);

const DashboardPageContainer = Skawe.withAccount(DashboardPageInstance);
Skawe.registerComponent('DashboardPage', DashboardPageContainer);
