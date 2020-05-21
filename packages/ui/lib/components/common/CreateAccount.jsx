import Skawe from 'meteor/skawe:lib';
import { AccountsReactComponent } from 'meteor/skawe:accounts';
import React from 'react';

const CreateAccount = ({type, state}) =>
  <AccountsReactComponent type={type} state={state} />

Skawe.registerComponent('CreateAccount', CreateAccount);


