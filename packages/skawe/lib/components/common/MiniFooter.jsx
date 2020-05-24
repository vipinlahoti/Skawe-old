import { Components, registerComponent } from 'meteor/vulcan:core';
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
                  <Components.Button variant="white" isLink={true} path={link}>
                    Get Started
                  </Components.Button>
                </Col>
              )
            : null }


            {newsLetter ?
            (
              <Col>
                <Components.NewsLetter type="inline" />
              </Col>
            ) : null }

          </Row>
        </Col>
      </Row>
    </Container>
  </div>

registerComponent({ name: 'MiniFooter', component: MiniFooter });
