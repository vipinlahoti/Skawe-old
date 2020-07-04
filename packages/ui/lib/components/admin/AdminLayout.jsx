import Skawe from 'meteor/skawe:lib';
import { CloudInstances } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data'
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

class AdminLayout extends Component {
  render() {
    const { children, currentUser } = this.props; // eslint-disable-line
    const theme = currentUser.theme;
    const currentRoute = this.props.location.pathname;
    
    return (
      <div className={theme}>
        <div className="dashboard__wrapper">
          <Skawe.components.AdminSidebar currentRoute={currentRoute} />
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
      </div>
    )
  }
}

const AdminLayoutContainer = Skawe.withAccount(AdminLayout);
Skawe.registerComponent('AdminLayout', AdminLayoutContainer);
