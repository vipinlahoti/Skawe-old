import Grudr from 'meteor/grudr:lib';
import React from 'react';
import { Jumbotron, Container, Row, Col, Form, Card, Tab, Nav } from 'react-bootstrap';

const HomePage = () => {
  return (
    <React.Fragment>
      <Grudr.components.HeadTags title="Home" description="Home description" />

      <Jumbotron>
        <Container>
          <Row>
            <Col sm={12} md={10} lg={7}>
              <h3 className="title-3">An agile suite that’s designed for change.</h3>
              <p className="lead">Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world.</p>
            </Col>  
            <Col sm={12} md={10}>
              <div className="mt-2">
                <Form inline>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" autoComplete="off" required />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" autoComplete="off" required />
                  </Form.Group>
                  <Grudr.components.Button variant="black-fill" type="submit">
                    Create an Account
                  </Grudr.components.Button>
                </Form>
                
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Grudr.components.MiniFooter
        variant="bg-dark"
        className="center-xs"
        title="Get started with Skawe and find everything that you need to get online."
      />

      <div className="section bg-light">
        <Container>
          <Row>
            <Grudr.components.CloudCard
              title="Cloud Instance"
              description="Powerful compute instances with Intel CPUs and 100% SSD storage."
              salePrice="₹99/mo"
              listPrice="₹299/mo"
              path="/hosting"
            />
            <Grudr.components.CloudCard
              title="Block Storage"
              description="Powerful compute instances with Intel CPUs and 100% SSD storage."
              salePrice="₹99/mo"
              listPrice="₹299/mo"
              path="/hosting"
            />
            <Grudr.components.CloudCard
              title="Dedicated Cloud"
              description="Powerful compute instances with Intel CPUs and 100% SSD storage."
              salePrice="₹99/mo"
              listPrice="₹299/mo"
              path="/hosting"
            />
            <Grudr.components.CloudCard
              title="Load Balancers"
              description="Powerful compute instances with Intel CPUs and 100% SSD storage."
              salePrice="₹99/mo"
              listPrice="₹299/mo"
              path="/hosting"
            />
          </Row>
        </Container>
      </div>

      <div className="section">
        <Container>
          <Row className="center-xs mb-4">
            <Col sm={12} md={8} lg={8}>
              <h3 className="display-3">Deploy the server anywhere around the world</h3>
              <p className="lead">Worldwide locations and the local presence you need.</p>
            </Col>
          </Row>

          <Row className="center-xs">
            <Col sm={12} md={10} lg={8}>
              <div className="section-locations">

              </div>
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
              <Grudr.components.Button variant="primary" type="link" path="/">
                Control Panel Features
              </Grudr.components.Button>
            </Col>

            <Col sm={12} md={7} lg={7}>
              <img className="w-100" src="/images/control-panel.png" alt="control panel"/>
            </Col>
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
            <Col sm={12} md={10} lg={8}>
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
                    Deplor content
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    Scale content
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    Store content
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </div>

    </React.Fragment>
  )
}

Grudr.registerComponent('HomePage', HomePage);
