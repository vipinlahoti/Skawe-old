import Skawe from 'meteor/skawe:lib';
import { withTracker } from 'meteor/react-meteor-data';

Skawe.withTrackerSsr = (container) => (Component) =>
  withTracker((props) => {
    if (Meteor.isClient) return container(props);
    return {};
  })(Component);
