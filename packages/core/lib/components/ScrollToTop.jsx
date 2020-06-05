import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

Skawe.registerComponent('ScrollToTop', withRouter(ScrollToTop));
