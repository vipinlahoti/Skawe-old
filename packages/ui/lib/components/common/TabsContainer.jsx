import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Tab, Nav, Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

const TabsContainer = ({title, variant, link, className, newsLetter}) =>
  <Row className="center-xs">
    <Col sm={12} md={10}>
      <Tab.Container defaultActiveKey="first">
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Deploy</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Scale</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Store</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          
          <Tab.Pane eventKey="first">
            <Row>
              <Col>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name="cloud_queue"/>
                    </div>
                    <h6>Flexible Clouds</h6>
                    <Card.Text>
                      Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name="details"/>
                    </div>
                    <h6>One Click Apps Marketplace</h6>
                    <Card.Text>
                      Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name="public"/>
                    </div>
                    <h6>Global availability</h6>
                    <Card.Text>
                      Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Pane>
          
          <Tab.Pane eventKey="second">
            <Row>
              <Col>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name="all_inclusive"/>
                    </div>
                    <h6>Resize</h6>
                    <Card.Text>
                      Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name="dns"/>
                    </div>
                    <h6>Load Balancers</h6>
                    <Card.Text>
                      Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name="account_balance_wallet"/>
                    </div>
                    <h6>Pay for what you use</h6>
                    <Card.Text>
                      Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="third">
            <Row>
              <Col>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name="layers"/>
                    </div>
                    <h6>Managed Databases</h6>
                    <Card.Text>
                      Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name="camera_roll"/>
                    </div>
                    <h6>Object Storage</h6>
                    <Card.Text>
                      Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name="storage"/>
                    </div>
                    <h6>Block Storage</h6>
                    <Card.Text>
                      Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Col>
  </Row>

Skawe.registerComponent('TabsContainer', TabsContainer);
