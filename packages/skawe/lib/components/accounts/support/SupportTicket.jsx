import { Components, registerComponent, withAccess } from 'meteor/vulcan:core';
import { FormattedMessage, intlShape } from 'meteor/vulcan:i18n';
import Users from 'meteor/vulcan:users';
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
          <Components.ModalTrigger size="full" title={context.intl.formatMessage({ id: 'help.support_ticket' })} component={
              <div className="text-right">
                <Components.Button variant="black" size="small">
                  Open New Ticket
                </Components.Button>
              </div>
            }>
            <Components.NewSupportTicket />
          </Components.ModalTrigger>
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
                <Components.Datatable
                  collection={Users}
                  showNew={false}
                  showSearch={false}
                  columns={[
                    {
                      name: 'subject',
                      sortable: true,
                    },
                    {
                      name: 'ticketId',
                      sortable: true,
                    },
                    {
                      name: 'dateCreated',
                      sortable: true,
                    },
                    {
                      name: 'lastUpdated',
                      filterable: true,
                    },
                    {
                      name: 'updatedBy',
                      filterable: true,
                    },
                  ]}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Components.Datatable
                  collection={Users}
                  showNew={false}
                  showEdit={true}
                  showSearch={false}
                  columns={[
                    {
                      name: 'subject',
                      sortable: true,
                    },
                    {
                      name: 'ticketId',
                      sortable: true,
                    },
                    {
                      name: 'dateCreated',
                      sortable: true,
                    },
                    {
                      name: 'lastUpdated',
                      filterable: true,
                    },
                    {
                      name: 'updatedBy',
                      filterable: true,
                    },
                  ]}
                />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  )
}

SupportTicket.contextTypes = {
  messages: PropTypes.object,
  intl: intlShape
};

registerComponent('SupportTicket', SupportTicket);
