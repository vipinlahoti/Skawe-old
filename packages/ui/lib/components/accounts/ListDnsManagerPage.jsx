import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const ListDnsManagerPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Dashboard" description="Dashboard Page" />
      
      <div className="section">
        <Row className="center-xs middle-xs">
          <Col sm={12} md={6}>
            <Card>
              <Card.Body>
                <div className="card-icon card-icon-lg rounded-circle text-white">
                  <Skawe.components.Icon name="public" />
                </div>
                <Card.Title>Manage your Domains</Card.Title>
                <Card.Text>Choose a plan, select an image, and deploy within minutes. Need help getting started?</Card.Text>
                
                <div className="center-xs d-flex">
                  <Skawe.components.ModalTrigger title="Add a New Domain" component={
                    <Skawe.components.Button variant="primary" className="mr-1">
                      Add a Domain
                    </Skawe.components.Button>
                  }>
                    <Skawe.components.AddDomain />
                  </Skawe.components.ModalTrigger>

                  <Skawe.components.ModalTrigger title="Import a Zone" component={
                    <Skawe.components.Button variant="black-fill">
                      Import a Zone
                    </Skawe.components.Button>
                  }>
                    <Skawe.components.ImportDomainZone />
                  </Skawe.components.ModalTrigger>

                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

    </React.Fragment>
  )
}

Skawe.registerComponent('ListDnsManagerPage', ListDnsManagerPage);
