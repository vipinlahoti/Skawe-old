import React, { Component, Fragment } from 'react';
import BaseForm from './baseForm';
import { validateForm } from '../utils';
import { getModel, redirect } from './commonUtils';
import { login } from './methods';
import SocialButtons from './socialButtons';

class SignIn extends Component {
  constructor () {
    super()
    this.state = {
      errors: []
    }

    this.getModel = getModel.bind(this)
    this.redirect = redirect.bind(this)
  }

  render () {
    const {
      currentState,
      defaults
    } = this.props

    const {
      texts,
      hideSignUpLink,
      showForgotPasswordLink,
      showResendVerificationLink,
      sendVerificationEmail,
      forbidClientAccountCreation,
      disableForgotPassword
    } = defaults

    const model = this.getModel()

    return (
      <Fragment>
        <BaseForm
          context={this}
          currentState={currentState}
          values={model}
          defaults={defaults}
          onSubmit={this.onSubmit}
          errors={this.state.errors}
        />

        {!disableForgotPassword && showForgotPasswordLink && (
          <a onMouseDown={this.redirectToForgotPwd} href=''>
            <small>{texts.links.toForgotPwd}</small>
          </a>
        )}

        {!forbidClientAccountCreation && !hideSignUpLink && (
          <a onMouseDown={this.redirectToSignUp} href=''>
            <small>{texts.links.toSignUp}</small>
          </a>
        )}
        
        {sendVerificationEmail && showResendVerificationLink && (
          <a onMouseDown={this.redirectToResendVerification} href=''>
            <small>{texts.links.toResendVerification}</small>
          </a>
        )}

        {!forbidClientAccountCreation && (
          <SocialButtons
            defaults={defaults}
          />
        )}
      </Fragment>
    )
  }

  onSubmit = () => {
    /* Login */
    const model = this.getModel()

    // Validate form
    if (!validateForm(model, this)) return

    const { username, email, password } = model

    // Login
    login(username, email, password, err => {
      if (err) {
        this.setState({ errors: [{ _id: '__globals', errStr: err.reason }] })
      } else {
        const { onLoginHook } = this.props.defaults
        if (onLoginHook) {
          onLoginHook()
        }
      }
    })
  }

  redirectToSignUp = () => {
    this.redirect('signUp', this.props.defaults.redirects.toSignUp)
  }

  redirectToForgotPwd = () => {
    this.redirect('forgotPwd', this.props.defaults.redirects.toForgotPwd)
  }

  redirectToResendVerification = () => {
    this.redirect('resendVerification', this.props.defaults.redirects.toResendVerification)
  }
}

export default SignIn
