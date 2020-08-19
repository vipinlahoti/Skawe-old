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
        title="Blogs"
        description="Find an app that suits you, then spin it up in 60 seconds or less. 100+ preconfigured 1-Click Apps are available including WordPress, LAMP, Docker, Plesk, and more."
        blackButton="Create an Account"
        blackButtonPath="/register"
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
    </React.Fragment>
  )
};

registerComponent({ name: 'PostsHome', component: PostsHome });
