import Skawe from 'meteor/skawe:lib';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tab, Nav, Row, Col, Card } from 'react-bootstrap';

const SupportTicketClosed = (props, context) => {
  return (
    <div className="support-tickets">
      <Skawe.components.SupportTicketHeaders />

      <Row>
        <Col>
          <div className="flex-column nav nav-pills" role="tablist">
            <div className="nav-item">
              <Link to={{ pathname: '/accounts/tickets' }} className="nav-link" role="tab">
                Open Tickets
              </Link>
            </div>
            <div className="nav-item">
              <Link to={{ pathname: '/accounts/tickets/closed' }} className="nav-link active" role="tab">
                Closed Tickets
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="tab-content mt-2">
            <div className="instances__list">
              <table className="table support__close">
                <thead>
                  <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Ticket ID</th>
                    <th scope="col">Created Date</th>
                    <th scope="col">Updated Date</th>
                    <th scope="col">Updated By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h6 className="title-6 mb-0">
                        <Link to={{ pathname: '/accounts/tickets/summary' }} className="d-flex middle-xs">
                          Multiple Instances from API
                        </Link>
                      </h6>
                    </td>
                    <td>skawe0923728176</td>
                    <td>2020-06-13 22:03:03</td>
                    <td>2020-06-13 22:03:03</td>
                    <td>rlonergan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

Skawe.registerComponent('SupportTicketClosed', SupportTicketClosed);
