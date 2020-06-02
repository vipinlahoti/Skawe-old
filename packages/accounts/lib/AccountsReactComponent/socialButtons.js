import React from 'react'
import { Accounts } from 'meteor/accounts-base'
import AccountsReact from '../AccountsReact'

class SocialButtons extends React.Component {

  render () {
    if (!Accounts.oauth) {
      return null
    }

    const services = Accounts.oauth.serviceNames()
    // const { SubmitField } = AccountsReact.components
    return services && services.map((service, i) => {

      return (
        
        <Card.Body className="text-center pt-4 pb-5">
          <div className="text-muted text-center mb-3">
            <small>or Login with</small>
          </div>
          <Skawe.components.AccountsButton
            key={i}
            onClick={() => this.loginWith(service)}
            social={service}
            text={service}
          />
        </Card.Body>
      )
    })
  }

  loginWith = service => {
    let _service = service[0].toUpperCase() + service.substr(1)

    if (service === 'meteor-developer') {
      _service = 'MeteorDeveloperAccount'
    }

    const options = AccountsReact.config.oauth[service] || {}
    Meteor['loginWith' + _service](options, err => {
      if (!err) {
        const { onLoginHook } = this.props.defaults
        if (onLoginHook) {
          onLoginHook()
        }
      }
    })
  }
}

export default SocialButtons
