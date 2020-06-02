import Skawe from 'meteor/skawe:lib';
import React from 'react'
import PropTypes from 'prop-types'

class AccountsButton extends React.Component {
  /* Default accounts-react button element */

  render () {
    const { onClick, text, social } = this.props

    return (
      <Skawe.components.Button variant="black-fill" onClick={onClick} className={ social ? 'social-btn btn-white ' + social : ''}>
        {social ? text[0].toUpperCase() + text.substr(1) : text}
      </Skawe.components.Button>
    )
  }
}

AccountsButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

Skawe.registerComponent('AccountsButton', AccountsButton);
