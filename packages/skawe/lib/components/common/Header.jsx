import { withMessages, withCurrentUser, getSetting, Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { NavDropdown, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';
import { LinkContainer } from 'react-router-bootstrap';
import { Pages } from '../../modules/pages/index.js';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title');

const NavLoggedIn = () =>
  <Components.Button className="ml-1" variant="white-fill" isLink={true} path="/accounts/dashboard">
    My Account
  </Components.Button>

const NavLinks = ({authenticated, setPageLists}) => {
  return (
    <React.Fragment>
      <Nav className="ml-3 mr-auto">
        <NavDropdown title="Products" id="top-mega-menu">
          <div className="container">
            <div className="section-small">

              <Row>
                {Object.entries(setPageLists).map(([key, value], index) => 
                  <React.Fragment key={index}>
                    {key !== 'Home'
                      && key !== 'Company'
                      && key !== 'Contact'
                      && key !== 'null' ?
                      <Col md={3}>
                        <div className="ml-3 nav-products">
                          <h6 className="nav-title">{key}</h6>
                          {value.map((link, index) => 
                            <LinkContainer to={link.pagePath} key={index}>
                              <NavDropdown.Item>
                                {link.title}
                              </NavDropdown.Item>
                            </LinkContainer>
                          )}
                        </div>
                      </Col>
                    : null }
                  </React.Fragment>
                 )}
                <Col md={3}>
                  
                </Col>
              </Row>

            </div>
          </div>
        </NavDropdown>

        {Object.entries(setPageLists).map(([key, value], index) => 
          <React.Fragment key={index}>
            {key === 'null' ?
              <React.Fragment>
                {value.map((link, index) => 
                  <Link to={{ pathname: link.pagePath}} key={index} className="nav-link">
                    {link.title}
                  </Link>
                )}
              </React.Fragment>
            : null }
          </React.Fragment>
         )}
      </Nav>
      
      <div>
        { authenticated ? <NavLoggedIn authenticated={authenticated} /> : 
        <React.Fragment>
          {/*
          <Components.Button variant="white" isLink={true} path="/register">
            Register
          </Components.Button>
          */}
          <Components.Button variant="white-fill" isLink={true} path="/accounts/dashboard">
            Get Started
          </Components.Button>
        </React.Fragment> }
      </div>
    </React.Fragment>
  )
}


const Header = ({ currentUser, flash, history, loading, results, totalCount }) => {
  const getPageLists = [];

  for (let i = 0; i < totalCount; i++) {
    const setPageList = {
      id: results[i]['_id'],
      title: results[i]['title'],
      slug: results[i]['slug'],
      pageUrl: results[i]['pageUrl'],
      pagePath: results[i]['pagePath'],
      features: results[i]['features'] && results[i]['features'][0]['name'],
      orderBy: results[i]['features'] && results[i]['features'][0]['order']
    }

    getPageLists.push(setPageList);
  }

  const setPageLists = _groupBy(getPageLists, 'features');

  return (
    <Navbar variant="light">
      <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
      <Navbar.Toggle aria-controls="skawe-navbar-nav" />
      <Navbar.Collapse id="skawe-navbar-nav">
        {setPageLists ? 
          <NavLinks
            authenticated={currentUser}
            setPageLists={setPageLists}
          />
        : <Components.Loading /> }
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  currentUser: PropTypes.object,
};

const options = {
  collection: Pages,
  fragmentName: 'PageItem',
};

registerComponent({ name: 'Header', component: Header, hocs: [withCurrentUser, withMessages, withRouter, [withMulti2, options]] });
