import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import get from 'lodash/get';
import { Row, Col, Container } from 'react-bootstrap';

const PostsCategory = ({ match }) => {
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
            <Col>
              <Components.PostsList input={input} />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
};

PostsCategory.displayName = 'PostsCategory';

registerComponent({ name: 'PostsCategory', component: PostsCategory });
