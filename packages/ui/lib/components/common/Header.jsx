import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const siteTitle = Skawe.settings.get('title', 'Skawe');
const logoUrl = Skawe.settings.get('logoUrl');

const NavLoggedIn = ({user}) =>
  <Nav className="ml-auto">
    <Skawe.components.Button className="ml-1" variant="black-fill" isLink={true} path="/accounts/dashboard">
      My Account
    </Skawe.components.Button>
  </Nav>

const NavLinks = ({currentUser}) => 
  <Nav className="ml-auto">
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Products
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <LinkContainer to="/products/cloud-instance">
          <Dropdown.Item href="#/action-1">
            <Skawe.components.Icon name="layers"/>
            <div className="nav-link-desc">
              Cloud Instance
              <span>Powerful compute instances</span>
            </div>
          </Dropdown.Item>
        </LinkContainer>

        <LinkContainer to="/products/object-storage">
          <Dropdown.Item href="#/action-1">
            <Skawe.components.Icon name="storage"/>
            <div className="nav-link-desc">
              Object Storage
              <span>Powerful compute instances</span>
            </div>
          </Dropdown.Item>
        </LinkContainer>

        <LinkContainer to="/products/load-balancers">
          <Dropdown.Item href="#/action-1">
            <Skawe.components.Icon name="dns"/>
            <div className="nav-link-desc">
              Load Balancers
              <span>Powerful compute instances</span>
            </div>
          </Dropdown.Item>
        </LinkContainer>
      </Dropdown.Menu>
    </Dropdown>

    <Link to={{ pathname: '/marketplace' }} className="nav-link">
      Marketplace
    </Link>

    { currentUser ? <NavLoggedIn user={currentUser} /> : 

    <React.Fragment>
      <Link to={{ pathname: '/register' }} className="nav-link">
        Register
      </Link>

      <Skawe.components.Button variant="white" isLink={true} path="/login">
        Login
      </Skawe.components.Button>
    </React.Fragment> }
  </Nav>

const Header = (props, {currentUser}) => {
  return (
    <Navbar variant="light">
      <Skawe.components.Logo logoUrl={logoUrl} siteTitle={siteTitle}/>
      <NavLinks currentUser={currentUser} />
    </Navbar>
  )
}

const HeaderContainer = Skawe.withAccount(Header);
Skawe.registerComponent('Header', HeaderContainer);
