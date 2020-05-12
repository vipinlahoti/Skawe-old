import Skawe from '@skawe';
import React from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';
import fetch from 'node-fetch';

function UniversalTOS({UniversalTOSData}) {

  return (
    <Skawe.components.Layout>
      <Skawe.components.HeadTags title="Universal Terms of Services" description="Universal Terms of Services Page" />

      <Jumbotron className="section-hero-small">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <div className="hero__wrapper">
                <div className="title-4 mb-0">
                  Universal Terms of Service Agreement
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <div className="section">
        <Container>
          <Row className="center-xs">
            <Col sm={12}>
              {UniversalTOSData.map((item, index) => <Skawe.components.TextData key={index} siteData={item} />)}
            </Col>
          </Row>
        </Container>
      </div>
    </Skawe.components.Layout>
  )
}

UniversalTOS.getInitialProps = async ctx => {
  const setTosData = [];
  const getTosRes = await fetch('https://www.secureserver.net/api/v1/agreements/561121/utos?marketId=en-IN');
  
  if (getTosRes.ok) {
    const json = await getTosRes.json()
    setTosData.push(json.body)
    return { UniversalTOSData: setTosData }
  }
  return false;
}

export default UniversalTOS;
