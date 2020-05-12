import Skawe from '@skawe';
import React, { Component } from 'react';
import fetch from 'node-fetch';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

class UniversalTOS extends Component {

  render() {
    return (
      <Skawe.components.Layout>
        <Skawe.components.HeadTags title="Universal Terms of Services" description="Universal Terms of Services Page" />
        <Skawe.components.InnerBanner title="Universal Terms of Service Agreement" />

       <div className="section">
         <Container>
           <Row className="center-xs">
             <Col sm={12}>
              <Skawe.components.TosLayout pageId="utos" />
             </Col>
           </Row>
         </Container>
       </div>
     </Skawe.components.Layout>
    )
  }
}

export default UniversalTOS
