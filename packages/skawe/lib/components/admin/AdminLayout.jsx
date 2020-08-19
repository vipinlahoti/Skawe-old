import { Components, registerComponent, withCurrentUser, withAccess } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

class AdminLayout extends Component {
  render() {
    const { children, currentUser } = this.props; // eslint-disable-line
    const currentRoute = this.props.location.pathname;

    return (
      <React.Fragment>
        <Helmet>
          <link name='font-face' rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Nunito:300,400,500,700|Open+Sans:300,400,600|Material+Icons'/>
        </Helmet>
        
        {currentUser ?
          <div className={currentUser.theme}>
            <div className="toast__wrapper">
              <Components.FlashMessages />
            </div>
            <div className="dashboard__wrapper">
              <Components.AdminSidebar currentRoute={currentRoute} />
              <div className="dashboard-container">
                <Components.AdminHeader />
                <div className="section-dashboard">
                  {children}
                </div>
                <Components.AdminFooter />
              </div>
            </div>
          </div>
        : <Components.Loading /> }
      </React.Fragment>
    )
  }
}

AdminLayout.propTypes = {
  currentUser: PropTypes.object,
};

const accessOptions = {
  groups: ['members'],
  redirect: '/',
  message: 'Sorry, you do not have the rights to access this page.',
};

registerComponent({ name: 'AdminLayout', component: AdminLayout, hocs: [withCurrentUser, [withAccess, accessOptions]] });
