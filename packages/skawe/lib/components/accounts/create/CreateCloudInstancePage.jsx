import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

class CreateCloudInstancePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Components.HeadTags title="Cloud Instances" description="Cloud Instances Page" />

        <Container>
          <Row>
            <Col sm={12} md={8}>
              <h5 className="title-5 mb-1">Create a Cloud Instance</h5>
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
                    <Components.Distributions />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    One Click Apps
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              <Components.Region />
              <Components.InstancePlans />
              <Components.InstanceLabel />
              <Components.RootPassword />
              <Components.SSHKeys />
              <Components.AdditionalFeatures />
            </Col>

            <Col sm={12} md={4}>
              <Components.PriceSummary />
            </Col>
          </Row>
        </Container>

      </React.Fragment>
    )
  }
}

registerComponent({ name: 'CreateCloudInstancePage', component: CreateCloudInstancePage });
