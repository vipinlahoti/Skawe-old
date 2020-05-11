import Skawe from '@skawe';
import React from 'react';
import { Jumbotron, Container, Row, Col, Form, Button } from 'react-bootstrap';

export default () => {
  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Domains" description="Domains Page" />

      <div className="section">
        <Container>
          <Row className="center-xs">
            <div className="text-left">
              <h3 className="title-3">
                Get a Domain Name
              </h3>
              <p className="lead">With Privacy Protection and lots more.</p>
              
              <Form className="domain-search">
                <Form.Control type="text" placeholder="Find your Perfect Domain Name." />
                
                <Button type="submit" variant="black-fill">
                  <Skawe.components.Icon name="search" />
                </Button>
              </Form>
            </div>  
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}
