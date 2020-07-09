import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { ListGroup, Container, Row, Col, Card } from 'react-bootstrap';

class HomePage extends Component {

  render() {
    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Home" description="Home description" />

        <Skawe.components.HeroJumbotron 
          title="An agile suite that designed"
          description="Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together."
          form={true}
          formType="signUp"
          image="/images/banner-dashboard.png"
          alt="home-banner"
          size="large"
        />

        <Skawe.components.MiniFooter
          variant="bg-light"
          className="center-xs"
          title="Get started with Skáwe and find everything that you need to get online."
        />

        <div className="section section-cloud-cards">
          <Container>
            <Row>
              {[
                {
                  title: 'Cloud Instance',
                  icon: 'cloud_queue',
                  description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                  salePrice: '₹99/mo',
                  listPrice: '₹299/mo',
                  path: '/products/cloud-instance'
                },
                {
                  title: 'Storage',
                  icon: 'storage',
                  description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                  salePrice: '₹99/mo',
                  listPrice: '₹299/mo',
                  path: '/products/storage'
                },
                {
                  title: 'Load Balancers',
                  icon: 'dns',
                  description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                  salePrice: '₹99/mo',
                  listPrice: '₹299/mo',
                  path: '/products/load-balancers'
                },
                {
                  title: 'DNS Manager',
                  icon: 'public',
                  description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                  salePrice: '₹99/mo',
                  listPrice: '₹299/mo',
                  path: '/products/dns-manager'
                }
              ].map((instances, index) => 
                <Skawe.components.CloudCard
                  key={index}
                  icon={instances.icon}
                  title={instances.title}
                  description={instances.description}
                  salePrice={instances.salePrice}
                  listPrice={instances.listPrice}
                  path={instances.path}
                />
              )}
            </Row>
          </Container>
        </div>
        
        <div className="section bg-light">
          <Container>
            <Row className="middle-xs">
              <Col sm={12} md={5} lg={5}>
                <Skawe.components.Heading
                  full={true}
                  title={`<span class="d-block lead">Powerfull Control Panel</span> for better experience.`}
                  description="Spend more time coding and less time managing your infrastructure."
                />

                <ul className="list">
                  {['One-Click deployment', 'Easy Management'].map((list, index) => 
                    <li key={index}>{list}</li>
                  )}
                </ul>

                <Skawe.components.Button variant="primary" isLink={true} path="/features/control-panel">
                  Control Panel Features
                </Skawe.components.Button>
              </Col>

              <Col sm={12} md={6} lg={6} className="col-md-offset-1">
                <div className="diagonal-bg">
                  <img className="w-100" src="/images/control-panel.png" alt="control panel"/>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section">
          <Container>
            <Row>
              {[
                  {
                    name: 'Flexible Clouds',
                    icon: 'cloud_queue',
                    description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                  },
                  {
                    name: 'Automated Provisioning',
                    icon: 'details',
                    description: 'Skáwe offer the industry’s fastest provisioning within seconds of ordering.'
                  },
                  {
                    name: 'Resize',
                    icon: 'all_inclusive',
                    description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                  },
                  {
                    name: 'DDoS Protection',
                    icon: 'security',
                    description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                  },
                  {
                    name: 'DNS Manager',
                    icon: 'public',
                    description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                  },
                  {
                    name: 'Monitoring',
                    icon: 'data_usage',
                    description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                  },
                  {
                    name: 'Professional Services',
                    icon: 'dvr',
                    description: 'Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite.'
                  },
                  {
                    name: 'Pay for what you use',
                    icon: 'account_balance_wallet',
                    description: 'Consolidated monthly, annual, and usage-based billing save an average of 7-10 hours per month'
                  }
                ].map((tab, index) => 
                <Col lg={3} md={4} sm={6} xs={4} key={index}>
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
          </Container>
        </div>

        <div className="section bg-light">
          <Container>
            <Row className="middle-xs">
              <Col sm={12} md={6} lg={6}>
                <div className="diagonal-bg diagonal-bg-left">
                  <img className="w-100" src="/images/control-panel01.png" alt="control panel"/>
                </div>
              </Col>
              <Col sm={12} md={5} lg={5} className="col-md-offset-1">
                <Skawe.components.Heading
                  full={true}
                  title="Why Skáwe?"
                  description="Spend more time coding and less time managing your infrastructure."
                />

                <ul className="list">
                  {['One-Click deployment', 'Easy Management'].map((list, index) => 
                    <li key={index}>{list}</li>
                  )}
                </ul>

                <Skawe.components.Button variant="primary" isLink={true} path="/register">
                  Create a Free Account
                </Skawe.components.Button>
              </Col>
            </Row>
          </Container>
        </div>

        
        {/*
        <div className="section">
          <Container>
            <Skawe.components.Heading
              title="Excepteur sint occaecat cupidatat."
              description="Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world."
            />

            <Skawe.components.TabsContainer />
          </Container>
        </div>

        
        <div className="section">
          <Container>
            <Skawe.components.Heading
              title="An agile suite that’s designed for"
              description="Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR"
            />

            <Row className="center-xs">
              <Col sm={12} md={12} lg={10}>
                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <ListGroup className="blog-item text-left mb-2">
                          <ListGroup.Item>
                            <h5 className="title-5">Card Title</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                      
                      <Col md={6}>
                        <ListGroup className="blog-item text-left mb-2">
                          <ListGroup.Item>
                            <h5 className="title-5">Card Title</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>

                      <Col md={6}>
                        <ListGroup className="blog-item text-left mb-2">
                          <ListGroup.Item>
                            <h5 className="title-5">Card Title</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>

                      <Col md={6}>
                        <ListGroup className="blog-item text-left mb-2">
                          <ListGroup.Item>
                            <h5 className="title-5">Card Title</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                    </Row>
                  </Col>
                  
                  <Col md={6}>
                    <ListGroup className="blog-item blog-item-feature text-left mb-2">
                      <ListGroup.Item>
                        <img className="blog-thumbnail" src="/images/blog.jpg" />
                        <h5 className="title-5">Card Title</h5>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        
        <div className="section">
          <Container>
            <Skawe.components.Heading
              title="Deploy the server anywhere around the world"
              description="Worldwide locations and the local presence you need."
            />

            <Row className="center-xs">
              <Col sm={12} md={10} lg={8}>
                <div className="section-locations">
                  <ul className="list-detail">
                    {[
                      {name: 'AMS2', description: 'Amsterdam, Netherlands', path: '/'},
                      {name: 'AMS2', description: 'Amsterdam, Netherlands', path: '/'},
                      {name: 'AMS2', description: 'Amsterdam, Netherlands', path: '/'},
                      {name: 'AMS2', description: 'Amsterdam, Netherlands', path: '/'},
                      {name: 'AMS2', description: 'Amsterdam, Netherlands', path: '/'},
                      {name: 'AMS2', description: 'Amsterdam, Netherlands', path: '/'},
                      {name: 'AMS2', description: 'Amsterdam, Netherlands', path: '/'},
                      {name: 'AMS2', description: 'Amsterdam, Netherlands', path: '/'},
                      {name: 'AMS2', description: 'Amsterdam, Netherlands', path: '/'},
                      {name: 'AMS2', description: 'Amsterdam, Netherlands', path: '/'},
                    ].map((os, index) => 
                      <li key={index}>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                    )}
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        */}
        
        <Skawe.components.MiniCreateForm />
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('HomePage', HomePage);
