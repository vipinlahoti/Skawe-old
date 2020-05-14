import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

const DomainPage = ({domainList}) =>

  <React.Fragment>
    <Skawe.components.MiniFooter variant="bg-sweet-purple" className="center-xs" title="Each and every domain name comes with all you need to get online." />
    
    <div className="section">
      <Container>
        {domainList ? domainList.map((domainList, index) => 
        <Row key={index}>
          {domainList.Products ? domainList.Products.map((domain, index) => 
          <Col md={3} key={index}>
            <ListGroup>
              <ListGroup.Item>
                <img className="domain-icons" src={`${domain.Tld}.png`} alt={domain.Tld} />
                <p className="mb-0">Starting at</p>
                <span className="title-5 mr-1">{domain.PriceInfo.CurrentPriceDisplay}</span>
                <span className="title-5 list-price">{domain.PriceInfo.ListPriceDisplay}</span>
                <Skawe.components.Button type="link" path="/domains" size="small">
                  Learn More
                </Skawe.components.Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          ) : null }
        </Row>
        ) :null }
      </Container>
    </div>

    <div className="section bg-gray">
      <Container>
        <Row className="center-xs mb-2">
          <Col sm={12} md={8} lg={8}>
            <h3 className="title-3">What all you get with every Domain Name?</h3>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon card-icon-lg">
                  <Skawe.components.Icon name="fast_forward"/>
                </div>
                <Card.Title>Domain Forwarding and Masking</Card.Title>
                <Card.Text>
                  Direct any domain name you own to your website. Anyone who types that domain name into their browser is taken directly to your website.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon card-icon-lg">
                  <Skawe.components.Icon name="lock_outline"/>
                </div>
                <Card.Title>Domain Locking</Card.Title>
                <Card.Text>
                  Domain locking prevents accidental or intentional transfers of domain ownership and stops anyone from redirecting your nameservers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon card-icon-lg">
                  <Skawe.components.Icon name="accessibility"/>
                </div>
                <Card.Title>Total DNS Control</Card.Title>
                <Card.Text>
                  Manage your domain nameserver (DNS) records and set your email, FTP, sub-domains and website location all from one control panel.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon card-icon-lg">
                  <Skawe.components.Icon name="subdirectory_arrow_right"/>
                </div>
                <Card.Title>Change of Registration</Card.Title>
                <Card.Text>
                  Assign your domain name to someone else or change the contacts for your domain online anytime.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon card-icon-lg">
                  <Skawe.components.Icon name="snooze"/>
                </div>
                <Card.Title>Status Alerts</Card.Title>
                <Card.Text>
                  Monitor the status of your domain and get instant alerts if there’s been a change.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon card-icon-lg">
                  <Skawe.components.Icon name="update"/>
                </div>
                <Card.Title>Auto Renew Protection</Card.Title>
                <Card.Text>
                  No need to watch expiration dates to make sure you renew on time! Keep your domains, hosting, website builders, and other products in your name and under your control.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </div>

    <div className="section">
      <Container>
        {domainList ? domainList.map((domainList, index) => 
        <Row key={index}>
          {domainList.Products ? domainList.Products.map((domain, index) => 
          <Col md={3} key={index}>
            <ListGroup>
              <ListGroup.Item>
                <img className="domain-icons" src={`${domain.Tld}.png`} alt={domain.Tld} />
                <p className="mb-0">Starting at</p>
                <span className="title-5 mr-1">{domain.PriceInfo.CurrentPriceDisplay}</span>
                <span className="title-5 list-price">{domain.PriceInfo.ListPriceDisplay}</span>
                <Skawe.components.Button type="link" path="/domains" size="small">
                  Learn More
                </Skawe.components.Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          ) : null }
        </Row>
        ) :null }
      </Container>
    </div>

    <div className="section-small pt-0">
      <Container>
        <Row>
          <Col>
            <ul className="disclaimers">
              <li>Special savings apply only to first year of registration. You must purchase entire section to qualify for special savings.</li>
              <li>The final price may differ because of additional sales, fees, and promotions.</li>
              <li>Products will automatically renew until cancelled. You may turn off the auto-renewal feature by visiting your account.</li>
              <li>Change of registration may require a fee for certain domains.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Skawe.registerComponent('DomainPage', DomainPage);
