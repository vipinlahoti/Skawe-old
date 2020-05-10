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
        <Skawe.components.Footer />
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('Layout', Layout);
