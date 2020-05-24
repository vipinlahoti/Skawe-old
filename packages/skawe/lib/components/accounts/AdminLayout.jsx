import { Components, registerComponent, withCurrentUser, withSingle2 } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

const AdminLayout = ({currentUser, document: user, children }) => {
  return Users.canUpdate({ collection: Users, document: user, user: currentUser }) ? (
    <div className={classNames('wrapper')} id="wrapper">
      <Helmet>
        <link name='font-face' rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,700|Open+Sans:300,400,600|Material+Icons'/>
      </Helmet>

      <Components.HeadTags />
      {user !== undefined ?
        <React.Fragment>
          {user.displayName === null ?
          <Components.UsersProfileCheck currentUser={currentUser} documentId={currentUser._id} />
          : 
          <div className="dashboard__wrapper">
            <Components.AdminSidebar />
            <div className="dashboard-container">
              <Components.AdminHeader />
              <div className="section-dashboard">
                <Container>
                  <Row>
                    <Col>
                      {children}
                    </Col>
                  </Row>
                </Container>
              </div>
              <Components.AdminFooter />
            </div>
          </div>
        }
        </React.Fragment>        
        : <Components.Loading /> }
    </div>
  ) : (
    <FormattedMessage id="app.noPermission" />
  );
}

AdminLayout.propTypes = {
  terms: PropTypes.object, // a user is defined by its unique _id or its unique slug
};

const options = {
  collection: Users,
  fragmentName: 'UsersProfile',
};

registerComponent({ name: 'AdminLayout', component: AdminLayout, hocs: [withCurrentUser, [withSingle2, options]] });
