import { withMessages, withCurrentUser, getSetting, Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { NavDropdown, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';
import _sortBy from 'lodash/sortBy';
import { LinkContainer } from 'react-router-bootstrap';
import Headroom from 'react-headroom';
import { Pages } from '../../modules/pages/index.js';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title');


class Header extends Component {

  state = {
    showMenu: false
  }

  navbarToggler = () => {
    // class="modal-open"
    document.body.classList.toggle('modal-open');
    this.setState({
      showMenu: !this.state.showMenu  
    });
  }

  navbarTogglerClose = () => {
    document.body.classList.remove('modal-open');
    this.setState({
      showMenu: false
    });
  }

  navLoggedIn = (authenticated) => {
    return (
      <Components.Button className="ml-1" variant="primary-fill" isLink={true} path="/accounts/dashboard">
        My Account
      </Components.Button>
    )
  }

  navLinks = (authenticated, setPageLists) => {
    return (
      <React.Fragment>
        <Nav className="desktop-menu ml-3 mr-auto">
          <NavDropdown title="Products" id="top-mega-menu">
            <div className="container">
              <div className="section-small">
                <Row>
                  {Object.entries(setPageLists).map(([key, value], index) => 
                    <React.Fragment key={index}>
                      {key === 'Compute' ?
                        <Col md={3}>
                          <div className="ml-3 nav-products">
                            <h6 className="nav-title">{key}</h6>
                            {_sortBy(value, ['orderBy']).map((link, index) => 
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
                  {Object.entries(setPageLists).map(([key, value], index) => 
                    <React.Fragment key={index}>
                      {key === 'Storage' ?
                        <Col md={3}>
                          <div className="ml-3 nav-products">
                            <h6 className="nav-title">{key}</h6>
                            {_sortBy(value, ['orderBy']).map((link, index) => 
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
                  {Object.entries(setPageLists).map(([key, value], index) => 
                    <React.Fragment key={index}>
                      {key === 'Networking' ?
                        <Col md={3}>
                          <div className="ml-3 nav-products">
                            <h6 className="nav-title">{key}</h6>
                            {_sortBy(value, ['orderBy']).map((link, index) => 
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

          <NavDropdown title="Features" id="top-mega-features-menu">
            <div className="container">
              <div className="section-small">
                <Row>
                  {Object.entries(setPageLists).map(([key, value], index) => 
                    <React.Fragment key={index}>
                      {key === 'Features' ?
                        <Col md={3}>
                          <div className="ml-3 nav-products">
                            {_sortBy(value, ['orderBy']).map((link, index) => 
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
                </Row>

              </div>
            </div>
          </NavDropdown>

          {Object.entries(setPageLists).map(([key, value], index) => 
            <React.Fragment key={index}>
              {key === 'null' ?
                <React.Fragment>
                  {_sortBy(value, ['orderBy']).map((link, index) => 
                    <Link to={{ pathname: link.pagePath}} key={index} className="nav-link">
                      {link.title}
                    </Link>
                  )}
                </React.Fragment>
              : null }
            </React.Fragment>
           )}
        </Nav>
        
        <div className="desktop-menu">
          { authenticated ? this.navLoggedIn(authenticated) : 
          <React.Fragment>
            {/*
            <Components.Button variant="white" isLink={true} path="/register">
              Register
            </Components.Button>
            */}
            <Components.Button variant="primary-fill" isLink={true} path="/accounts/dashboard">
              Get Started
            </Components.Button>
          </React.Fragment> }
        </div>
      </React.Fragment>
    )
  }

  mobileNavLinks = (authenticated, setPageLists) => {
    const { showMenu } = this.state;

    return (
      <React.Fragment>
        <Nav className="mobile-menu">
          {Object.entries(setPageLists).map(([key, value], index) => 
            <React.Fragment key={index}>
              {key === 'Compute' ?
                <div className="mobile-menu-list mb-1">
                  <h6 className="nav-title">{key}</h6>
                  {_sortBy(value, ['orderBy']).map((link, index) => 
                    <LinkContainer to={link.pagePath} onClick={this.navbarTogglerClose} key={index}>
                      <NavDropdown.Item>
                        {link.title}
                      </NavDropdown.Item>
                    </LinkContainer>
                  )}
                </div>
              : null }
            </React.Fragment>
          )}

          {Object.entries(setPageLists).map(([key, value], index) => 
            <React.Fragment key={index}>
              {key === 'Storage' ?
                <div className="mobile-menu-list mb-1">
                  <h6 className="nav-title">{key}</h6>
                  {_sortBy(value, ['orderBy']).map((link, index) => 
                    <LinkContainer to={link.pagePath} onClick={this.navbarTogglerClose} key={index}>
                      <NavDropdown.Item>
                        {link.title}
                      </NavDropdown.Item>
                    </LinkContainer>
                  )}
                </div>
              : null }
            </React.Fragment>
          )}

          {Object.entries(setPageLists).map(([key, value], index) => 
            <React.Fragment key={index}>
              {key === 'Networking' ?
                <div className="mobile-menu-list mb-1">
                  <h6 className="nav-title">{key}</h6>
                  {_sortBy(value, ['orderBy']).map((link, index) => 
                    <LinkContainer to={link.pagePath} onClick={this.navbarTogglerClose} key={index}>
                      <NavDropdown.Item>
                        {link.title}
                      </NavDropdown.Item>
                    </LinkContainer>
                  )}
                </div>
              : null }
            </React.Fragment>
           )}

          {Object.entries(setPageLists).map(([key, value], index) => 
            <React.Fragment key={index}>
              {key === 'Features' ?
                <div className="mobile-menu-list mb-1">
                  <h6 className="nav-title">{key}</h6>
                  {_sortBy(value, ['orderBy']).map((link, index) => 
                    <LinkContainer to={link.pagePath} onClick={this.navbarTogglerClose} key={index}>
                      <NavDropdown.Item>
                        {link.title}
                      </NavDropdown.Item>
                    </LinkContainer>
                  )}
                </div>
              : null }
            </React.Fragment>
           )}

          {Object.entries(setPageLists).map(([key, value], index) => 
            <React.Fragment key={index}>
              {key === 'null' ?
                <React.Fragment>
                  <h6 className="nav-title">More</h6>
                  {_sortBy(value, ['orderBy']).map((link, index) => 
                    <Link to={{ pathname: link.pagePath}} onClick={this.navbarTogglerClose} key={index} className="nav-link">
                      {link.title}
                    </Link>
                  )}
                </React.Fragment>
              : null }
            </React.Fragment>
           )}
        
          <div>
            { authenticated ? this.navLoggedIn(authenticated) : 
              <Components.Button variant="white-fill" isLink={true} onClick={this.navbarTogglerClose} path="/accounts/dashboard">
                Get Started
              </Components.Button>
            }
          </div>
        </Nav>
      </React.Fragment>
    )
  }

  render () {
    const { currentUser, flash, history, loading, results, totalCount } = this.props;
    const { showMenu } = this.state;
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
      <Headroom style={{zIndex: 9}}>
        <Navbar variant="light">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          
          <button
            className={showMenu ? 'navbar-toggler open' : 'navbar-toggler'}
            type="button"
            aria-controls="skawe-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.navbarToggler}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Navbar.Collapse id="skawe-navbar-nav" className={showMenu ? 'show' : ''}>
            {setPageLists ? 
              <React.Fragment>
                {this.navLinks(currentUser, setPageLists)}
                {this.mobileNavLinks(currentUser, setPageLists)}
              </React.Fragment>
            : <Components.Loading /> }
          </Navbar.Collapse>
        </Navbar>
      </Headroom>
    );
  }
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
