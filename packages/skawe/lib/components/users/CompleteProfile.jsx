import { Components, registerComponent, withCurrentUser, withMessages, getSetting, withSingle2 } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Users from 'meteor/vulcan:users';
import { Container, Row, Col } from 'react-bootstrap';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title', 'Skawe');

const CompleteProfile = ({ document: user, currentUser, loading }) => {
  
  if (loading) {
    return <Components.Loading />;
  }

  return Users.canUpdate({ collection: Users, document: user, user: currentUser }) ? (
    <React.Fragment>
      <Components.HeadTags title="Accounts" description="Accounts Page" />

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
                      documentId={user._id}
                      collection={Users}
                      fields={['displayName', 'companyName', 'email', 'phone', 'taxID']}
                      successCallback={user => {
                        this.props.flash({ id: 'users.edit_success', properties: { name: Users.getDisplayName(user) }, type: 'success' });
                      }}
                      showRemove={false}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  ) : (
    <FormattedMessage id="app.noPermission" />
  );
};

CompleteProfile.propTypes = {
  terms: PropTypes.object, // a user is defined by its unique _id or its unique slug
};

CompleteProfile.displayName = 'CompleteProfile';

const options = {
  collection: Users,
  fragmentName: 'UsersProfile',
};

registerComponent({
  name: 'CompleteProfile',
  component: CompleteProfile,
  hocs: [withMessages, withCurrentUser, [withSingle2, options]],
});
