import { Components, registerComponent, withCurrentUser, withMessages, withSingle2 } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Users from 'meteor/vulcan:users';
import { Tab, Nav, Row, Col } from 'react-bootstrap';

const UsersEditForm = ({ document: user, currentUser, loading }) => {
  
  if (loading) {
    return <Components.Loading />;
  }

  return Users.canUpdate({ collection: Users, document: user, user: currentUser }) ? (
    <React.Fragment>
      <Components.HeadTags title="Accounts" description="Accounts Page" />

      <div className="section-xsmall">
        <h5 className="title-5"><FormattedMessage id="users.edit_account" /></h5>
      </div>

      <Tab.Container defaultActiveKey="first">
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Display</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Billing Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Password</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">Settings</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Components.SmartForm
              documentId={user._id}
              collection={Users}
              fields={['displayName', 'companyName', 'email', 'phone', 'taxID', 'notifications_users', 'isAdmin']}
              successCallback={user => {
                props.flash({ id: 'users.edit_success', properties: { name: Users.getDisplayName(user) }, type: 'success' });
              }}
              showRemove={false}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Row>
              <Col>
                Billing
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <Components.CreateAccount formState="PASSWORD_CHANGE" />
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            Settings
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </React.Fragment>
  ) : (
    <FormattedMessage id="app.noPermission" />
  );
};

UsersEditForm.propTypes = {
  terms: PropTypes.object, // a user is defined by its unique _id or its unique slug
};

UsersEditForm.displayName = 'UsersEditForm';

const options = {
  collection: Users,
  fragmentName: 'UsersProfile',
};

registerComponent({
  name: 'UsersEditForm',
  component: UsersEditForm,
  hocs: [withMessages, withCurrentUser, [withSingle2, options]],
});
