import Skawe from 'meteor/skawe:lib';
import { CloudInstances } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data'

// https://blog.meteor.com/introducing-usetracker-react-hooks-for-meteor-cb00c16d6222
Skawe.withAccount = withTracker((props) => {
  Meteor.subscribe('users.current');
  // Meteor.subscribe('cloudinstances.userlist');
  const currentUser = Meteor.user();
  // const cloudInstancesList = CloudInstances.find().fetch();

  return {
    currentUser,
    // cloudInstancesList
  }
})
