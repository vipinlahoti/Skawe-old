import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Col, ListGroup, Form } from 'react-bootstrap';

const PriceCard = ({formId, formName, handleChange, title, description, listPrice, salePrice, disableActive}) => {
  const getInstanceId = formId.split(',')[0];

  return (
    <ListGroup>
      <Form.Label className="admin-checkbox" disabled={getInstanceId === disableActive}>
        <input 
          type="radio"
          id={formId}
          name={formName}
          onChange={handleChange}
          disabled={getInstanceId === disableActive}
        />
        <ListGroup.Item className="p-1">
          <div className="admin-card-description">
            <h5 className="title-5 d-flex middle-xs">
              {title}
              {getInstanceId === disableActive ?
                <small className="badge badge-primary current-active">Current Plan</small>
                : null }
            </h5>
            <p className="mb-1" dangerouslySetInnerHTML={{ __html: description }}></p>
            <div>
              <span className="title-5 mr-1 text-primary">₹ {salePrice}/hr</span>
              <span className="title-5 list-price">₹ {listPrice}/mo</span>
            </div>
          </div>
        </ListGroup.Item>
      </Form.Label>
    </ListGroup>
  )
}

registerComponent({ name: 'PriceCard', component: PriceCard });
