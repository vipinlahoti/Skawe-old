import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const SupportTicketSummary = ({currentUser}) => {
  return (
    <div className="support-tickets">
      <Row>
        <Col>
          <h5 className="title-5 mb-1 breadcrumb__wrapper d-flex middle-xs">
            <Link to={{ pathname: '/accounts/tickets' }}>
              Tickets
            </Link>
            <span className="breadcrumb-divider">/</span>
            Multiple Instances from API
          </h5>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <ul className="list small-list count-list">
            <li><span className="list-label">Ticket ID:</span> #KGV-93LCC </li>
            <li>
              <span className="list-label">Status:</span> 
              <span className="badge badge-primary">Open</span>
              <span className="badge">Closed</span>
            </li>
            <li><span className="list-label">Last updated:</span> 2020-06-14 00:38:00</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="thread__wrapper">
            <div className="media">
              <Skawe.components.Avatar size="small" className="mr-1" user={currentUser} link={false} />
              <div className="media__body">
                <div className="media__body-heading"><strong>vipinlahoti</strong> / <span className="media-time">commented 2 days ago</span></div>
                <div className="media__body-description">
                  <div className="mt-1 mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>
                  <div className="media__body-vote"></div>
                </div>
              </div>
            </div>

            <div className="media">
              <Skawe.components.Avatar size="small" className="mr-1" user={currentUser} link={false} />
              <div className="media__body media__body--staff">
                <div className="media__body-heading"><strong>vipinlahoti</strong> / <span className="media-time">commented 2 days ago</span> <span className="badge badge-blue">Staff</span></div>
                <div className="media__body-description">
                  <div className="mt-1 mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>
                  <div className="media__body-vote"></div>
                </div>
              </div>
            </div>

            <div className="media">
              <div className="media__reply">
                <h6 className="title-6">Reply</h6>
                <textarea></textarea>
                <Skawe.components.Button variant="primary">
                  Add a Reply
                </Skawe.components.Button>
              </div>
            </div>

          </div>
        </Col>
      </Row>
    </div>
  )
}

const SupportTicketSummaryContainer = Skawe.withAccount(SupportTicketSummary);
Skawe.registerComponent('SupportTicketSummary', SupportTicketSummaryContainer);
