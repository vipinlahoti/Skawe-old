import { Components, registerComponent, withSingle, withCurrentUser, withMessages } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Users from 'meteor/vulcan:users';
import React, { Component } from 'react';
import mapProps from 'recompose/mapProps';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Documentations } from '../../modules/documentations/index.js';

class DocsPage extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div className="docs-page">
          <Components.Loading />
        </div>
      );
    } else if (!this.props.document) {
      return (
        <Components.Error404 />
      );
    } else {
      const doc = this.props.document;
      const currentUser = this.props.currentUser;

      const htmlBody = { __html: doc.htmlBody };

      return (
        <React.Fragment>
          <Components.HeadTags
            url={doc.pageUrl}
            title={doc.title}
            description={doc.title}
          />

          <div className="section pb-0">
            <Container>
              <Row className="center-xs">
                <Col md={10}>
                  <div className="mb-1 breadcrumb__wrapper d-flex middle-xs">
                    <Link to={{ pathname: '/docs' }} className="text-dark">
                      Documents
                    </Link>
                    <span className="breadcrumb-divider">/</span>
                    {doc.categories && doc.categories.length > 0 && <Components.DocsCategories doc={doc} />}
                  </div>

                  <div className="text-left">
                    <h2 className="title-2 mb-1 mt-xs">{doc.title}</h2>
                  </div>

                  <div className="d-flex middle-xs doced-at mb-2">
  
                    {doc.postedAt ? <small>{moment(new Date(doc.postedAt)).fromNow()}</small> : <FormattedMessage id="docs.dateNotDefined" />}
                    {Users.canUpdate({ collection: Documentations, document: doc, user: currentUser }) && (
                      <div className="docs-actions">
                        <Components.EditButton
                          collection={Documentations}
                          layout="vertical"
                          documentId={doc._id}
                          showRemove={false}
                          successCallback={doc => {
                            this.props.flash({ id: 'docs.edit_success', properties: { title: doc.title }, type: 'success' });
                          }}
                          component={
                            <Components.Button variant="primary-link" size="small" className="ml-1">
                              <Components.Icon name="edit" />
                              <FormattedMessage id="docs.edit" />
                            </Components.Button>
                          }
                        />
                      </div>
                    )}
                  </div>

                  {doc.thumbnailUrl ? <img className="docs-thumbnail" src={doc.thumbnailUrl} /> : null }
          
                  <div className="section-xsmall pb-5">
                    {doc.htmlBody ? <div className="text-left editor-text" dangerouslySetInnerHTML={htmlBody}></div> : null}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

        </React.Fragment>
      );
    }
  }
}

const queryOptions = {
  collection: Documentations,
  queryName: 'docsSingleQuery',
  fragmentName: 'DocumentationPage',
};

const mapPropsFunction = props => ({
  ...props,
  documentId: props.match && props.match.params._id,
});

registerComponent(
  // component name used by Vulcan
  'DocsPage',
  // React component
  DocsPage,
  mapProps(mapPropsFunction),
  // HOC to give access to the current user
  withCurrentUser,
  withMessages,
  // HOC to load the data of the document, based on queryOptions & a documentId props
  [withSingle, queryOptions]
);
