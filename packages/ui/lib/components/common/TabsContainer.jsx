import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Tab, Nav, Row, Col, Card } from 'react-bootstrap';

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
              {[
                {
                  name: 'Flexible Clouds',
                  icon: 'cloud_queue',
                  description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                },
                {
                  name: 'One Click Apps Marketplace',
                  icon: 'details',
                  description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                },
                {
                  name: 'Global availability',
                  icon: 'public',
                  description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                }
              ].map((tab, index) => 
              <Col key={index}>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name={tab.icon}/>
                    </div>
                    <h6>{tab.name}</h6>
                    <Card.Text>{tab.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              )}
            </Row>
          </Tab.Pane>
          
          <Tab.Pane eventKey="second">
            <Row>
              {[
                {
                  name: 'Resize',
                  icon: 'all_inclusive',
                  description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                },
                {
                  name: 'Load Balancers',
                  icon: 'dns',
                  description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                },
                {
                  name: 'Pay for what you use',
                  icon: 'account_balance_wallet',
                  description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                }
              ].map((tab, index) => 
              <Col key={index}>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name={tab.icon}/>
                    </div>
                    <h6>{tab.name}</h6>
                    <Card.Text>{tab.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              )}
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="third">
            <Row>
              {[
                {
                  name: 'Managed Databases',
                  icon: 'layers',
                  description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                },
                {
                  name: 'Object Storage',
                  icon: 'camera_roll',
                  description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                },
                {
                  name: 'Block Storage',
                  icon: 'storage',
                  description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                }
              ].map((tab, index) => 
              <Col key={index}>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Skawe.components.Icon name={tab.icon}/>
                    </div>
                    <h6>{tab.name}</h6>
                    <Card.Text>{tab.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              )}
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Col>
  </Row>

Skawe.registerComponent('TabsContainer', TabsContainer);
