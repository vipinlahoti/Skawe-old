import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Jumbotron, Container, Row, Col, Form, Card, Tab, Nav } from 'react-bootstrap';

const HomePage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Home" description="Home description" />

      <Jumbotron>
        <Container>
          <Row>
            <Col sm={12} md={10} lg={7}>
              <h2 className="title-2">An agile suite that’s designed for</h2>
              <p className="lead">Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world.</p>
            </Col>  
            <Col sm={12} md={10}>
              <div className="mt-2">
                <Skawe.components.CreateAccount type="inline" />
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Skawe.components.MiniFooter
        variant="bg-dark"
        className="center-xs"
        title="Get started with Skáwe and find everything that you need to get online."
      />

      <div className="section bg-light">
        <Container>
          <Row>
            <Skawe.components.CloudCard
              title="Cloud Instance"
              description="Powerful compute instances with Intel CPUs and 100% SSD storage."
              salePrice="₹99/mo"
              listPrice="₹299/mo"
              path="/hosting"
            />
            <Skawe.components.CloudCard
              title="Object Storage"
              description="Powerful compute instances with Intel CPUs and 100% SSD storage."
              salePrice="₹99/mo"
              listPrice="₹299/mo"
              path="/hosting"
            />
            <Skawe.components.CloudCard
              title="Block Storage"
              description="Powerful compute instances with Intel CPUs and 100% SSD storage."
              salePrice="₹99/mo"
              listPrice="₹299/mo"
              path="/hosting"
            />
            <Skawe.components.CloudCard
              title="Load Balancers"
              description="Powerful compute instances with Intel CPUs and 100% SSD storage."
              salePrice="₹99/mo"
              listPrice="₹299/mo"
              path="/hosting"
            />
          </Row>
        </Container>
      </div>

      <div className="section section-features">
        <Container>
          <Row className="center-xs mb-4">
            <Col sm={12} md={8} lg={8}>
              <h3 className="display-3">Excepteur sint occaecat cupidatat.</h3>
              <p className="lead">Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world.</p>
            </Col>
          </Row>

          <Row className="center-xs">
            <Col sm={12} md={10}>
              <Skawe.components.TabsContainer />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section bg-light">
        <Container>
          <Row className="middle-xs">
            <Col sm={12} md={5} lg={5}>
              <h4 className="display-3"><span className="d-block lead">Powerfull Control Panel</span> for better experience.</h4>
              <p className="lead">Spend more time coding and less time managing your infrastructure.</p>
              <ul className="list">
                <li>One-Click deployment</li>
                <li>Easy Management</li>
              </ul>
              <Skawe.components.Button variant="primary" type="link" path="/">
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
          <Row className="center-xs mb-2">
            <Col sm={12} md={8} lg={8}>
              <h3 className="display-3">Deploy the server anywhere around the world</h3>
              <p className="lead">Worldwide locations and the local presence you need.</p>
            </Col>
          </Row>

          <Row className="center-xs">
            <Col sm={12} md={10} lg={8}>
              <div className="section-locations">
                <Row>
                  <Col>
                    <ul className="list-detail">
                      <li>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                      <li>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                      <li>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                      <li>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                      <li>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="list-detail">
                      <li>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                      <li>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                      <li>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                      <li>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                      <li>
                        <span className="mr-3 location-code">AMS2</span>
                        <span className="mr-3 location-description">Amsterdam, Netherlands</span>
                        <span className=""><a>Speed Test</a></span>
                      </li>
                    </ul>
                  </Col>
                </Row>
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
