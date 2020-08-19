import { Accounts } from 'meteor/vulcan:accounts';

Accounts.config({
  sendVerificationEmail: false,
});

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  // loginPath: '/login',
  // signUpPath: '/register',
  // resetPasswordPath: '/forgot-password',
  // profilePath: '/profile',
  minimumPasswordLength: 6,
  // onSignedInHook: () => redirect('/accounts/dashboard'),
  onSignedOutHook() {
    window.location.href = '/';
  }
});
