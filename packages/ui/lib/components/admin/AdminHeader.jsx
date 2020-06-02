import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavLinks = () => 
  <Nav className="ml-auto">
    <Dropdown>
      <Dropdown.Toggle size="small" id="create-dd">
        Create
      </Dropdown.Toggle>

      <Dropdown.Menu alignRight>
        <LinkContainer to={`/accounts/list-cloud-instance/create`}>
          <Dropdown.Item eventKey="1">Cloud Instances</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to={`/accounts/list-block-storage/create`}>
          <Dropdown.Item eventKey="2">Block Storage</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to={`/accounts/list-dns-manager`}>
          <Dropdown.Item eventKey="4">Domains</Dropdown.Item>
        </LinkContainer>
      </Dropdown.Menu>
    </Dropdown>
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
