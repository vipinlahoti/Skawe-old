import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

const DomainSearchResults = ({domainList, exactList, bundleList}) =>
  
  <React.Fragment>
    
    <div className="section-small">
      <Container>
        <Row className="center-xs">
          <Col md={8}>
            {exactList ? exactList.map((domain, index) => 
              <Card className="text-left mb-2 list-featured-group" key={index}>
                <Card.Title className="bg-primary text-white">
                  <span>Domain {domain.ExactMatchDomain.IsAvailable ? 'Available' : 'Taken' }</span>
                  {domain.SupportPhone ? <span>Call {domain.SupportPhone} for buying assistance</span> : '' }
                </Card.Title>
                <Card.Body>
                  <Card.Text>
                    {domain.ExactMatchDomain.Fqdn}
                    {domain.ExactMatchDomain.IsPurchasable
                      ? (<small className="ml-sm">is available</small>)
                      : (<small className="ml-sm">is <span className="text-danger">unavailable</span></small>)
                    }
                    <br />
                    <span className="mt-1 text-right">
                      <span className="title-5 mr-1 sale-price">{domain.CurrentPriceDisplay}</span>
                      {domain.Products.map((price, index) =>
                        <span className="title-5 mr-2 list-price" key={index}>{price.PriceInfo.ListPriceDisplay}</span>
                      )}
                    </span>
                    <br />
                    {domain.Products.map((price, index) =>
                      <small className="font-xsmall font-weight-normal" key={index}>{price.PriceInfo.AdditionalYearsPriceDisplay ? 'for the first year with a 2 year registration' : null}</small>
                    )}
                  </Card.Text>
                  
                  <div className="list-featured-group-description">
                    <ul className="disclaimers">
                    {domain.ExactMatchDomain.Valuation.Reasons ?
                      domain.ExactMatchDomain.Valuation.Reasons.map((reason, index) =>
                      <li key={index}>{reason.Sld || reason.Domain} - {reason.Text}.</li>
                    ) : null}
                    </ul>
                    <div className="mt-1 text-right">
                      <Skawe.components.CartButton variant="black" type="domain" id="domain" domain={domain.ExactMatchDomain.Fqdn} skipCrossSell={false} />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ) : null }

            {bundleList ? bundleList.map((domain, index) => 
              <ListGroup className="mb-2 bg-sweet-yellow" horizontal key={index}>
                <ListGroup.Item>
                  <div className="text-left">
                    <p className="title-5 mb-1">Buy {domain.DotTypesText.split(',').length} and save {domain.SavingsText}</p>
                    {domain.DotTypesText.split(',').map((list, index) => 
                      <span className="title-6 d-block" key={index}>{list}</span>
                    )}
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="text-left">
                    <span className="title-5 mb-0 mr-1 sale-price">{domain.Prices.CurrentPrice}</span>
                    <span className="title-5 mb-0 mr-2 list-price">{domain.Prices.ListPrice}</span>
                    <small className="d-block">for the first year</small>
                  </div>
                  <Skawe.components.CartButton variant="black" type="domain" id="domain" domain={domain.DotTypesText} skipCrossSell={true} />
                </ListGroup.Item>
              </ListGroup>
            ) : null }
          </Col>
        </Row>

        {domainList ? domainList.map((domain, index) => 
          <React.Fragment key={index}>
            <Row className="center-xs" key={index}>
              <Col md={8}>
                {domain.suggestedDomains ? domain.suggestedDomains.map((sDomains, index) => 
                  <ListGroup horizontal key={index}>
                    <ListGroup.Item>
                      <p className="title-5 text-left">{sDomains.domain} 
                      <span className="font-xsmall text-primary d-block">{sDomains.disclaimer}</span></p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="title-5 mb-0 mr-1 sale-price">{sDomains.salePrice}</span>
                      <span className="title-5 mb-0 mr-2 list-price">{sDomains.listPrice}</span>
                      <Skawe.components.CartButton variant="secondary" type="domain" id="domain" domain={sDomains.domain} skipCrossSell={true} />
                    </ListGroup.Item>
                  </ListGroup>
                ) : null }
              </Col>
              <Col md={8}>
                <small className="d-block text-left mt-xs">{domain.disclaimer}</small>
              </Col>
            </Row>
          </React.Fragment>
        ) : null }
      </Container>
    </div>

    <div className="section-small pt-0">
      <Container>
        <Row className="center-xs">
          <Col md={8}>
            <ul className="disclaimers text-left">
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
