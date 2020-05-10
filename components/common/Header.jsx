import Skawe from '@skawe';
import Link from 'next/link';
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const siteTitle = 'Skawe';

const LeftNavLinks = () => 
  <Nav className="mr-auto">
    <Link href='/'>
      <a className="nav-link">
        Domains
      </a>
    </Link>

    <Link href='/register'>
      <a className="nav-link">
        Hosting
      </a>
    </Link>

    <Link href='/register'>
      <a className="nav-link">
        Security
      </a>
    </Link>
  </Nav>


const RightNavLinks = () => 
  <Nav className="ml-auto">
    <Link href='/help'>
      <a className="nav-link">
        Help
      </a>
    </Link>

    <NavDropdown title="Login" id="nav-dropdown" alignRight>
      <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
    </NavDropdown>
  </Nav>

const Header = props => {
  return (
    <Navbar>
      <Skawe.components.Logo siteTitle={siteTitle}/>
      <RightNavLinks />
    </Navbar>
  )
}

Skawe.registerComponent('Header', Header);
