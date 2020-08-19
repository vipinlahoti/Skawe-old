import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const button = <Components.Button variant="primary-fill" className="mr-1">Create <Components.Icon name="keyboard_arrow_down" iconClass="mr-0"/></Components.Button>;
  
  return (
    <Nav className="ml-auto">
      <Components.ModalTrigger size="sm" title="Create New" component={button}>
        <Components.AdminCreateNew />
      </Components.ModalTrigger>
      <Components.Button variant="primary-link" className="btn-icon icon-lg" path="/accounts/events" isLink={true}>
        <Components.Icon name="notifications_none" />
      </Components.Button>
      <Components.UsersMenu />
    </Nav>
  )
}

const AdminHeader = () => {
  return (
    <Navbar variant="admin">
      <NavLinks />
    </Navbar>
  )
}

registerComponent({ name: 'AdminHeader', component: AdminHeader });
