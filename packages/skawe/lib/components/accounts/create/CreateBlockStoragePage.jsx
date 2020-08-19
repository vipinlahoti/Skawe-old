import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class CreateBlockStoragePage extends Component {

  render() {

    return (
      <React.Fragment>
        <Components.HeadTags title="Block Storage" description="Block Storage Page" />
        Block Stroage
      </React.Fragment>
    )
  }
}

registerComponent({ name: 'CreateBlockStoragePage', component: CreateBlockStoragePage });
