import { getSetting, Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const siteTitle = getSetting('title', 'Skawe');
const logoUrl = getSetting('logoUrl');

const NavLinks = () => 
  <Nav>
    <Link to={{ pathname: '/accounts/dashboard' }} className="nav-link">
      Dashboard
    </Link>
    <Link to={{ pathname: '/accounts/list-cloud-instance' }} className="nav-link">
      Cloud Instances
    </Link>
    <Link to={{ pathname: '/accounts/list-object-storage' }} className="nav-link">
      Storage
    </Link>
    <Link to={{ pathname: '/accounts/list-backups' }} className="nav-link">
      Backups
    </Link>
    <Link to={{ pathname: '/accounts/list-load-balancer' }} className="nav-link">
      Load Balancer
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

const AdminSidebar = () => {
  return (
    <div className="navbar-sidebar">
      <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle}/>
      <NavLinks />
    </div>
  )
}

registerComponent({ name: 'AdminSidebar', component: AdminSidebar });
