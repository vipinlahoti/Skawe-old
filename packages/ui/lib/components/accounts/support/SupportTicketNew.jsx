import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const SupportTicketNew = () =>
  <div className="support-tickets">
    <Row>
      <Col>
        <h5 className="title-5 mb-1 breadcrumb__wrapper d-flex middle-xs">
          <Link to={{ pathname: '/accounts/tickets' }}>
            Tickets
          </Link>
          <span className="breadcrumb-divider">/</span>
          Open a New Ticket
        </h5>
      </Col>
    </Row>

    <Row>
      <Col>
        <ul className="list small-list">
          <li>
            we are here to help if you need us. Please keep in mind that not all topics are within the scope of our support. For overall system status, please see &nbsp;
            <Link to={{ pathname: '#' }} className="nav-link">
              status.skawe.in
            </Link>.
          </li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col>
        <div className="new-ticket__wrapper mt-1">
          New Ticket form
        </div>
      </Col>
    </Row>
  </div>

Skawe.registerComponent('SupportTicketNew', SupportTicketNew);
