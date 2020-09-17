import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import qs from 'qs';
import { Row, Col, Container } from 'react-bootstrap';
import { postViews } from '../../modules/data.js';

const getOrderProperty = currentRoute => {
  const postView = postViews.find(({ name }) => name === currentRoute.name);
  return postView && postView.sort;
};

const PostsHome = ({ currentRoute, location = {} }) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true }) || {};
  const { search } = query;

  return (
    <React.Fragment>
      <Components.HeadTags title="Blogs" description="Contact Sales Page" />

      <Components.HeroJumbotron 
        eyebrow="Blogs"
        title="What’s new at WiredLynk?"
        blackButton="Create Account"
        blackButtonPath="/accounts/dashboard"
      />

      <div className="section">
        <Container>
          <Row>
            <Col>
              <Components.PostsList input={{ search, sort: { [getOrderProperty(currentRoute)]: 'desc' } }} />
            </Col>
          </Row>
        </Container>
      </div>

      <Components.GetStarted />
    </React.Fragment>
  )
};

registerComponent({ name: 'PostsHome', component: PostsHome });
