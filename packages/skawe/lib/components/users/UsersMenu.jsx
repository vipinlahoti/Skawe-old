import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Users from 'meteor/vulcan:users';
import { withApollo } from 'react-apollo';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const UsersMenu = ({ currentUser, currentUserLoading, client, state }) => {
  return (
    <div className="users-menu">
      {currentUserLoading ? (
        <Components.Loading />
      ) : currentUser ? (
        <UserLoggedInMenu currentUser={currentUser} client={client} />
      ) :  null }
    </div>
  );
};

const UserLoggedInMenu = ({ currentUser, client }) => {
  const menuItems = [];

  if (Users.isAdmin(currentUser)) {
    menuItems.push({
      to: `/users/${currentUser.slug}`,
      labelId: 'admin.profile',
    });
    menuItems.push({
      to: `/admin/users`,
      labelId: 'admin.users',
    });
    menuItems.push({
      to: `/admin/cloud-instance`,
      labelId: 'admin.cloud_instance',
    });
  }

  menuItems.push({
    labelId: 'users.log_out',
    itemProps: {
      onClick: () => Meteor.logout(() => client.resetStore()),
    },
  });

  return (
    <Components.Dropdown
      buttonProps={{ variant: 'secondary' }}
      id="user-dropdown"
      trigger={
        <div className="dropdown-toggle-inner">
          <Components.UsersAvatar size="small" user={currentUser} link={false} />
        </div>
      }
      menuItems={menuItems}
    />
  );
};

UsersMenu.propsTypes = {
  currentUser: PropTypes.object,
  client: PropTypes.object,
};

registerComponent({ name: 'UsersMenu', component: UsersMenu, hocs: [withCurrentUser, withApollo] });
