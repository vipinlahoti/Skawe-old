import Skawe from 'meteor/skawe:lib';
import { CloudInstances } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Row, Col } from 'react-bootstrap';

class ListCloudInstancePage extends Component {

  render() {
    const { currentUser, cloudInstancesList } = this.props;

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Cloud Instances" description="Cloud Instances Page" />
        
        {cloudInstancesList.length === 0 ?
          <Skawe.components.FirstInstance
            icon="cloud_queue"
            button="Create"
            title="Add your first Cloud Instance!"
            description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
            path="/accounts/list-cloud-instance/create"
          />
        :
          <React.Fragment>
            <Row>
              <Col md={8}>
                <Row>
                  <Col>
                    <h6 className="title-6">Cloud Instance</h6>
                  </Col>
                  <Col>
                    <div className="text-right">
                      <Skawe.components.Button variant="primary-link" size="small" className="pr-0" path="/accounts/list-cloud-instance/create" isLink={true}>
                        <Skawe.components.Icon name="add_circle_outline" />
                        Create New Instance
                      </Skawe.components.Button>
                    </div>
                  </Col>
                </Row>
                
                <Row>
                  <Col>
                    <Skawe.components.DeployedInstance cloudInstanceData={cloudInstancesList} />
                  </Col>
                </Row>

              </Col>
              <Col md={4}>
                <div className="text-left block-right">
                  {!currentUser.autoBackup ?
                    <ListGroup className="cloud__card">
                      <ListGroup.Item>
                        <h6 className="title-6 mb-1">Backup your data</h6>
                        <p>Click below to create a backup for all cloud instances automatically when new instace is created.</p>
                        <Skawe.components.Button variant="primary" size="small" path="/accounts/settings" isLink={true}>
                          Enable Now
                        </Skawe.components.Button>
                      </ListGroup.Item>
                    </ListGroup>
                  : null}

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
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

const ListCloudInstancePageInstance = withTracker(() => {
  Meteor.subscribe('cloudinstances.userlist');

  return {
    cloudInstancesList: CloudInstances.find().fetch(),
  };
})(ListCloudInstancePage);

const ListCloudInstancewithCurrentUser = Skawe.withCurrentUser(ListCloudInstancePageInstance);
Skawe.registerComponent('ListCloudInstancePage', ListCloudInstancewithCurrentUser);
