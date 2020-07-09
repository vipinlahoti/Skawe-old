import Skawe from 'meteor/skawe:lib';
import { Distributions } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const MarketPlacePage = ({distributionsList}) => {
  console.log(distributionsList)
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
                {distributionsList.map((os, index) => 
                    <Col md={3} key={index}>
                      <ListGroup className="market-list mb-1">
                        <ListGroup.Item>
                          <div className="market-icon mb-1">
                            <img src={os.image} alt={os.category} />
                          </div>
                          <h6 className="title-6">{os.label}</h6>
                          <Skawe.components.Button isLink={true} path={os.image} size="small" variant="primary-link">
                            Learn More
                            <Skawe.components.Icon name="arrow_forward" />
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
                {distributionsList.map((os, index) => 
                    <Col md={3} key={index}>
                      <ListGroup className="market-list mb-1">
                        <ListGroup.Item>
                          <div className="market-icon mb-1">
                            <img src={os.image} alt={os.category} />
                          </div>
                          <h6 className="title-6">{os.label}</h6>
                          <Skawe.components.Button isLink={true} path={os.image} size="small" variant="primary-link">
                            Learn More
                            <Skawe.components.Icon name="arrow_forward" />
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

const MarketPlacePageContainer = withTracker(() => {
  Meteor.subscribe('distributions.list');;

  return {
    distributionsList: Distributions.find().fetch(),
  };
})(MarketPlacePage);

Skawe.registerComponent('MarketPlacePage', MarketPlacePageContainer);
