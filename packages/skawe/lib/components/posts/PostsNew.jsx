import { Components, registerComponent, withMessages } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Posts } from '../../modules/posts/index.js';

const PostsNew = (props, context) =>
  <React.Fragment>
    <Components.HeadTags title="Write a Blog" description="Write a Blog" />
    
    <Container>
      <Row>
        <Col>
          <h5 className="title-5 mb-1 breadcrumb__wrapper d-flex middle-xs">
            <Link to={{ pathname: '/admin/posts' }}>
              Blogs
            </Link>
            <span className="breadcrumb-divider">/</span>
            Write a new Blog
          </h5>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={10} lg={8}>
          <div className="new-ticket__wrapper mt-1">
            <Components.SmartForm
              collection={Posts}
              layout="vertical"
              successCallback={post => {
                props.history.push({ pathname: post.pageUrl });
                props.flash({ id: 'posts.create_success', properties: { title: post.title }, type: 'success' });
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>

// PostsNew.contextTypes = {
//   messages: PropTypes.object
// };

registerComponent({ name: 'PostsNew', component: PostsNew, hocs: [withMessages, withRouter] });
