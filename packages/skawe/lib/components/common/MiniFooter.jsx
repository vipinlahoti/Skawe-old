import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

const MiniFooter = ({title, variant, link, className, newsLetter}) =>
  <div className={classNames('section-stripe section-small bg-light', className, variant, newsLetter ? 'line-height-lg' : null)}>
    <Container>
      <Row className="center-xs">
        <Col lg={10} md={12} sm={12} xs={4}>
          <Row className={className}>
            <Col lg={8} md={6} sm={12} xs={4}>
              <h4 className="mb-0 font-weight-light title-5">{title}</h4>
            </Col>

            {link ?
              (
                <Col lg={4} md={6} sm={12} xs={4}>
                  <Components.Button variant="primary" isLink={true} path={link}>
                    Get Started
                  </Components.Button>
                </Col>
              )
            : null }

          </Row>
        </Col>
      </Row>
    </Container>
  </div>

registerComponent({ name: 'MiniFooter', component: MiniFooter });
