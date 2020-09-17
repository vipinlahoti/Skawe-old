import { Components, registerComponent, withMulti2, withSingle, withCurrentUser, withMessages } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import mapProps from 'recompose/mapProps';
import { Jumbotron, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
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

      const category = page.features ? page.features[0].slug : null;

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
            eyebrow={page.heroEyebrow}
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
            category={category}
          />
          
          {page.body ? <div dangerouslySetInnerHTML={htmlBody}></div> : null}

          {category === 'compute' ?
            <div className="section">
              <Container>
                <Row className="center-xs">
                  <Col md={10}>
                    <div className="mb-3">
                      <Tab.Container defaultActiveKey="first">
                        <Nav variant="pills" className="flex-column center-xs">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Operating System</Nav.Link>
                          </Nav.Item>
                        </Nav>

                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <Components.PageDistribution />
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>

                    <div className="mb-3">
                      <Tab.Container defaultActiveKey="first">
                        <Nav variant="pills" className="flex-column center-xs">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Storage</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Networking</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Tools</Nav.Link>
                          </Nav.Item>
                        </Nav>

                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <div className="tabpanel-list center-xs d-flex">
                              <div className="ml-1 mr-1">
                                <Components.Icon name="settings_backup_restore" iconClass="text-primary" />
                                <h6 className="title-6 mb-0">Backups</h6>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="tabpanel-list center-xs d-flex">
                              <div className="ml-1 mr-1">
                                <Components.Icon name="public" iconClass="text-primary" />
                                <h6 className="title-6 mb-0">DNS Manager</h6>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <div className="tabpanel-list center-xs d-flex">
                              <div className="ml-1 mr-1">
                                <Components.Icon name="computer" iconClass="text-primary" />
                                <h6 className="title-6 mb-0">CLI</h6>
                              </div>
                              <div className="ml-1 mr-1">
                                <Components.Icon name="dvr" iconClass="text-primary" />
                                <h6 className="title-6 mb-0">Monitor</h6>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          : null}

          <Components.GetStarted />

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
