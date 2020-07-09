import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const siteTitle = Skawe.settings.get('title', 'Skawe');

const Footer = () =>
  <footer className="section-medium">
      <Container>
        <Row className="between-xs">
          <Col md={3} sm={4} xs={4}>
            <h6 className="title-6">Products</h6>
            <Nav className="vertical-nav">
              <Link to={{ pathname: '/products/cloud-instance' }} className="nav-link">
                Cloud Instance
              </Link>
              <br />
              <Link to={{ pathname: '/products/storage' }} className="nav-link">
                Storage
              </Link>
              <br />
              <Link to={{ pathname: '/products/block-storage' }} className="nav-link">
                Volume Block Storage
              </Link>
              <br />
              <Link to={{ pathname: '/products/backups' }} className="nav-link">
                Backups
              </Link>
              <br />
              <Link to={{ pathname: '/products/load-balancers' }} className="nav-link">
                Load Balancers
              </Link>
              <br />
              <Link to={{ pathname: '/products/additional-ip' }} className="nav-link">
                Additional IP
              </Link>
              <br />
              <Link to={{ pathname: '/products/dns-manager' }} className="nav-link">
                DNS Manager
              </Link>
              <br />
              <Link to={{ pathname: '/products/ddos-protection' }} className="nav-link">
                DDoS Protection
              </Link>              
            </Nav>
          </Col>

          <Col md={3} sm={4} xs={4}>
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

          <Col md={3} sm={4} xs={4}>
            <h6 className="title-6">Contact</h6>
            <Nav className="vertical-nav">
              <Link to={{ pathname: '/contact-sales' }} className="nav-link">
                Contact sales
              </Link>
              <br />
              <Link to={{ pathname: '/login' }} className="nav-link">
                Log In
              </Link>
            </Nav>
          </Col>

          <Col md={3} sm={6} xs={4}>
            <div className="footer-right">
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
