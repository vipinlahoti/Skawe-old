import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavLinks = () => 
  <Nav className="ml-auto">
    <Skawe.components.ModalTrigger title="Create New" component={
      <Skawe.components.Button variant="primary-fill" className="mr-1">
        Create
      </Skawe.components.Button>
    }>
      <Skawe.components.AdminCreateNew />
    </Skawe.components.ModalTrigger>
    <Skawe.components.UsersMenu />
  </Nav>

const AdminHeader = () => {
  return (
    <Navbar variant="admin">
      <NavLinks />
    </Navbar>
  )
}

Skawe.registerComponent('AdminHeader', AdminHeader);
