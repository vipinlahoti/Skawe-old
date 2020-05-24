import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

class Layout extends Component {
  render() {
    const {currentUser, children } = this.props;
    const currentRoute = this.props.location.pathname;
    
    if (Meteor.isClient) {
      if ((Meteor.user() && currentRoute === '/login') || (Meteor.user() && currentRoute === '/register')) {
        return (<Redirect to='/accounts/dashboard' />)
      }
    }

    return (
      <div className={classNames('wrapper')} id="wrapper">

        <Helmet>
          <link name='font-face' rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,700|Open+Sans:300,400,600|Material+Icons'/>
        </Helmet>
       
        <Components.HeadTags />
        <Components.Header />
        <Components.FlashMessages />
        {children}
        <Components.Footer />
      </div>
    )
  }
}

const LayoutContainer = withRouter(Layout)

registerComponent({ name: 'Layout', component: LayoutContainer, hocs: [withCurrentUser] });
