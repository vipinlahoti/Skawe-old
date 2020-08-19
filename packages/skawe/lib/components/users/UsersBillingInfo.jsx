import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UsersBillingInfo extends Component {

  render() {
    const { currentUser } = this.props;

    return (
      <React.Fragment>
        <Components.UsersHeaders />

        <Container>
          <Row>
            <Col>
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
                  <Col md={6} sm={12} xs={4}>
                    <Components.MakePayment input={{ filter: { userId: { _eq: currentUser._id } } }} />
                  </Col>
                
                  <Col md={6} sm={12} xs={4}>
                    <div className="bg-light p-1 mb-1">
                      <Row>
                        <Col>
                          <h6 className="title-6">Payment Method</h6>
                        </Col>
                        <Col>
                          <div className="d-flex end-xs">
                            <Components.ModalTrigger title="Edit Payment Method" component={
                              <Components.Button variant="primary-link" size="small" className="pr-0">
                                <Components.Icon name="edit" />
                                Edit
                              </Components.Button>
                            }>
                              <Components.UsersEditPaymentMethod />
                            </Components.ModalTrigger>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <ul className="list small-list">
                            <li><span className="list-label">Card ending with 0199</span></li>
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
                                    <Components.Icon name="cloud_download" iconClass="mr-1 text-primary" />
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
                                    <Components.Icon name="cloud_download" iconClass="mr-1 text-primary" />
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
                                    <Components.Icon name="cloud_download" iconClass="mr-1 text-primary" />
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
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

registerComponent({ name: 'UsersBillingInfo', component: UsersBillingInfo, hocs: [withCurrentUser] });
