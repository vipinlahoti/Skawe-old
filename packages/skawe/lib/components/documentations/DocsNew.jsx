import { Components, registerComponent, withMessages } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Documentations } from '../../modules/documentations/index.js';

const DocsNew = (props, context) =>
  <React.Fragment>
    <Components.HeadTags title="Write a Document" description="Write a Document" />
    
    <Container>
      <Row>
        <Col>
          <h5 className="title-5 mb-1 breadcrumb__wrapper d-flex middle-xs">
            <Link to={{ pathname: '/admin/docs' }}>
              Documentation
            </Link>
            <span className="breadcrumb-divider">/</span>
            Write a new Document
          </h5>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={10} lg={8}>
          <div className="new-ticket__wrapper mt-1">
            <Components.SmartForm
              collection={Documentations}
              layout="vertical"
              successCallback={doc => {
                props.history.push({ pathname: doc.pageUrl });
                props.flash({ id: 'docs.create_success', properties: { title: doc.title }, type: 'success' });
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>

// DocsNew.contextTypes = {
//   messages: PropTypes.object
// };

registerComponent({ name: 'DocsNew', component: DocsNew, hocs: [withMessages, withRouter] });
