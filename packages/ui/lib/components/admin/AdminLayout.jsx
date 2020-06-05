import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

class AdminLayout extends Component {
  render() {
    const { children } = this.props; // eslint-disable-line

    return (
      <div className="dashboard__wrapper">
        <Skawe.components.AdminSidebar />
        <div className="dashboard-container">
          <Skawe.components.AdminHeader />
          <div className="section-dashboard">
            <Container>
              <Row>
                <Col>
                  {children}
                </Col>
              </Row>
            </Container>
          </div>
          <Skawe.components.AdminFooter />
        </div>
      </div>
    )
  }
}

Skawe.registerComponent('AdminLayout', AdminLayout);
