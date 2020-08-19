import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class AccountsButton extends PureComponent {
  render () {

    const {
      label,
      // href = null,
      type,
      disabled = false,
      id,
      className,
      onClick
    } = this.props;

    return type === 'link' ? 
      null :
      <Components.Button
        variant="primary-fill"
        id={id}
        className={className}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </Components.Button>;
  }
}
AccountsButton.propTypes = {
  onClick: PropTypes.func
};

replaceComponent('AccountsButton', AccountsButton);
