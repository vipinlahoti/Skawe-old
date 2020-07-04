import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UsersBillingInfo extends Component {
  state = {
    modalIsOpen: false
  }

  onHide = setState => {
    this.setState({ modalIsOpen: !setState })
  }

  showModal = setModal => {
    this.setState({ modalIsOpen: setModal })
  }

  render() {
    const { modalIsOpen } = this.state;

    return (
      <React.Fragment>
        <Skawe.components.UsersHeaders />

        <div className="flex-column nav nav-pills" role="tablist">
          <div className="nav-item">
            <Link to={{ pathname: '/accounts' }} className="nav-link" role="tab">
              Your Details
            </Link>
          </div>
          <div className="nav-item">
            <Link to={{ pathname: '/accounts/billing' }} className="nav-link active" role="tab">
              Billing Info
            </Link>
          </div>
          <div className="nav-item">
            <Link to={{ pathname: '/accounts/settings' }} className="nav-link" role="tab">
              Settings
            </Link>
          </div>
        </div>

        <div className="tab-content">
          <Row>
            <Col sm={12} md={6}>
              <div className="bg-light p-1 mb-1">
                <Row>
                  <Col>
                    <h6 className="title-6">Payment Dues</h6>
                  </Col>
                  <Col>
                    <div className="d-flex end-xs">
                      <Skawe.components.ModalTrigger title="Make a Payment" component={
                        <Skawe.components.Button variant="primary-link" size="small" className="pr-0">
                          <Skawe.components.Icon name="credit_card" />
                          Make a Payment
                        </Skawe.components.Button>
                      }>
                        <Skawe.components.UsersMakePayment onHide={this.onHide} />
                      </Skawe.components.ModalTrigger>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <ul className="list small-list count-list">
                      <li><span className="list-label">Uninvoiced Charges:</span> $1.89</li>
                      <li><span className="list-label">Promotion uc5kqsx92e:</span> -($100.00)</li>
                      <li><span className="list-label">Payment & Credits:</span> $0.00</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          
            <Col sm={12} md={6}>
              <div className="bg-light p-1 mb-1">
                <Row>
                  <Col>
                    <h6 className="title-6">Payment Method</h6>
                  </Col>
                  <Col>
                    <div className="d-flex end-xs">
                      <Skawe.components.ModalTrigger title="Edit Payment Method" showModal={this.showModal} modalIsOpen={modalIsOpen} component={
                        <Skawe.components.Button variant="primary-link" size="small" className="pr-0">
                          <Skawe.components.Icon name="edit" />
                          Edit
                        </Skawe.components.Button>
                      }>
                        <Skawe.components.UsersEditPaymentMethod onHide={this.onHide} />
                      </Skawe.components.ModalTrigger>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <ul className="list small-list">
                      <li><span className="list-label">Card ending with 0199</span></li>
                      <li><span className="list-label">Expires 08/2024</span></li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="bg-light p-1 mb-1">
                <h6 className="title-6">Payment History</h6>
                <div className="instances__list">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h6 className="title-6 mb-0">
                            <Link to={{ pathname: '/accounts/tickets/summary' }} className="d-flex middle-xs">
                              <Skawe.components.Icon name="cloud_download" iconClass="mr-1 text-primary" />
                              Invoice #12804722
                            </Link>
                          </h6>
                        </td>
                        <td>2020-06-01</td>
                        <td>$0.01</td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="title-6 mb-0">
                            <Link to={{ pathname: '/accounts/tickets/summary' }} className="d-flex middle-xs">
                              <Skawe.components.Icon name="cloud_download" iconClass="mr-1 text-primary" />
                              Invoice #12804722
                            </Link>
                          </h6>
                        </td>
                        <td>2020-06-01</td>
                        <td>$0.01</td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="title-6 mb-0">
                            <Link to={{ pathname: '/accounts/tickets/summary' }} className="d-flex middle-xs">
                              <Skawe.components.Icon name="cloud_download" iconClass="mr-1 text-primary" />
                              Invoice #12804722
                            </Link>
                          </h6>
                        </td>
                        <td>2020-06-01</td>
                        <td>$0.01</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('UsersBillingInfo', UsersBillingInfo);