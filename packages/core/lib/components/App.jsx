import Skawe from 'meteor/skawe:lib';
import { withTracker } from 'meteor/react-meteor-data';
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Messages from '../modules/messages.js';
import withTrackerSsr from '../modules/container/withTrackerSsr';

const RouteWithLayout = ({ layoutComponent, layoutName, component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props => {
        const layout = layoutComponent
          ? layoutComponent
          : layoutName
          ? Skawe.components[layoutName]
          : Skawe.components.Layout;
        const children = React.createElement(component, props)
        return React.createElement(layout, props, children);
      }}
    />
  );
};

class App extends PureComponent {

  getChildContext() {
    return {
      loading: this.props.loading,
      authenticated: this.props.authenticated,
      userId: this.props.userId,
      messages: this.props.messages,
      flash: this.props.flash,
    };
  }

  render() {
    const routeNames = Skawe.routes.routes;
    const currentRoute = this.props.location.pathname;
    
    if (Meteor.isClient) {
      if ((Meteor.user() && currentRoute === '/login') || (Meteor.user() && currentRoute === '/register')) {
        return (<Redirect to='/accounts/dashboard' />)
      }
    }

    return (
      <React.Fragment>
        <Skawe.components.ScrollToTop />
        <Skawe.components.HeadTags />

        {routeNames.length ? (
          <Switch>
            {routeNames.map((route, i) => (
              <RouteWithLayout
                exact
                key={i}
                {...route}
              />
            ))}
            <RouteWithLayout
              component={Skawe.components.Error404}
            />
          </Switch> )
        : ( <Skawe.components.HelloWorld /> )}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool,
  authenticated: PropTypes.bool,
  userId: PropTypes.string,
  messages: PropTypes.object,
  flash: PropTypes.array,
};

App.childContextTypes = {
  loading: PropTypes.bool,
  authenticated: PropTypes.bool,
  userId: PropTypes.string,
  messages: PropTypes.object,
  flash: PropTypes.array,
};

const AppContainer = Skawe.withTrackerSsr(() => {
  const app = Meteor.subscribe('users.current');
  const currentUser = Meteor.user();
  const userId = Meteor.userId();
  const loggingIn = Meteor.loggingIn();
  const loading = !app.ready();
  const messages = Messages;
  const flash = Messages.collection.find({show: true}).fetch();

  return {
    loading,
    loggingIn,
    authenticated: !loggingIn && !!userId,
    userId
  }
})(App);

const MainAppContainer = withRouter(AppContainer)
Skawe.registerComponent('App', MainAppContainer);
