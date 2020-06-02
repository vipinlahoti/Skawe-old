/* eslint key-spacing:0 padded-blocks: 0 */
import { Meteor } from 'meteor/meteor'
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { handleInputChange } from './commonUtils'

class BaseForm extends Component {
  constructor (props) {
    super()
    this.handleInputChange = handleInputChange.bind(props.context)
  }

  componentDidMount () {
    // We must explicitly rerender recaptcha on every mount
    if (this.props.showReCaptcha) { // will be available only for signup form.
      let reCaptchaParams = this.props.defaults.reCaptcha || Meteor.settings.public.reCaptcha

      setTimeout(() => {
        window.grecaptcha.render('recaptcha-container',
          { ...reCaptchaParams,
            callback: window.reCaptchaCallback
          },
        )
      }, 1)
    }
  }

  render () {
    // State specifics
    const {
      currentState,
      values,
      defaults,
      onSubmit,
      errors
    } = this.props

    // Defaults
    const {
      texts,
      showReCaptcha,
      confirmPassword
    } = defaults

    const _fields = defaults.fields[currentState]
    const fields  = confirmPassword ? _fields : _fields.filter(field => field._id !== 'confirmPassword')

    // texts
    const button = texts.button[currentState]

    // Global errors
    const globalErrors = errors ? errors.filter(errField => errField._id === '__globals') : [];

    return (
      <Fragment>
        {/* Errors  */}        
        { globalErrors.length > 0 && <Skawe.components.Errors errors={globalErrors} /> }
        
        <Skawe.components.Forms onSubmit={(e) => e.preventDefault()} className={`ar-${currentState}`}>
          {/* Fields  */}
          {fields.map((f, i) => {

            let Field = Skawe.components.InputField // Defaults to input
            switch (f.type) {
              case 'select': Field = Skawe.components.SelectField; break;
              case 'radio':  Field = Skawe.components.RadioField;  break;
            }

            const props = {
              key: i,
              values,
              defaults,
              onChange: this.handleInputChange,
              error: errors ? errors.find((errField) => errField._id === f._id) : [],
              ...f
            }

            if (this.shouldFocusFirstInput(i)) {
              props.focusInput = true
            }

            return React.createElement(Field, props)
          })}

          {showReCaptcha && <div id='recaptcha-container' />}

          {/* Submit Button  */}
          <Skawe.components.AccountsButton onClick={onSubmit} text={button} />

        </Skawe.components.Forms>
      </Fragment>
    )
  }

  shouldFocusFirstInput = index => {
    return this.props.defaults.focusFirstInput && index === 0
  }
}

BaseForm.propTypes = {
  context: PropTypes.object.isRequired,
  currentState: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  defaults: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired
}

export default BaseForm
