import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const MarketPlacePage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Marketplace Catalog" description="Marketplace Catalog Page" />

      <Skawe.components.HeroJumbotron 
        title="Marketplace Catalog"
        description="Deploy popular applications and game servers on our high performance servers with a single click."
        whiteButton={true}
        whiteButtonText="Browse Apps"
        whiteButtonPath=""
        blackButton={true}
        blackButtonPath="/register"
      />

      <div className="section section-features bg-light">
        <Container>
          <Skawe.components.Heading
            title="Choice of Operating System"
            description="Deploy a new instance with your preferred operating system in a single click."
          />

          <Row className="center-xs">
            <Col sm={12} md={10} lg={9}>
              <Row>
                {[
                  {name: 'Cent OS', img: 'none', path: '/cent-os'},
                  {name: 'Core OS', img: 'none', path: '/core-os'},
                  {name: 'Debian', img: 'none', path: '/debian'},
                  {name: 'Fedora', img: 'none', path: '/fedora'},
                  {name: 'Free BDS', img: 'none', path: '/freebds'},
                  {name: 'Open BDS', img: 'none', path: '/openbds'},
                  {name: 'Ubuntu', img: 'none', path: '/ubuntu'},
                  {name: 'Windows', img: 'none', path: '/windows'},
                ].map((os, index) => 
                    <Col md={3} key={index}>
                      <ListGroup className="market-list mb-1">
                        <ListGroup.Item>
                          <div className="market-icon mb-1">
                            <Skawe.components.Icon name="details"/>
                          </div>
                          <h6 className="title-6">{os.name}</h6>
                          <Skawe.components.Button isLink={true} path={os.path} size="small" className="flat-link">
                            Learn More
                          </Skawe.components.Button>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  )}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section section-features" id="browseapps">
        <Container>
          <Skawe.components.Heading
            title="Choice of One Click Apps"
            description="Deploy a new instance with your preferred operating system in a single click."
          />

          <Row className="center-xs">
            <Col sm={12} md={10} lg={9}>
              <Row>
                {[
                  {name: 'Cent OS Web Panel', img: 'none', path: '/cent-os'},
                  {name: 'cPanel', img: 'none', path: '/core-os'},
                  {name: 'Plesk', img: 'none', path: '/debian'},
                  {name: 'Webmin', img: 'none', path: '/fedora'},
                  {name: 'Docker', img: 'none', path: '/freebds'},
                  {name: 'Joomla', img: 'none', path: '/openbds'},
                  {name: 'Drupal', img: 'none', path: '/ubuntu'},
                  {name: 'Magento', img: 'none', path: '/windows'},
                  {name: 'WordPress', img: 'none', path: '/windows'},
                  {name: 'PrestaShop', img: 'none', path: '/windows'},
                  {name: 'Gitlab', img: 'none', path: '/windows'},
                  {name: 'Jitsi', img: 'none', path: '/windows'},
                  {name: 'Pritunl', img: 'none', path: '/windows'},
                  {name: 'LAMP', img: 'none', path: '/windows'},
                  {name: 'LEMP', img: 'none', path: '/windows'},
                  {name: 'Media Wiki', img: 'none', path: '/windows'},
                  {name: 'Minecraft', img: 'none', path: '/windows'},
                  {name: 'Nextcloud', img: 'none', path: '/windows'},
                  {name: 'OpenLiteSpeed', img: 'none', path: '/windows'},
                  {name: 'Open VPN', img: 'none', path: '/windows'},
                  {name: 'OwnCloud', img: 'none', path: '/windows'},
                ].map((app, index) => 
                  <Col md={3} key={index}>
                    <ListGroup className="market-list mb-1">
                      <ListGroup.Item>
                        <div className="market-icon mb-1">
                          <Skawe.components.Icon name="details"/>
                        </div>
                        <h6 className="title-6">{app.name}</h6>
                        <Skawe.components.Button isLink={true} path={app.path} size="small" className="flat-link">
                          Learn More
                        </Skawe.components.Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                )}
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
