/*
 * Show a list of all bookings
 * http://docs.vulcanjs.org/core-components.html#Datatable
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent, withAccess } from 'meteor/vulcan:core';
import moment from 'moment';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { statusesReverse } from '../../modules/data.js';
import { Posts } from '../../modules/posts/collection.js';

const PostToken = ({ document: post }) => <Link to={post.pagePath}>{post.title}</Link>;
registerComponent({ name: 'PostToken', component: PostToken });

const CategoryToken = ({ document: category }) => (
  <Link className="posts-category category-item" key={category._id} to={category.pagePath}>
    {category.name}
  </Link>
);
registerComponent({ name: 'CategoryToken', component: CategoryToken });

const Title = ({ document: post }) => (
  <div>
    <div>
      <Link to={post.pagePath}>
        {post.title}
      </Link>
    </div>
    {post.domain && <span>
      <span className="post-domain">{post.domain}</span>
    </span>}
  </div>
);

const Categories = ({ document: post }) =>
  <React.Fragment>
    {post.categories && post.categories.map((category, index) => 
      <React.Fragment key={category._id}>
        {category.name}
      </React.Fragment>
    )}
  </React.Fragment>

const Status = ({ document: post }) => (
  <span className={`status-indicator status-indicator-${statusesReverse[post.status]}`}>
    {statusesReverse[post.status]}
  </span>
);

const CardItemDate = ({ value }) => {
  const m = moment(new Date(value));
  return (
    <div className="contents-date">
      <div>
        <span className="date-year">{m.format('YYYY')}</span>
        <span className="date-month">{m.format('MM')}</span>
        <span className="date-day">{m.format('DD')}</span>
      </div>
      <div>
        <span className="date-time">{m.format('hh:mm')}</span>
      </div>
    </div>
  );
};

const AdminPosts = () => (
  <div className="admin-posts">
    <Components.HeadTags title="Posts" description="Posts Page" />

    <Container>
      <Row>
        <Col>
          <h5 className="title-5 mb-1 breadcrumb__wrapper">
            Blogs
          </h5>
        </Col>
        <Col>
          <div className="text-right">
            <Components.Button variant="primary" path="/accounts/blog/new" isLink={true}>
              New Blog
            </Components.Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="instances__list">
            <Components.Datatable
              collection={Posts}
              columns={[
                { name: 'postedAt' },
                { name: 'title', component: Title },
                { name: 'categoriesIds', label: 'Categories', filterable: true, component: Categories },
                { name: 'userId', label: 'User' },
                { name: 'status', filterable: true, component: Status },
              ]}
              rowClass={post => `post-item post-item-status-${statusesReverse[post.status]}`}
              options={{
                fragmentName: 'PostItem',
              }}
              showNew={false}
              showEdit={true}
              newFormProps={{
                label: <FormattedMessage id="posts.new_post" />,
              }}
              // editFormProps={{
              //   addFields: ['clickCount'],
              // }}
              components={{
                CardItemDate,
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

const accessOptions = {
  groups: ['admins', 'blogger', 'content-writer'],
  redirect: '/',
  message: 'Sorry, you do not have the rights to access this page.',
};

registerComponent('AdminPosts', AdminPosts, [withAccess, accessOptions]);

export default AdminPosts;
