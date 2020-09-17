import { withCurrentUser, Components, registerComponent, withMessages } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { STATES } from 'meteor/vulcan:accounts';
import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const HeroJumbotron = (
  {
    currentUser,
    eyebrow,
    title,
    description,
    whiteButton,
    whiteButtonPath,
    whiteButtonText,
    blackButton,
    blackButtonPath,
    form,
    size,
    image,
    alt,
    collection,
    doc,
    flash,
    category,
    extra
  }) => {

  return (
    <Jumbotron className={`jumbotron-${size}`}>
      <Container>
        <Row className="middle-xs">
          <Col lg={category !== 'home' ? 7 : 5} md={category !== 'home' ? 7 : 6} sm={12} xs={4}>
            <h6 className="eyebrow">{eyebrow}</h6>
            <div className="error-page">{extra}</div>
            <h2 className="title-2">{title}</h2>
            <p className="lead mb-2">{description}</p>
            
            {!form ? 
              <React.Fragment>
                {whiteButton ?
                  (<Components.Button isLink={true} variant="primary" path={whiteButtonPath}>
                    {whiteButton}
                  </Components.Button>) : null }

                {blackButton ?
                  (<Components.Button isLink={true} variant="primary-fill" path={blackButtonPath}>
                    {blackButton}
                  </Components.Button>) : null }
              </React.Fragment>
            : null }

            {collection && doc && Users.canUpdate({ collection: collection, document: doc, user: currentUser }) && (
              <div className="d-inline">
                <Components.EditButton
                  collection={collection}
                  layout="vertical"
                  documentId={doc._id}
                  showRemove={false}
                  successCallback={doc => {
                    flash({ id: 'pages.edit_success', properties: { title: doc.heroTitle }, type: 'success' });
                  }}
                  component={
                    <Components.Button variant="primary-link" size="small" className="">
                      <Components.Icon name="edit" />
                      <FormattedMessage id="pages.edit" />
                    </Components.Button>
                  }
                />
              </div>
            )}

          {form && !currentUser ?
            (
              <div className="mt-1">
                <Components.CreateAccount state={STATES.SIGN_UP} />
              </div>
            ) : null }
          </Col>

          <Col lg={category !== 'home' ? 4 : 6} md={category !== 'home' ? 4 : 5} sm={12} xs={4} className="col-md-offset-1">
            <div className="jumbotron-image">
              <img src={image} alt={alt} />
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

registerComponent({ name: 'HeroJumbotron', component: HeroJumbotron, hocs: [withCurrentUser, withMessages] });
