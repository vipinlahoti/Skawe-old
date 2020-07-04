import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SupportTicketHeaders = (props, context) =>
  <Row>
    <Col>
      <h5 className="title-5 mb-1 breadcrumb__wrapper">
        Tickets
      </h5>
    </Col>
    <Col>
      <div className="text-right">
        <Skawe.components.Button variant="primary" path="/accounts/tickets/new" isLink={true}>
          Open New Ticket
        </Skawe.components.Button>
      </div>
    </Col>
  </Row>

Skawe.registerComponent('SupportTicketHeaders', SupportTicketHeaders);
