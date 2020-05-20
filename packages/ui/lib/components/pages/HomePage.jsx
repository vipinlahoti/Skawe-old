import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Home" description="Home description" />

      <Skawe.components.HeroJumbotron 
        title="An agile suite that’s designed for"
        description="Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world."
        form={true}
      />

      <Skawe.components.MiniFooter
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
                description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                salePrice: '₹99/mo',
                listPrice: '₹299/mo',
                path: '/cloud-instance'
              },
              {
                title: 'Object Storage',
                description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                salePrice: '₹99/mo',
                listPrice: '₹299/mo',
                path: '/object-storage'
              },
              {
                title: 'Block Storage',
                description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                salePrice: '₹99/mo',
                listPrice: '₹299/mo',
                path: '/block-storage'
              },
              {
                title: 'Load Balancers',
                description: 'Powerful compute instances with Intel CPUs and 100% SSD storage.',
                salePrice: '₹99/mo',
                listPrice: '₹299/mo',
                path: '/load-balancers'
              },
            ].map((instances, index) => 
              <Skawe.components.CloudCard
                key={index}
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

      <div className="section section-features">
        <Container>
          <Skawe.components.Heading
            title="Excepteur sint occaecat cupidatat."
            description="Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world."
          />

          <Skawe.components.TabsContainer />
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

              <Skawe.components.Button variant="primary" type="link" path="/features/control-panel">
                Control Panel Features
              </Skawe.components.Button>
            </Col>

            <Col sm={12} md={7} lg={7}>
              <img className="w-100" src="/images/control-panel.png" alt="control panel"/>
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

      <Skawe.components.MiniCreateForm />

    </React.Fragment>
  )
}

Skawe.registerComponent('HomePage', HomePage);
