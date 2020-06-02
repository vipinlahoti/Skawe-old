import { AccountsReact } from 'meteor/skawe:accounts';

AccountsReact.configure({
  // defaultState: 'signUp',
  confirmPassword: false,
  showForgotPasswordLink: false,
  showPlaceholders: true,
  sendVerificationEmail: false,
  hideSignUpLink: true,
  hideSignInLink: true,
  passwordSignupFields: 'EMAIL_ONLY',
  // mapStateToRoute: {
  //   signIn: '/login',
  //   signUp: '/register'
  // },
  // redirects: {
  //   toSignUp: () => {
  //     window.location.href = '/register';
  //   },
  //   toSignIn: () => {
  //     window.location.href = '/register';
  //   },
  //   toForgotPwd: () => {
  //     window.location.href = '/forgot-password';
  //   }
  // },
  onLoginHook() {
    window.location.href = '/accounts/dashboard';
  },
  onLogoutHook() {
    window.location.href = '/';
    // <Redirect to='/' />

    // Meteor.call('userLoggedOut', clientId, error => {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     cookies.remove('clientId');
    //   }
    // });
    // return (<Redirect to='/' />)
  }
});
