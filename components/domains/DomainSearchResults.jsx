import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

const DomainSearchResults = () =>

  <React.Fragment>
    <Skawe.components.MiniFooter variant="bg-sweet-purple" className="center-xs" title="Each and every domain name comes with all you need to get online." />
    
    <div className="section-small">
      <Container>
        <Row className="center-xs">
          <Col md={8}>
            <Card className="text-left list-featured-group">
              <Card.Title className="bg-primary text-white">
                <span>Domain Taken</span>
                <span>Call 1-800-1210120 for buying assistance</span>
              </Card.Title>
              <Card.Body>
                <Card.Text>
                  helloworld<span className="text-primary">.com</span>
                  <small class="block">is <span className="text-danger">Unavailable</span></small>
                  <small class="block">is <span className="text-success">Available</span></small>
                </Card.Text>
                <div className="list-featured-group-description">
                  <ul className="disclaimers">
                    <li>Find alternate names below.</li>
                    <li>Get help from one of our Agents.</li>
                  </ul>

                  <div className="mt-1 text-right">
                    <span className="title-5 mr-2">₹ 99</span>
                    <Skawe.components.Button variant="secondary" size="small">
                      Add to Cart
                    </Skawe.components.Button>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <ListGroup horizontal>
              <ListGroup.Item>
                <p className="title-5">helloworld<span className="text-primary">.com</span></p>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="title-5 mr-3">₹ 99</div>
                <Skawe.components.Button variant="secondary" size="small">
                  Add to Cart
                </Skawe.components.Button>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
              <ListGroup.Item>
                <p className="title-5">helloworld<span className="text-primary">.in</span></p>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="title-5 mr-3">₹ 99</div>
                <Skawe.components.Button variant="secondary" size="small">
                  Add to Cart
                </Skawe.components.Button>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
              <ListGroup.Item>
                <p className="title-5">helloworld<span className="text-primary">.org</span></p>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="title-5 mr-3">₹ 99</div>
                <Skawe.components.Button variant="secondary" size="small">
                  Add to Cart
                </Skawe.components.Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="section-small pt-0">
      <Container>
        <Row className="center-xs">
          <Col md={8}>
            <ul className="disclaimers text-left">
              <li>Plus ICANN fee of ₹ 13.68 per domain per year. Sale pricing for new domain registrations only, not for renewals or transfers.</li>
              <li>Products will automatically renew until cancelled. You may turn off the auto-renewal feature by visiting your account.</li>
              <li>Domains with bulk pricing do not qualify for additional promotional discounts.</li>
              <li>.CA domain names will be registered through Wild West Domains Canada, Inc., a CIRA certified registrar.</li>
              <li>.CO.UK, .ORG.UK, .ME.UK, .EU, .ES, .SE, .COM.AU, .NET.AU and .ORG.AU domains not included.</li>
              <li>Discount based on current retail value.</li>
              <li>com.au, net.au, and org.au domain names will automatically renew until cancelled. You may turn off the auto-renewal feature by visiting your account.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>

  </React.Fragment>

Skawe.registerComponent('DomainSearchResults', DomainSearchResults);
