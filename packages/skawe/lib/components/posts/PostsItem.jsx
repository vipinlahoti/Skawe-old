import { Components, registerComponent, withCurrentUser, withMessages } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Users from 'meteor/vulcan:users';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { Col, ListGroup } from 'react-bootstrap';
import { Posts } from '../../modules/posts/index.js';

const PostsItem = ({ post, currentUser, match, history, flash }) => {
  let postClass = 'posts-item';
  if (post.sticky) postClass += ' posts-sticky';

  return (
    <Col lg={4} md={4} sm={6} xs={4}>
      <ListGroup className={postClass}>
        <ListGroup.Item className="p-0">
          {post.thumbnailUrl ? <img className="posts-thumbnail" src={post.thumbnailUrl} /> : null }

          <div className="p-2">

            <div className="badge badge-primary ml-0">
              {post.categories && post.categories.length > 0 && <Components.PostsCategories post={post} />}
            </div>

            <h5 className="title-5 blog-title mt-xs">
              <Link to={post.pagePath} className="posts-item-title-link">
                {post.title}
              </Link>
            </h5>

            <div className="d-flex middle-xs posted-at">
              {post.user ? (
                <React.Fragment>
                  <Components.UsersAvatar user={post.user} size="xsmall" />
                  <span className="ml-sm mr-xs">
                    <Components.UsersName user={post.user} link={true} />
                  </span>
                </React.Fragment>
              ) : null}

              {post.postedAt ? <small>{moment(new Date(post.postedAt)).fromNow()}</small> : <FormattedMessage id="posts.dateNotDefined" />}
            </div>
            <p className="mt-xs">{post.excerpt}</p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  );
};

PostsItem.propTypes = {
  currentUser: PropTypes.object,
  post: PropTypes.object.isRequired,
  terms: PropTypes.object,
};

registerComponent({ name: 'PostsItem', component: PostsItem, hocs: [withCurrentUser, withRouter, withMessages] });
