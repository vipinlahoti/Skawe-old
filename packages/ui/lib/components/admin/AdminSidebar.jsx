import Skawe from 'meteor/skawe:lib';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const siteTitle = Skawe.settings.get('title', 'Skawe');
const logoUrl = Skawe.settings.get('logoUrl');

const NavLinks = ({user}) => 
  <Nav>
    <Link to={{ pathname: '/accounts/dashboard' }} className="nav-link">
      Dashboard
    </Link>
    <Link to={{ pathname: '/accounts/list-cloud-instance' }} className="nav-link">
      Cloud Instances
    </Link>
    <Link to={{ pathname: '/accounts/list-object-storage' }} className="nav-link">
      Block Storage
    </Link>
    <Link to={{ pathname: '/accounts/list-dns-manager' }} className="nav-link">
      Domains
    </Link>
    <Link to={{ pathname: '/accounts/list-cloud-instance/create' }} className="nav-link">
      Marketplace
    </Link>
    <Link to={{ pathname: '/account' }} className="nav-link">
      Accounts
    </Link>
    <Link to={{ pathname: '/accounts/help' }} className="nav-link">
      Help
    </Link>
  </Nav>

const AdminSidebar = ({currentUser}) => {
  return (
    <div className="navbar-sidebar">
      <Skawe.components.Logo logoUrl={logoUrl} siteTitle={siteTitle}/>
      <NavLinks user={currentUser} />
    </div>
  )
}

const AdminSidebarContainer = Skawe.withAccount(AdminSidebar);
Skawe.registerComponent('AdminSidebar', AdminSidebarContainer);
