import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Jumbotron, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const CustomISOPage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Custom ISO" description="Custom ISO Page" />

      <Components.HeroJumbotron 
        title="One Click Applications you can deploy"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
        whiteButton={true}
        whiteButtonText="Visit Marketplace"
        whiteButtonPath="/marketplace"
        blackButton={true}
        blackButtonPath="/register"
      />


    </React.Fragment>
  )
}

registerComponent({ name: 'CustomISOPage', component: CustomISOPage });
