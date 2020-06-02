import Skawe from 'meteor/skawe:lib';
import { withTracker } from 'meteor/react-meteor-data'

// https://blog.meteor.com/introducing-usetracker-react-hooks-for-meteor-cb00c16d6222
Skawe.withAccount = withTracker((props) => {
  Meteor.subscribe('users.current');
  const currentUser = Meteor.user();

  return {
    currentUser
  }
})
