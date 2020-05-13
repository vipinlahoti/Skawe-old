import Skawe from '@skawe';
import React from 'react';
import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Domains" description="Domains Page" />

      <Jumbotron>
        <Container>
          <Row className="center-xs">
            <Col>
              <div className="hero__wrapper text-dark">
                <Skawe.components.DomainSearch title="Transfer your Domain to us." placeholder="Enter Domain to Transfer." domainLinks={false}/>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Skawe.components.MiniFooter variant="bg-sweet-purple" className="center-xs" title="Need help in Transfering your Domain?" />
      
      <div className="section">
        <Container>
          <Row>
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-6">.com</h5>
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Check Availability
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-6">.net</h5>
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Check Availability
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-6">.in</h5>
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Check Availability
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-6">.org</h5>
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Check Availability
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-6">.online</h5>
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Check Availability
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-6">.club</h5>
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Check Availability
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
