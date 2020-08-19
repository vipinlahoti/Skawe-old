import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class MakePayment extends Component {
  render() {
    return (
      <div className="bg-light p-1 mb-1">
        <Row>
          <Col>
            <h6 className="title-6">Payment Dues</h6>
          </Col>
          <Col>
            <div className="d-flex end-xs">
              <Components.ModalTrigger title="Make a Payment" component={
                <Components.Button variant="primary-link" size="small" className="pr-0">
                  <Components.Icon name="credit_card" />
                  Make a Payment
                </Components.Button>
              }>
                <Components.UsersMakePayment />
              </Components.ModalTrigger>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <ul className="list small-list count-list">
              <li><span className="list-label">Uninvoiced Charges:</span> $1.89</li>
              {/*
              <li><span className="list-label">Promotion uc5kqsx92e:</span> -($100.00)</li>
              <li><span className="list-label">Payment & Credits:</span> $0.00</li>
              */}
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}

registerComponent({ name: 'MakePayment', component: MakePayment });
