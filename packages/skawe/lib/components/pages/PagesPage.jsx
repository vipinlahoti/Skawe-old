import { Components, registerComponent, withSingle, withCurrentUser, withMessages } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import mapProps from 'recompose/mapProps';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { Pages } from '../../modules/pages/index.js';

class PagesPage extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div className="pages-page">
          <Components.Loading />
        </div>
      );
    } else if (!this.props.document) {
      return (
        <Components.Error404 />
      );
    } else {
      const page = this.props.document;
      const currentUser = this.props.currentUser;

      const htmlBody = { __html: page.body };

      return (
        <React.Fragment>
          <Components.HeadTags
            url={page.pageUrl}
            title={page.seoTitle}
            image={page.thumbnailUrl}
            description={page.seoDescription}
          />

          <Components.HeroJumbotron 
            title={page.heroTitle}
            description={page.heroDescription}
            whiteButton={page.outlineBtn}
            whiteButtonPath={page.outlineBtnUrl}
            blackButton={page.fillBtn}
            blackButtonPath={page.fillBtnUrl}
            collection={Pages}
            doc={page}
            image={page.thumbnailUrl}
            alt={page.thumbnailUrl ? page.heroTitle : ''}
            size={page.thumbnailUrl ? 'large' : ''}
            form={page.heroForm}
          />
          
          {page.body ? <div dangerouslySetInnerHTML={htmlBody}></div> : null}
         </React.Fragment>
      );
    }
  }
}

const queryOptions = {
  collection: Pages,
  queryName: 'pagesSingleQuery',
  fragmentName: 'PagePage',
};

const mapPropsFunction = props => ({
  ...props,
  documentId: props.match && props.match.params._id,
});

registerComponent(
  // component name used by Vulcan
  'PagesPage',
  // React component
  PagesPage,
  mapProps(mapPropsFunction),
  // HOC to give access to the current user
  withCurrentUser,
  withMessages,
  // HOC to load the data of the document, based on queryOptions & a documentId props
  [withSingle, queryOptions]
);
