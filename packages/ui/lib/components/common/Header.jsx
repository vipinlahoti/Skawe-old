import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavDropdown, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const siteTitle = Skawe.settings.get('title', 'Skawe');
const logoUrl = Skawe.settings.get('logoUrl');

const NavLoggedIn = () =>
  <Skawe.components.Button className="ml-1" variant="white-fill" isLink={true} path="/accounts/dashboard">
    My Account
  </Skawe.components.Button>

const NavLinks = ({currentUser}) => 
  <React.Fragment>
    <Nav className="ml-3 mr-auto">
      <NavDropdown title="Products" id="top-mega-menu">
        <div className="container">
          <div className="section-small">

            <Row>
              <Col md={3}>
                <div className="ml-3 nav-products">
                  <h6 className="nav-title">Featured</h6>
                  <LinkContainer to="/products/cloud-instance">
                    <NavDropdown.Item>
                      Cloud Instance
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/products/storage">
                    <NavDropdown.Item>
                      Storage
                    </NavDropdown.Item>
                  </LinkContainer>
                </div>
              </Col>

              <Col md={3}>
                <div className="ml-3 nav-products">
                  <h6 className="nav-title">Storage</h6>
                  <LinkContainer to="/products/object-storage">
                    <NavDropdown.Item>
                      Volume Block Storage
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/products/backups">
                    <NavDropdown.Item>
                      Backups
                    </NavDropdown.Item>
                  </LinkContainer>
                </div>
              </Col>

              <Col md={3}>
                <div className="ml-3 nav-products">
                  <h6 className="nav-title">Networking</h6>
                  <LinkContainer to="/products/load-balancers">
                    <NavDropdown.Item>
                      Load Balancers
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/products/additional-ip">
                    <NavDropdown.Item>
                      Additional IPs
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/products/dns-manager">
                    <NavDropdown.Item>
                      DNS Manager
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/products/ddos-protection">
                    <NavDropdown.Item>
                      DDOS Protection
                    </NavDropdown.Item>
                  </LinkContainer>
                </div>
              </Col>

              <Col md={3}>
                
              </Col>
            </Row>

          </div>
        </div>
      </NavDropdown>

      <Link to={{ pathname: '/marketplace' }} className="nav-link">
        Marketplace
      </Link>

      <Link to={{ pathname: '/pricing' }} className="nav-link">
        Pricing
      </Link>
    </Nav>
    
    <div>
      { currentUser ? <NavLoggedIn currentUser={currentUser} /> : 
      <React.Fragment>
        <Skawe.components.Button variant="white" isLink={true} path="/register">
          Register
        </Skawe.components.Button>

        <Skawe.components.Button variant="white-fill" isLink={true} path="/login">
          Login
        </Skawe.components.Button>
      </React.Fragment> }
    </div>
  </React.Fragment>

const Header = ({currentUser}) =>
  <Navbar variant="light">
    <Skawe.components.Logo logoUrl={logoUrl} siteTitle={siteTitle}/>
    <Navbar.Toggle aria-controls="skawe-navbar-nav" />
    <Navbar.Collapse id="skawe-navbar-nav">
      <NavLinks currentUser={currentUser} />
    </Navbar.Collapse>
  </Navbar>

const HeaderContainer = Skawe.withAccount(Header);
Skawe.registerComponent('Header', HeaderContainer);
