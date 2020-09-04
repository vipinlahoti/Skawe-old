import { Components, registerComponent, withCurrentUser, withAccess } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

class AdminLayout extends Component {
  render() {
    const { children, currentUser } = this.props; // eslint-disable-line
    const currentRoute = this.props.location.pathname;

    if (currentUser) {
      const country = currentUser.country;
      const region = currentUser.region;
      const checkFields = (country !== null && country.length > 0) && (region !== null && region.length > 0);

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
                  <Components.Announcement />
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
    
    } else {
      return (
        <React.Fragment>
          <Helmet>
            <link name='font-face' rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Nunito:300,400,500,700|Open+Sans:300,400,600|Material+Icons'/>
          </Helmet>

          <Components.HeadTags />

          <div className="toast__wrapper">
            <Components.FlashMessages />
          </div>

          <Components.Announcement />
          <Components.Header />

          <Components.LoginPage />

          <Components.Footer />
        </React.Fragment>
      )
    }
  }
}

// const accessOptions = {
//   groups: ['members'],
//   redirect: '/',
//   message: 'Sorry, you do not have the rights to access this page.',
// };

registerComponent({
  name: 'AdminLayout',
  component: AdminLayout,
  hocs: [
    withCurrentUser,
    // [withAccess, accessOptions]
  ]
});
