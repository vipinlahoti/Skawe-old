import Skawe from 'meteor/skawe:lib';
import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Nav, Row, Col, Card } from 'react-bootstrap';

const SupportTicket = (props, context) => {
  return (
    <div className="support-tickets">
      <Row>
        <Col>
          <h5 className="title-5 mb-1">Support Tickets</h5>
        </Col>
        <Col>
          <Skawe.components.ModalTrigger title="Support Ticket" component={
              <div className="text-right">
                <Skawe.components.Button variant="primary" size="small">
                  Open New Ticket
                </Skawe.components.Button>
              </div>
            }>
            <Skawe.components.NewSupportTicket />
          </Skawe.components.ModalTrigger>
        </Col>
      </Row>

      <Row>
        <Col>
          <Tab.Container defaultActiveKey="first" className="pt-0">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="first">Open Tickets</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Closed Tickets</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                Support Tickets List
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                Support Tickets List
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  )
}

Skawe.registerComponent('SupportTicket', SupportTicket);
