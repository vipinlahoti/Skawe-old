import { replaceComponent } from 'meteor/vulcan:lib';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Error404 = () => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <h4 className="display-3"><FormattedMessage id="app.404"/></h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
replaceComponent('Error404', Error404);
