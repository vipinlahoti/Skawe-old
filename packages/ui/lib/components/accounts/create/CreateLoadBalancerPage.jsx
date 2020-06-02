import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class CreateLoadBalancerPage extends Component {

  render() {

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Load Balancer" description="Load Balancer Page" />

        <Container>
          <Row>
            <Col sm={12} md={8}>
              <div className="section-xsmall">
                <h5 className="title-5 mb-1">Create a Load Balancer</h5>
              </div>

            </Col>
          </Row>
        </Container>

      </React.Fragment>
    )
  }
}

Skawe.registerComponent('CreateLoadBalancerPage', CreateLoadBalancerPage);
