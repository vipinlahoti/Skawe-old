import { Components, registerComponent, getSetting, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';

const logoUrl = getSetting('logoUrl');
const logoUrlDark = getSetting('logoUrlDark');
const siteTitle = getSetting('title');

const NavLinks = ({user, activeRoute}) => 
  <Nav>
    <Link to={{ pathname: '/accounts/dashboard' }} className={classNames('nav-link', activeRoute === 'dashboard' ? 'active' : '')}>
      Dashboard
    </Link>
    <Link to={{ pathname: '/accounts/list-cloud-instance' }} className={classNames('nav-link', activeRoute === 'list-cloud-instance' ? 'active' : '')}>
      Cloud Instances
    </Link>
    <Link to={{ pathname: '/accounts/list-dns-manager' }} className={classNames('nav-link', activeRoute === 'list-dns-manager' ? 'active' : '')}>
      Domains
    </Link>
    <Link to={{ pathname: '/accounts' }} className={classNames('nav-link', (activeRoute === 'accounts' || activeRoute === 'billing' || activeRoute === 'settings') ? 'active' : '')}>
      Accounts
    </Link>
    <Link to={{ pathname: '/accounts/tickets' }} className={classNames('nav-link', activeRoute === 'tickets' ? 'active' : '')}>
      Help
    </Link>
  </Nav>

const AdminSidebar = ({currentUser, currentRoute}) => {
  const getCurrentRoute = currentRoute.split('/');
  let setCurrentRoute = getCurrentRoute[2];
  if (setCurrentRoute === undefined) {
    setCurrentRoute = 'accounts'
  }

  const getTheme = currentUser.theme

  return (
    <div className="navbar-sidebar">
      {getTheme === 'dark-mode' ?
        <Components.DashboardLogo logoUrl={logoUrlDark} siteTitle={siteTitle}/>
      : <Components.DashboardLogo logoUrl={logoUrl} siteTitle={siteTitle}/> }
      <NavLinks user={currentUser} activeRoute={setCurrentRoute} />
    </div>
  )
}

registerComponent({ name: 'AdminSidebar', component: AdminSidebar, hocs: [withCurrentUser] });
