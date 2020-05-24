import { withCurrentUser, getSetting, Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title', 'My App');

const NavLoggedIn = ({user}) =>
  <Components.Button isLink={true} variant="black-fill" path="/accounts/dashboard">
    My Account
  </Components.Button>

const NavLinks = ({currentUser}) => 
  <Nav className="ml-auto">
    <Link to={{ pathname: '/marketplace' }} className="nav-link">
      Marketplace
    </Link>

    { currentUser ? <NavLoggedIn user={currentUser} /> : 

    <React.Fragment>
      <Link to={{ pathname: '/register' }} className="nav-link">
        Register
      </Link>

      <Components.Button variant="white" isLink={true} path="/login">
        Login
      </Components.Button>
    </React.Fragment> }

  </Nav>

const Header = ({currentUser}) => {
  return (
    <Navbar variant="light">
      <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
      <NavLinks currentUser={currentUser} />
    </Navbar>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent({ name: 'Header', component: Header, hocs: [withCurrentUser] });
