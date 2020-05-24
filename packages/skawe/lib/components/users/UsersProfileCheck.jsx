import { withSingle, getSetting, Components, registerComponent, withMessages } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Container, Row, Col } from 'react-bootstrap';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title', 'Skawe');

const UsersProfileCheck = ({currentUser, document, loading, flash}, context) => {

  // we're loading all fields marked as "mustComplete" using withDocument
  const userMustCompleteFields = document;

  // if user is not logged in, or userMustCompleteFields is still loading, don't return anything
  if (!currentUser || loading) {

    return null;

  } else {

    // return fields that are required by the schema but haven't been filled out yet
    const fieldsToComplete = Users.getRequiredFields().filter(fieldName => {
      return !userMustCompleteFields[fieldName];
    });

    if (fieldsToComplete.length > 0) {
      return (
        <div className="section section-profile-complete">
          <Container>
            <Row className="center-xs">
              <Col sm={12} md={10} lg={8}>
                <div className="text-left">
                  <Row className="mb-2">
                    <Col>
                      <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
                    </Col>
                    <Col>
                      <h6 className="title-6 mb-1 text-right"><FormattedMessage id="users.complete_profile"/></h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Components.SmartForm
                        collection={ Users }
                        documentId={ currentUser._id }
                        fields={ fieldsToComplete }
                        showRemove={ false }
                        successCallback={user => {
                          const newUser = {...currentUser, ...user};
                          if (Users.hasCompletedProfile(newUser)) {
                            flash({id: "users.profile_completed", type: 'success'});
                          }
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {

      return null;

    }
  }

};


UsersProfileCheck.propTypes = {
  currentUser: PropTypes.object
};

UsersProfileCheck.displayName = 'UsersProfileCheck';

const mustCompleteFragment = gql`
  fragment UsersMustCompleteFragment on User {
    _id
    ${Users.getRequiredFields().join('\n')}
  }
`

const options = {
  collection: Users,
  queryName: 'usersMustCompleteQuery',
  fragment: mustCompleteFragment,
};

registerComponent({ name: 'UsersProfileCheck', component: UsersProfileCheck, hocs: [withMessages, [withSingle, options]] });
