import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { STATES } from 'meteor/vulcan:accounts';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { withApollo } from 'react-apollo';


const UsersMenu = ({ currentUser, currentUserLoading, client, state }) => {
  return (
    <div className="users-menu">
      {currentUserLoading ? (
        <Components.Loading />
      ) : currentUser ? (
        <UserLoggedInMenu currentUser={currentUser} client={client} />
      ) : (
        <UserLoggedOutMenu state={state} />
      )}
    </div>
  );
};

const UserLoggedInMenu = ({ currentUser, client }) => {
  const menuItems = [];

  if (Users.isAdmin(currentUser)) {
    menuItems.push({
      to: `/admin/users`,
      labelId: 'admin.users',
    });

    menuItems.push('divider');

    menuItems.push({
      to: `/admin/categories`,
      labelId: 'admin.categories',
    });
    menuItems.push({
      to: `/admin/posts`,
      labelId: 'admin.posts',
    });
    menuItems.push({
      to: `/admin/comments`,
      labelId: 'admin.comments',
    });

    menuItems.push('divider');

    menuItems.push({
      to: `/admin/departments`,
      labelId: 'admin.departments',
    });
    menuItems.push({
      to: `/admin/tickets`,
      labelId: 'admin.tickets',
    });
    menuItems.push({
      to: `/admin/replies`,
      labelId: 'admin.replies',
    });

    menuItems.push('divider');

    menuItems.push({
      to: `/admin/features`,
      labelId: 'admin.features',
    });
    menuItems.push({
      to: `/admin/pages`,
      labelId: 'admin.pages',
    });

    menuItems.push('divider');

    menuItems.push({
      to: `/admin/distributions`,
      labelId: 'admin.distributions',
    });
    menuItems.push({
      to: `/admin/regions`,
      labelId: 'admin.regions',
    });
    menuItems.push({
      to: `/admin/server-plans`,
      labelId: 'admin.server-plans',
    });
    menuItems.push({
      to: `/admin/click-apps`,
      labelId: 'admin.click-apps',
    });

    menuItems.push('divider');

    menuItems.push({
      to: `/admin/instances`,
      labelId: 'admin.instances',
    });
    menuItems.push({
      to: `/admin/domains`,
      labelId: 'admin.domains',
    });

    menuItems.push('divider');
  }

  menuItems.push({
    labelId: 'users.log_out',
    itemProps: {
      onClick: () => Meteor.logout(() => client.resetStore()),
    },
  });

  return (
    <Components.Dropdown
      buttonProps={{ variant: 'none' }}
      id="user-dropdown"
      trigger={
        <div className="dropdown-toggle-inner">
          <Components.UsersAvatar size="small" user={currentUser} addLink={false} />
        </div>
      }
      menuItems={menuItems}
    />
  );
};

const UserLoggedOutMenu = ({ state }) => (
  <Components.Dropdown
    buttonProps={{ variant: ' none' }}
    id="accounts-dropdown"
    className="users-account-menu"
    trigger={
      <div className="dropdown-toggle-inner">
        <Components.Icon name="user" />
        <FormattedMessage id="users.sign_up_log_in" />
      </div>
    }
    menuContents={<Components.AccountsLoginForm formState={state ? STATES[state] : STATES.SIGN_UP} />}
  />
);

UsersMenu.propsTypes = {
  currentUser: PropTypes.object,
  client: PropTypes.object,
};

registerComponent({ name: 'UsersMenu', component: UsersMenu, hocs: [withCurrentUser, withApollo] });
