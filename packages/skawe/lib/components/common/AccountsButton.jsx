import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Components, replaceComponent } from 'meteor/vulcan:core';

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
    const variant = (id === 'google' || id === 'facebook') ? 'black' : 'black-fill';
    
    return type === 'link' ? 
      '' :
      <Components.Button
        variant={variant}
        id={id}
        className={className}
        type={type}
        disabled={disabled}
        onClick={onClick}>
        {label}
      </Components.Button>;
  }
}
AccountsButton.propTypes = {
  onClick: PropTypes.func
};

replaceComponent('AccountsButton', AccountsButton);
