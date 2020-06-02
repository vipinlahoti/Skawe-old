import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

const MiniFooter = ({title, variant, link, className, newsLetter}) =>
  <div className={classNames('section-stripe section-small text-white', className, variant, newsLetter ? 'line-height-lg' : null)}>
    <Container>
      <Row className="center-xs">
        <Col sm={12} md={10}>
          <Row className={className}>
            <Col>
              <h4 className="mb-0 font-weight-light title-5">{title}</h4>
            </Col>

            {link ?
              (
                <Col>
                  <Skawe.components.Button variant="white" isLink={true} path={link}>
                    Get Started
                  </Skawe.components.Button>
                </Col>
              )
            : null }


            {newsLetter ?
            (
              <Col>
                <Skawe.components.NewsLetter type="inline" />
              </Col>
            ) : null }

          </Row>
        </Col>
      </Row>
    </Container>
  </div>

Skawe.registerComponent('MiniFooter', MiniFooter); 
