import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Home" description="Home description" />

      <Components.HeroJumbotron 
        title="An agile suite that’s designed for"
        description="Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world."
        form={true}
        formType="signUp"
      />

      <Components.MiniFooter
        variant="bg-dark"
        className="center-xs"
        title="Get started with Skáwe and find everything that you need to get online."
      />

      <div className="section bg-light">
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
                title: 'Object Storage',
                icon: 'storage',
                description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                salePrice: '₹99/mo',
                listPrice: '₹299/mo',
                path: '/products/object-storage'
              },
              {
                title: 'Backups',
                icon: 'backup',
                description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                salePrice: '₹99/mo',
                listPrice: '₹299/mo',
                path: '/products/backups'
              },
              {
                title: 'Load Balancers',
                icon: 'dns',
                description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                salePrice: '₹99/mo',
                listPrice: '₹299/mo',
                path: '/products/load-balancers'
              }
            ].map((instances, index) => 
              <Components.CloudCard
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
      
      <div className="section">
        <Container>
          <Row className="middle-xs">
            <Col sm={12} md={5} lg={5}>
              <Components.Heading
                full={true}
                title={`<span class="d-block lead">Powerfull Control Panel</span> for better experience.`}
                description="Spend more time coding and less time managing your infrastructure."
              />

              <ul className="list">
                {['One-Click deployment', 'Easy Management'].map((list, index) => 
                  <li key={index}>{list}</li>
                )}
              </ul>

              <Components.Button variant="primary" isLink={true} path="/features/control-panel">
                Control Panel Features
              </Components.Button>
            </Col>

            <Col sm={12} md={6} lg={6} className="col-md-offset-1">
              <img className="w-100" src="/images/control-panel.png" alt="control panel"/>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section bg-light">
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
              <Col sm={12} md={3} key={index}>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Components.Icon name={tab.icon}/>
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

      <div className="section">
        <Container>
          <Row className="middle-xs">
            <Col sm={12} md={6} lg={6}>
              <img className="w-100" src="/images/control-panel.png" alt="control panel"/>
            </Col>
            <Col sm={12} md={5} lg={5} className="col-md-offset-1">
              <Components.Heading
                full={true}
                title="Why Skáwe?"
                description="Spend more time coding and less time managing your infrastructure."
              />

              <ul className="list">
                {['One-Click deployment', 'Easy Management'].map((list, index) => 
                  <li key={index}>{list}</li>
                )}
              </ul>

              <Components.Button variant="primary" isLink={true} path="/register">
                Create a Free Account
              </Components.Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Components.MiniCreateForm />

    </React.Fragment>
  )
}

HomePage.displayName = 'HomePage';

registerComponent({ name: 'HomePage', component: HomePage });
