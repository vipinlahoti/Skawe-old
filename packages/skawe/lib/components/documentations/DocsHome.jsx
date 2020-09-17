import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import qs from 'qs';
import { Row, Col, Container } from 'react-bootstrap';
import { docsViews } from '../../modules/data.js';

const getOrderProperty = currentRoute => {
  const docsView = docsViews.find(({ name }) => name === currentRoute.name);
  return docsView && docsView.sort;
};

const DocsHome = ({ currentRoute, location = {} }) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true }) || {};
  const { search } = query;

  return (
    <React.Fragment>
      <Components.HeadTags title="Documentation" description="Documentation Page" />

      <Components.HeroJumbotron 
        eyebrow="Documentation"
        title="Guides and documentation."
        blackButton="Create Account"
        blackButtonPath="/accounts/dashboard"
      />

      <div className="section">
        <Container>
          <Row>
            <Col md={3}>
              <Components.CategoriesMenu />
            </Col>
            <Col md={9}>
              <Components.DocsList input={{ search, sort: { [getOrderProperty(currentRoute)]: 'desc' } }} />
            </Col>
          </Row>
        </Container>
      </div>

      <Components.GetStarted />
    </React.Fragment>
  )
};

registerComponent({ name: 'DocsHome', component: DocsHome });
