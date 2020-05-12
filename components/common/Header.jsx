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
    <Skawe.components.NavLink activeClassName="active" href="/domains">
      <a className="nav-link">
        Domains
      </a>
    </Skawe.components.NavLink>

    <Skawe.components.NavLink activeClassName="active" href='/hosting'>
      <a className="nav-link">
        Hosting
      </a>
    </Skawe.components.NavLink>

    <Skawe.components.NavLink activeClassName="active" href='/register'>
      <a className="nav-link">
        Register
      </a>
    </Skawe.components.NavLink>

    <Skawe.components.Button type="link" path="/login">
      Login
    </Skawe.components.Button>

    <Skawe.components.NavLink href='/cart'>
      <a className="nav-link nav-cart">
        <Skawe.components.Icon name="shopping_cart" iconClass="" />
      </a>
    </Skawe.components.NavLink>

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
