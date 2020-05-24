import { getSetting, Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavLinks = () => 
  <Nav className="ml-auto">
    <Components.UsersMenu />
  </Nav>

const AdminHeader = () => {
  return (
    <Navbar variant="admin">
      <NavLinks />
    </Navbar>
  )
}

registerComponent({ name: 'AdminHeader', component: AdminHeader });
