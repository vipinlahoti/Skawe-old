import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

const DomainSearchResults = ({domainList}) =>
  
  <React.Fragment>
    
    <div className="section-small">
      <Container>
        {domainList ?
          domainList.map((domain, index) => 
            <Row className="center-xs" key={index}>
              <Col md={8}>

              {domain.exactMatchDomain ?
                (
                  <Card className="text-left list-featured-group">
                    <Card.Title className="bg-primary text-white">
                      <span>Domain {domain.exactMatchDomain.available ? 'Available' : 'Taken' }</span>
                      <span>Call 1-800-1210120 for buying assistance</span>
                    </Card.Title>
                    <Card.Body>
                      <Card.Text>
                        {domain.exactMatchDomain.domain}
                        {domain.exactMatchDomain.available
                          ? (<small className="block">is <span className="text-success">Available</span></small>)
                          : (<small className="block">is <span className="text-danger">Unavailable</span></small>)
                        }
                      </Card.Text>
                      <div className="list-featured-group-description">
                        {domain.exactMatchDomain.available
                          ? 
                            (
                              <div className="mt-1 text-right">
                                <span className="title-5 mr-1 sale-price">{domain.exactMatchDomain.salePrice}</span>
                                <span className="title-5 mr-2 list-price">{domain.exactMatchDomain.listPrice}</span>
                                <Skawe.components.CartButton type="domain" id="domain" domain={domain.exactMatchDomain.domain} skipCrossSell={true} />
                              </div>
                            )
                          : 
                            (
                              <ul className="disclaimers">
                                <li>Find alternate names below.</li>
                                <li>Get help from one of our Agents.</li>
                              </ul>
                            )
                          }
                      </div>
                    </Card.Body>
                  </Card>
                ) : null }

                {domain.suggestedDomains ?
                  domain.suggestedDomains.map((sDomains, index) => 
                    <ListGroup horizontal key={index}>
                      <ListGroup.Item>
                        <p className="title-5">{sDomains.domain}</p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span className="title-5 mb-0 mr-1 sale-price">{sDomains.salePrice}</span>
                        <span className="title-5 mb-0 mr-2 list-price">{sDomains.listPrice}</span>
                        <Skawe.components.CartButton type="domain" id="domain" domain={sDomains.salePrice.domain} skipCrossSell={true} />
                      </ListGroup.Item>
                    </ListGroup>
                    ) : null }

              </Col>
            </Row>
          ) : null }
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
