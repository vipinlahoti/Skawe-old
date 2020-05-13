import Skawe from '@skawe';
import React from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Home" description="Home description" />

      <Jumbotron className="section-hero">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <div className="hero__wrapper">
                <h4 className="title-3">An agile suite that’s designed for change.</h4>
                <p>Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world.</p>
                <div className="mt-2">
                  <Skawe.components.Button type="link" path="/domain">
                    Get a Domain
                  </Skawe.components.Button>
                  <Skawe.components.Button variant="black-fill" type="link" path="/hosting">
                    Choose Your Hosting
                  </Skawe.components.Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <div className="section section-features">
        <Container>
          <Row className="center-xs mb-2">
            <Col sm={12} md={8} lg={8}>
              <h3 className="title-3">Excepteur sint occaecat cupidatat.</h3>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={4} lg={4}>
              <Card className="featured-card">
                <Card.Body>
                  <div className="card-icon rounded-circle bg-primary text-white">
                    <Skawe.components.Icon name="person_add"/>
                  </div>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={4} lg={4}>
              <Card className="featured-card">
                <Card.Body>
                  <div className="card-icon rounded-circle bg-warning text-white">
                    <Skawe.components.Icon name="account"/>
                  </div>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={4} lg={4}>
              <Card className="featured-card">
                <Card.Body>
                  <div className="card-icon rounded-circle bg-dark text-white">
                    <Skawe.components.Icon name="person_add"/>
                  </div>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section">
        <Container>
          <Row>
            <Col sm={12} md={5} lg={5}>
              <h4 className="title-4">HomePage dolor <span className="text-primary block">sit amet, consectetur adipiscing elit.</span></h4>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </Col>

            <Col sm={12} md={7} lg={7}></Col>
          </Row>
        </Container>
      </div>

      <div className="section">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}></Col>
            <Col sm={12} md={5} lg={5}>
              <h4 className="title-4">Lorem ipsum dolor <span className="text-danger block">sit amet, consectetur adipiscing elit.</span></h4>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
