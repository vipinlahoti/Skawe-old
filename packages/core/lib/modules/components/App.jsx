import Skawe from 'meteor/skawe:lib';
import { withTracker } from 'meteor/react-meteor-data';
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

const RouteWithLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props =>
        <React.Fragment>
          <Skawe.components.Layout {...props}>
            <Component {...props} />
          </Skawe.components.Layout>
        </React.Fragment>
      }
    />
  );
};

class App extends PureComponent {

  getChildContext() {
    return {
      currentUser: this.props.currentUser
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
  currentUser: PropTypes.object
};

App.childContextTypes = {
  currentUser: PropTypes.object
};

const AppContainer = withTracker(() => {
  let data;

  if (Meteor.isClient) {
    data = {
      currentUser: Meteor.user()
    }
  }

  return data;
})(App);

const MainAppContainer = withRouter(AppContainer)

Skawe.registerComponent('App', MainAppContainer);
