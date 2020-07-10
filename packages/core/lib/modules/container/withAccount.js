import Skawe from 'meteor/skawe:lib';
import { withTracker } from 'meteor/react-meteor-data'

// https://blog.meteor.com/introducing-usetracker-react-hooks-for-meteor-cb00c16d6222
Skawe.withAccount = withTracker((props) => {
  if (Meteor.isClient) {
    const userId = Meteor.userId();
    const loggingIn = Meteor.loggingIn();

    return {
      userId,
      loggingIn,
      authenticated: !loggingIn && !!userId,
    }
  }
})
