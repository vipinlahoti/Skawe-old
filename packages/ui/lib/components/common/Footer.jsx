import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const siteTitle = Skawe.settings.get('title', 'Skawe');

const Footer = () =>
  <footer className="section-small">
      <Container>
        <Row className="between-xs">
          <Col>
            <h6 className="title-6">Products</h6>
            <Nav className="vertical-nav">
              <Link to={{ pathname: '/products/cloud-instance' }} className="nav-link">
                Cloud Instance
              </Link>
              <br />
              <Link to={{ pathname: '/products/object-storage' }} className="nav-link">
                Object Storage
              </Link>
              <br />
              <Link to={{ pathname: '/products/block-storage' }} className="nav-link">
                Block Storage
              </Link>
              <br />
              <Link to={{ pathname: '/products/load-balancers' }} className="nav-link">
                Load Balancers
              </Link>
            </Nav>
          </Col>

          <Col>
            <h6 className="title-6">Marketplace</h6>
            <Nav className="vertical-nav">
              <Link to={{ pathname: '/marketplace' }} className="nav-link">
                Operating System
              </Link>
              <br />
              <Link to={{ pathname: '/marketplace' }} className="nav-link">
                One click Apps
              </Link>
            </Nav>
          </Col>

          <Col>
            <h6 className="title-6">Contact</h6>
            <Nav className="vertical-nav">
              <Link to={{ pathname: '/contact-us' }} className="nav-link">
                Contact sales
              </Link>
              <br />
              <Link to={{ pathname: '/login' }} className="nav-link">
                Log In
              </Link>
            </Nav>
          </Col>

          <Col></Col>

          <Col>
            <div className="text-right">
              <Skawe.components.Logo siteTitle={siteTitle}/>
              <div className="copyright mt-1">Copyright &copy; 2020 All Rights Reserved.</div>
            </div>
          </Col>
        </Row>

        <hr />
        
        <Row>
          <Col>
            <div className="copyright">
              Use of this Site is subject to express terms of use. <br />
              By using this site, you signify that you agree to be bound by these &nbsp;
              <Link to={{ pathname: '/tos/universal-tos'}}>
                Universal Terms of Service
              </Link>.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>

Skawe.registerComponent('Footer', Footer);
