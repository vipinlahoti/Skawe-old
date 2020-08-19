import { Components, registerComponent, Utils, withCurrentUser } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import { Instances } from '../../../modules/instances/index.js';

const Label = ({ document: instance }) => {
  const getImage = instance.image.split(' ')[0];
  const image = getImage.toLowerCase();

  return (
    <React.Fragment> 
      <Link to={instance.pagePath}>
        <span className="d-flex middle-xs">
          <span className="admin-card-image d-flex middle-xs">
            <img src={`/images/${image}.png`} alt={instance.label} />
          </span>
          <span>
            <span className="d-block"><strong>{instance.label}</strong></span>
            <span>{instance.image}, {instance.ram}GB RAM, {instance.cpu}CPU, {instance.storage}GB Storage </span>
          </span>
        </span>
      </Link>
    </React.Fragment>
  )
}

const Status = ({ document: instance }) => {
  return (
    <span className="d-flex middle-xs">
      {instance.status === 'running' ?
        <span className="instance-status bg-success"></span>
      : instance.status === 'offline' ?
        <span className="instance-status bg-danger"></span>
      : <span className="instance-status bg-warning"></span>
      }
      {Utils.toTitleCase(instance.status)}
    </span>
  )
}

const Region = ({ document: instance }) => {
  const getImage = instance.region.split(', ')[1];
  const image = getImage.toLowerCase();

  return (
    <span className="d-flex middle-xs">
      <span className="admin-card-image d-flex middle-xs">
        <img src={`/images/${image}.png`} alt={instance.region} />
      </span>
      <span>{instance.region}</span>
    </span>
  )
}

const ListCloudInstancePage = ({ currentUser }) => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Cloud Instances" description="Cloud Instances Page" />
    
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col>
                <h6 className="title-6">Cloud Instance</h6>
              </Col>
              <Col>
                <div className="text-right">
                  <Components.Button variant="primary-link" size="small" className="pr-0" path="/accounts/list-cloud-instance/create" isLink={true}>
                    <Components.Icon name="add_circle_outline" />
                    Create New Instance
                  </Components.Button>
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <div className="instances__list">
                  <Components.Datatable
                    collection={Instances}
                    initialState={{
                      filter: {
                        userId: {
                          _eq: currentUser._id
                        }
                      }
                    }}
                    columns={[
                      { name: 'label', component: Label },
                      { name: 'status', component: Status, sortable: true, },
                      { name: 'region', component: Region },
                    ]}
                    options={{
                      fragmentName: 'InstanceItem',
                    }}
                    showNew={false}
                    showEdit={false}
                    showSearch={false}
                  />
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <div className="text-left block-right">
              <ListGroup className="cloud__card">
                <ListGroup.Item>
                  <h6 className="title-6 mb-1">Add Managed Services</h6>
                  <p>Managed services includes Backups, Longview Pro, cPanel, and round-the-clock monitoring to help keep your systems up and running. +$120/month per Instance.</p>
                  <Components.Button variant="primary" size="small">
                    Add Managed
                  </Components.Button>
                </ListGroup.Item>
              </ListGroup>

            </div>
          </Col>
        </Row>
      </Container>

    </React.Fragment>
  )
}

registerComponent({ name: 'ListCloudInstancePage', component: ListCloudInstancePage, hocs: [withCurrentUser] });
