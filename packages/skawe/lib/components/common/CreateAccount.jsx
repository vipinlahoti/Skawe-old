import { Components, registerComponent } from 'meteor/vulcan:core';
import { STATES } from 'meteor/vulcan:accounts';
import React from 'react';

const CreateAccount = ({type, formState}) =>
  <Components.AccountsLoginForm formState={ STATES[`${formState}`] } />

registerComponent({ name: 'CreateAccount', component: CreateAccount });
