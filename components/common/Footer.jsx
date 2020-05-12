import Skawe from '@skawe';
import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const siteTitle = 'Skawe';

const Footer = () =>
  
  <React.Fragment>
    <footer className="section-small">
      <Container>
        <Row className="between-xs">
          <Col>
            <Nav>
              <Link href='/'>
                <a className="nav-link">
                  Help
                </a>
              </Link>

              <Link href='/'>
                <a className="nav-link">
                  Contact Us
                </a>
              </Link>

              <Link href='/'>
                <a className="nav-link">
                  WHOIS
                </a>
              </Link>
              <hr />
              <div className="copyright">
                Use of this Site is subject to express terms of use. <br />
                By using this site, you signify that you agree to be bound by these &nbsp;
                <Link href='/universal-tos'>
                  <a>Universal Terms of Service</a>
                </Link>
                .
              </div>
              <div className="copyright mt-1">
                Copyright &copy; 1999 - 2020 All Rights Reserved. &nbsp;
                <Link href='/privacy-policy'>
                  <a>Privacy Policy</a>
                </Link>.
              </div>
            </Nav>
          </Col>
          <Col>
            <Skawe.components.Logo siteTitle={siteTitle}/>
          </Col>
        </Row>
      </Container>
    </footer>
  </React.Fragment>

Skawe.registerComponent('Footer', Footer);
