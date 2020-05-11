import Skawe from '@skawe';
import React from 'react';
import { Jumbotron, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Domains" description="Domains Page" />

      <Jumbotron>
        <Container>
          <Row className="center-xs">
            <Col>
              <div className="hero__wrapper text-dark">
                <Skawe.components.DomainSearch title="Get a Domain Name" placeholder="Find your Perfect Domain Name."/>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Skawe.components.MiniFooter variant="bg-sweet-purple" className="center-xs" title="Each and every domain name comes with all you need to get online." />
      
      <div className="section">
        <Container>
          <Row>
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="com.png" alt="com" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="net.png" alt="net" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="in.png" alt="in" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="org.png" alt="org" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="online.png" alt="online" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="club.png" alt="club" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="asia.png" alt="asia" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="party.png" alt="party" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

          </Row>
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
          <Row>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="xyz.png" alt="xyz" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="shop.png" alt="shop" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="cloud.png" alt="cloud" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="health.png" alt="health" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="store.png" alt="store" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="deals.png" alt="deals" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="blog.png" alt="blog" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <img className="domain-icons" src="dating.png" alt="dating" />
                  <p className="mb-0">Starting at</p>
                  <p className="title-5">₹ 99</p>
                  <Skawe.components.Button type="link" path="/domains" size="small">
                    Learn More
                  </Skawe.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            
          </Row>
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
    </Skawe.components.Layout>
  )
}
