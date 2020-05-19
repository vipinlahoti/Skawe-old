import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const BlockStoragePage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Hosting" description="Web Hosting Page" />

      <Skawe.components.HeroJumbotron 
        title="Block Storage"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
        whiteButton={true}
        whiteButtonText="View Pricing"
        whiteButtonPath="/"
        blackButton={true}
        blackButtonPath="/register"
      />

      <div className="section">
        <Container>
          <Row>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-6">Web Hosting</h5>
                  <p>Budget-friendly shared hosting </p>
                  <p className="mb-0">Starting at</p>
                  <div className="mb-1">
                    <span className="title-5 mr-1">₹99/mo</span>
                    <span className="title-5 list-price">₹299/mo</span>
                  </div>
                  <Skawe.components.Button type="link" path="/hosting" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-6">Web Hosting</h5>
                  <p>Budget-friendly shared hosting </p>
                  <p className="mb-0">Starting at</p>
                  <div className="mb-1">
                    <span className="title-5 mr-1">₹99/mo</span>
                    <span className="title-5 list-price">₹299/mo</span>
                  </div>
                  <Skawe.components.Button type="link" path="/hosting" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-6">Web Hosting</h5>
                  <p>Budget-friendly shared hosting </p>
                  <p className="mb-0">Starting at</p>
                  <div className="mb-1">
                    <span className="title-5 mr-1">₹99/mo</span>
                    <span className="title-5 list-price">₹299/mo</span>
                  </div>
                  <Skawe.components.Button type="link" path="/hosting" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

    </React.Fragment>
  )
}

Skawe.registerComponent('BlockStoragePage', BlockStoragePage);
