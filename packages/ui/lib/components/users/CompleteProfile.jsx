import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const siteTitle = Skawe.settings.get('title', 'Skawe');
const logoUrl = Skawe.settings.get('logoUrl');

const CompleteProfile = ({ document: user, currentUser, loading }) => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Accounts" description="Accounts Page" />

      <div className="section section-profile-complete">
        <Container>
          <Row className="center-xs">
            <Col sm={12} md={10} lg={8}>
              <div className="text-left">
                <Row className="mb-2">
                  <Col>
                    <Skawe.components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
                  </Col>
                  <Col>
                    <h6 className="title-6 mb-1 text-right">Complete your Profile</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Post signup form
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
};

Skawe.registerComponent('CompleteProfile', CompleteProfile);
