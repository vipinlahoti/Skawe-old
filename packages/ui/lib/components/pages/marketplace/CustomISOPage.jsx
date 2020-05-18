import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Jumbotron, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const CustomISOPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Hosting" description="Web Hosting Page" />

      <Jumbotron>
        <Container>
          <Row>
            <Col sm={12} md={10} lg={8}>
              <h2 className="title-2">
                1-Click Applications you can deploy
              </h2>
              <p className="lead mb-3">Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more.</p>
              <Skawe.components.Button variant="white" type="link" path="/marketplace">
                Visit Marketplace
              </Skawe.components.Button>
              <Skawe.components.Button variant="black-fill" type="link" path="/register">
                Create a Free Account
              </Skawe.components.Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

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

Skawe.registerComponent('CustomISOPage', CustomISOPage);
