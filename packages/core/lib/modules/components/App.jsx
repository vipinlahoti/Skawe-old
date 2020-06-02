import Skawe from 'meteor/skawe:lib';
import { withTracker } from 'meteor/react-meteor-data';
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Messages from '../messages.js';

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
      currentUser: this.props.currentUser,
      messages: this.props.messages,
      flash: this.props.flash
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

        {this.props.ready ?
          <React.Fragment>
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
        : <Skawe.components.Loading /> }
      </React.Fragment>
    );
  }
}

App.propTypes = {
  ready: PropTypes.bool,
  currentUser: PropTypes.object,
  messages: PropTypes.object,
  flash: PropTypes.array,
};

App.childContextTypes = {
  currentUser: PropTypes.object,
  messages: PropTypes.object,
  flash: PropTypes.array,
};

const AppContainer = withTracker(() => {
  let subscriptions;
  let data;

  if (Meteor.isClient) {
    subscriptions = Skawe.subscriptions.map((sub) => Meteor.subscribe(sub.name, sub.arguments));

    data = {
      currentUser: Meteor.user(),
      messages: Messages,
      flash: Messages.collection.find({show: true}).fetch(),
    }

    if (!subscriptions.length || _.every(subscriptions, handle => handle.ready())) {
      data.ready = true;
    } else {
      data.ready = false;
    }
  }

  return data;
})(App);

const MainAppContainer = withRouter(AppContainer)

Skawe.registerComponent('App', MainAppContainer);
