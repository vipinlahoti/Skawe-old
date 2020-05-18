import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Jumbotron, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const MarketPlacePage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Hosting" description="Web Hosting Page" />

      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h2 className="title-2">
                Marketplace Catalog
              </h2>
              <p className="lead mb-2">Deploy popular applications and game servers on our high performance servers with a single click.</p>
              <Skawe.components.Button type="link" variant="white" path="/register">
                Browse Apps
              </Skawe.components.Button>
              <Skawe.components.Button type="link" variant="black-fill" path="/register">
                Create a Free Account
              </Skawe.components.Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <div className="section section-features bg-light">
        <Container>
          <Row className="center-xs mb-3">
            <Col sm={12} md={8} lg={8}>
              <h3 className="title-3">Choice of Operating System</h3>
              <p className="lead">Deploy a new instance with your preferred operating system in a single click.</p>
            </Col>
          </Row>
          <Row className="center-xs">
            <Col sm={12} md={8} lg={8}>
              <Row>
                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Cent OS</h6>
                      <Skawe.components.Button type="link" path="/cent-os" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Core OS</h6>
                      <Skawe.components.Button type="link" path="/core-os" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Debian</h6>
                      <Skawe.components.Button type="link" path="/debian" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Fedora</h6>
                      <Skawe.components.Button type="link" path="/fedora" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Free BDS</h6>
                      <Skawe.components.Button type="link" path="/freebds" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Open BDS</h6>
                      <Skawe.components.Button type="link" path="/openbds" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Ubuntu</h6>
                      <Skawe.components.Button type="link" path="/ubuntu" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Windows</h6>
                      <Skawe.components.Button type="link" path="/windows" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>
      </div>

      <div className="section section-features">
        <Container>
          <Row className="center-xs mb-3">
            <Col sm={12} md={8} lg={8}>
              <h3 className="title-3">Choice of One Click Apps</h3>
              <p className="lead">Deploy a new instance with your preferred operating system in a single click.</p>
            </Col>
          </Row>
          <Row className="center-xs">
            <Col sm={12} md={8} lg={8}>
              <Row>
                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Cent OS Web Panel</h6>
                      <Skawe.components.Button type="link" path="/cent-os" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">cPanel</h6>
                      <Skawe.components.Button type="link" path="/core-os" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Plesk</h6>
                      <Skawe.components.Button type="link" path="/windows" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Docker</h6>
                      <Skawe.components.Button type="link" path="/debian" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Drupal</h6>
                      <Skawe.components.Button type="link" path="/fedora" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">PrestaShop</h6>
                      <Skawe.components.Button type="link" path="/fedora" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Webmin</h6>
                      <Skawe.components.Button type="link" path="/fedora" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">WordPress</h6>
                      <Skawe.components.Button type="link" path="/fedora" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Gitlab</h6>
                      <Skawe.components.Button type="link" path="/freebds" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Jitsi</h6>
                      <Skawe.components.Button type="link" path="/openbds" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Pritunl</h6>
                      <Skawe.components.Button type="link" path="/ubuntu" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Joomla</h6>
                      <Skawe.components.Button type="link" path="/windows" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">LAMP</h6>
                      <Skawe.components.Button type="link" path="/freebds" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">LEMP</h6>
                      <Skawe.components.Button type="link" path="/openbds" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Megento</h6>
                      <Skawe.components.Button type="link" path="/ubuntu" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Media Wiki</h6>
                      <Skawe.components.Button type="link" path="/windows" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Minecraft</h6>
                      <Skawe.components.Button type="link" path="/windows" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                 <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Nextcloud</h6>
                      <Skawe.components.Button type="link" path="/openbds" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">OpenLiteSpeed</h6>
                      <Skawe.components.Button type="link" path="/ubuntu" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">Open VPN</h6>
                      <Skawe.components.Button type="link" path="/windows" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <ListGroup className="market-list mb-1">
                    <ListGroup.Item>
                      <div className="market-icon mb-1">
                        <Skawe.components.Icon name="details"/>
                      </div>
                      <h6 className="title-6">OwnCloud</h6>
                      <Skawe.components.Button type="link" path="/windows" size="small" className="flat-link">
                        Learn More
                      </Skawe.components.Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

              </Row>
            </Col>
          </Row>

        </Container>
      </div>

      <Skawe.components.MiniCreateForm />
    </React.Fragment>
  )
}

Skawe.registerComponent('MarketPlacePage', MarketPlacePage);
