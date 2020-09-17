import { Components, registerComponent, withMessages } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Pages } from '../../modules/pages/index.js';

const PagesNew = (props, context) =>
  <React.Fragment>
    <Components.HeadTags title="Create a new page" description="Create a new page" />
    
    <Container>
      <Row>
        <Col>
          <h5 className="title-5 mb-1 breadcrumb__wrapper d-flex middle-xs">
            <Link to={{ pathname: '/admin/pages' }}>
              Pages
            </Link>
            <span className="breadcrumb-divider">/</span>
            Create a new Page
          </h5>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={10} lg={8}>
          <div className="new-ticket__wrapper mt-1">
            <Components.SmartForm
              collection={Pages}
              layout="vertical"
              successCallback={page => {
                props.history.push({ pathname: page.pageUrl });
                props.flash({ id: 'pages.create_success', properties: { title: page.title }, type: 'success' });
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>

// PagesNew.contextTypes = {
//   messages: PropTypes.object
// };

registerComponent({ name: 'PagesNew', component: PagesNew, hocs: [withMessages, withRouter] });
