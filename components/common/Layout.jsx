import Skawe from '@skawe';
import Head from 'next/head';
import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Skawe.components.HeadTags />

        <Skawe.components.Header />
        {this.props.children}
        <Skawe.components.MiniFooter variant="bg-primary" className="center-xs" title="Need help? Call our award-winning support team 24/7." />
        <Skawe.components.Footer />
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('Layout', Layout);
