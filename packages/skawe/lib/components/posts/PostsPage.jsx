import { Components, registerComponent, withSingle, withCurrentUser, withMessages } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Users from 'meteor/vulcan:users';
import { Posts } from '../../modules/posts/index.js';
import React, { Component } from 'react';
import mapProps from 'recompose/mapProps';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';

class PostsPage extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div className="posts-page">
          <Components.Loading />
        </div>
      );
    } else if (!this.props.document) {
      return (
        <Components.Error404 />
      );
    } else {
      const post = this.props.document;
      const currentUser = this.props.currentUser;

      const htmlBody = { __html: post.htmlBody };

      return (
        <React.Fragment>
          <Components.HeadTags
            url={post.pageUrl}
            title={post.title}
            image={post.thumbnailUrl}
            description={post.excerpt}
          />

          <Jumbotron className="pb-0">
            <Container>
              <Row className="middle-xs">
                <Col md={7} sm={12} xs={4}>
                  
                  <div className="badge badge-primary ml-0">
                    {post.categories && post.categories.length > 0 && <Components.PostsCategories post={post} />}
                  </div>
                  
                  <h2 className="title-2 mb-1 mt-xs">{post.title}</h2>

                  <div className="d-flex middle-xs posted-at mb-2">
                    {post.user ? (
                      <React.Fragment>
                        <Components.UsersAvatar user={post.user} size="xsmall" />
                        <span className="ml-sm mr-xs">
                          <Components.UsersName user={post.user} link={true} />
                        </span>
                      </React.Fragment>
                    ) : null}
                    {post.postedAt ? <small>{moment(new Date(post.postedAt)).fromNow()}</small> : <FormattedMessage id="posts.dateNotDefined" />}
                    {Users.canUpdate({ collection: Posts, document: post, user: currentUser }) && (
                      <div className="posts-actions">
                        <Components.EditButton
                          collection={Posts}
                          layout="vertical"
                          documentId={post._id}
                          showRemove={false}
                          successCallback={post => {
                            this.props.flash({ id: 'posts.edit_success', properties: { title: post.title }, type: 'success' });
                          }}
                          component={
                            <Components.Button variant="primary-link" size="small" className="ml-1">
                              <Components.Icon name="edit" />
                              <FormattedMessage id="posts.edit" />
                            </Components.Button>
                          }
                        />
                      </div>
                    )}
                  </div>
                </Col>

                <Col md={5} sm={12} xs={4}>
                  <div className="jumbotron-image">
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          <Container>
            <Row>
              {post.thumbnailUrl ? <img className="posts-thumbnail" src={post.thumbnailUrl} /> : null }
            </Row>
          </Container>
          
          <div className="section pt-3 pb-5">
            <Container>
              <Row className="center-xs">
                <Col lg={10} md={10} sm={12} xs={4}>
                  {post.htmlBody ? <div className="text-left" dangerouslySetInnerHTML={htmlBody}></div> : null}
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section pt-1">
            <Container>
              <Row className="center-xs">
                <Col lg={10} md={10} sm={12} xs={4}>
                  <Components.PostsCommentsThread postId={post._id} input={{ filter: { postId: { _eq: post._id } } }} />
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
  collection: Posts,
  queryName: 'postsSingleQuery',
  fragmentName: 'PostPage',
};

const mapPropsFunction = props => ({
  ...props,
  documentId: props.match && props.match.params._id,
});

registerComponent(
  // component name used by Vulcan
  'PostsPage',
  // React component
  PostsPage,
  mapProps(mapPropsFunction),
  // HOC to give access to the current user
  withCurrentUser,
  withMessages,
  // HOC to load the data of the document, based on queryOptions & a documentId props
  [withSingle, queryOptions]
);
