import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { ListGroup, Form } from 'react-bootstrap';

class UsersEditPaymentMethod extends Component {
  handleChange = async e => {
    this.props.onHide(true)
  }

  render() {
    return (
      <React.Fragment>
        <h6 className="title-6">Saved Payments </h6>
        <div className="mb-2">
          {[
            'visa', 'master-card', 'maestro', 'amex', 'diners-club', 'discover', 'jcb', 'unionpay'
            ].map((card, index) => 
            <ListGroup className="d-row between-xs middle-xs" key={index}>
              <Form.Label className="admin-checkbox admin-selectbox w-90">
                <input 
                  type="radio"
                  name="selectPaymentMethod"
                  id="visa"
                  onChange={this.handleChange}
                />
                <ListGroup.Item>
                  <div className="admin-card-description">
                    <div className="d-flex middle-xs">
                      <div className="admin-card-image d-flex middle-xs">
                        <img src={`/images/${card}.png`} alt={card} />
                      </div>
                      <p className="mb-0 d-flex middle-xs"><span className="dots">.... .... .... </span> <span> 0199</span></p>
                    </div>
                  </div>
                </ListGroup.Item>
              </Form.Label>
              <div>
                <Skawe.components.Button variant="icon icon-md">
                  <Skawe.components.Icon name="delete_forever" iconClass="text-primary" />
                </Skawe.components.Button>
              </div>
            </ListGroup>
          )}
        </div>

        <h6 className="title-6">or Pay via </h6>
        <div className="mb-2">
          {[
            'Credit Card', 'Net Banking', 'Pay using UPI', 'Paytm'
            ].map((card, index) => 
            <ListGroup key={index}>
              <Form.Label className="admin-checkbox admin-selectbox">
                <input 
                  type="radio"
                  name="newSelectPaymentMethod"
                  id="visa"
                  onChange={this.handleChange}
                />
                <ListGroup.Item>
                  <div className="admin-card-description">
                    <p className="mb-0">{card}</p>
                  </div>
                </ListGroup.Item>
              </Form.Label>
            </ListGroup>
          )}
        </div>
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('UsersEditPaymentMethod', UsersEditPaymentMethod);
