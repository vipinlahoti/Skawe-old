import Skawe from '@skawe';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

const MiniFooter = ({title, variant, link, className}) =>
  <div className={classNames('section-stripe section-xsmall text-white', className, variant)}>
    <Container>
      <Row className="center-xs">
        <Col sm={8}>
          <Row className={className}>
            <Col>
              <h4 className="mb-0 font-weight-light title-5 text-left">{title}</h4>
            </Col>

            {link ?
              (<Col>
                <Skawe.components.Button variant="white" type="link" path={link}>
                  Get Started
                </Skawe.components.Button>
              </Col>)
            : null }

          </Row>
        </Col>
      </Row>
    </Container>
  </div>

Skawe.registerComponent('MiniFooter', MiniFooter);
