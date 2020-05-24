import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';
import Users from 'meteor/vulcan:users';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const UsersAvatar = ({ className, user, link }) => {
  const avatarUrl = user.avatarUrl || Users.avatar.getUrl(user);

  const img = (
    <img
      alt={Users.getDisplayName(user)}
      className="avatar-image"
      src={avatarUrl}
      title={user.username}
    />
  );
  const initials = (
    <span className="avatar-initials">
      {Users.avatar.getInitials(user)}
    </span>
  );

  const avatar = avatarUrl ? img : initials;

  return (
    <div className={classNames('avatar', className)}>
      {link ? (
        <Link to={Users.getProfileUrl(user)}>
          {avatar}
        </Link>
      ) : (
        <>{avatar}</>
      )}
    </div>
  );
};

UsersAvatar.propTypes = {
  user: PropTypes.object.isRequired,
  size: PropTypes.string,
  link: PropTypes.bool
};

UsersAvatar.defaultProps = {
  size: 'medium',
  link: true
};

UsersAvatar.displayName = 'UsersAvatar';

registerComponent({ name: 'UsersAvatar', component: UsersAvatar });
