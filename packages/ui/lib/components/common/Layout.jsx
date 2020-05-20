import Skawe from 'meteor/skawe:lib';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Skawe.components.Announcement
          text="This is a sample Announcement, use coupon code"
          code="DKEH1J8"
        />
        <Skawe.components.Header />
        {this.props.children}
        <Skawe.components.MiniFooter
          variant="bg-primary"
          className="center-xs"
          title="Sign up for the Skawe Cloud Newsletter"
          newsLetter={true}
        />
        <Skawe.components.Footer />        
      </React.Fragment>
    )
  }
}

Layout.contextTypes = {
  currentUser: PropTypes.object,
};

Skawe.registerComponent('Layout', Layout);
