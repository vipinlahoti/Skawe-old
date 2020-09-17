import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import get from 'lodash/get';
import { Row, Col, Container } from 'react-bootstrap';

const DocsCategory = ({ match }) => {
  const slug = get(match, 'params.slug');
  const input = { filter: { _byCategory: { slug } } };
  
  return (
    <React.Fragment>
      <Components.HeadTags title={slug} description={slug} />

      <Components.HeroJumbotron 
        title={slug}
        description=""
      />

      <div className="section">
        <Container>
          <Row>
            <Col md={3}>
              <Components.CategoriesMenu />
            </Col>
            <Col md={9}>
              <Components.DocsList input={input} />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
};

DocsCategory.displayName = 'DocsCategory';

registerComponent({ name: 'DocsCategory', component: DocsCategory });
