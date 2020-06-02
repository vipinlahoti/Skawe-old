import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

class ListCloudInstancePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Cloud Instances" description="Cloud Instances Page" />
        <Skawe.components.FirstInstance
          icon="cloud_queue"
          button="Create"
          title="Add your first Cloud Instance!"
          description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
          path="/accounts/list-cloud-instance/create"
        />
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('ListCloudInstancePage', ListCloudInstancePage);
