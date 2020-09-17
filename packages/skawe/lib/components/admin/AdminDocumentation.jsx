/*
 * Show a list of all Documents
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
import { Documentations } from '../../modules/documentations/collection.js';

const Title = ({ document: documentation }) => (
  <Link to={documentation.pagePath}>
    {documentation.title}
  </Link>
);

const Categories = ({ document: documentation }) =>
  <React.Fragment>
    {documentation.categories && documentation.categories.map((category, index) => 
      <React.Fragment key={category._id}>
        {category.name}
      </React.Fragment>
    )}
  </React.Fragment>

const Status = ({ document: documentation }) => (
  <span className={`status-indicator status-indicator-${statusesReverse[documentation.status]}`}>
    {statusesReverse[documentation.status]}
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

const AdminDocumentations = () => (
  <div className="admin-posts">
    <Components.HeadTags title="Documentations" description="Documentations Page" />

    <Container>
      <Row>
        <Col>
          <h5 className="title-5 mb-1 breadcrumb__wrapper">
            Documentations
          </h5>
        </Col>
        <Col>
          <div className="text-right">
            <Components.Button variant="primary" path="/accounts/docs/new" isLink={true}>
              New Doc
            </Components.Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="instances__list">
            <Components.Datatable
              collection={Documentations}
              columns={[
                { name: 'postedAt' },
                { name: 'createdAt' },
                { name: 'title', component: Title },
                { name: 'resourcesIds', label: 'Categories', filterable: true, component: Categories },
                { name: 'userId', label: 'User' },
                { name: 'status', filterable: true, component: Status },
              ]}
              rowClass={documentation => `documentation-item documentation-item-status-${statusesReverse[documentation.status]}`}
              options={{
                fragmentName: 'DocumentationItem',
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
  groups: ['admins', 'content-writer'],
  redirect: '/',
  message: 'Sorry, you do not have the rights to access this page.',
};

registerComponent('AdminDocumentations', AdminDocumentations, [withAccess, accessOptions]);

export default AdminDocumentations;
