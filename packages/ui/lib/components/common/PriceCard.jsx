import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Col, ListGroup, Form } from 'react-bootstrap';

const PriceCard = ({formId, formName, handleChange, title, description, listPrice, salePrice}) =>
<ListGroup>
  <Form.Label className="admin-checkbox">
    <input 
      type="radio"
      id={formId}
      name={formName}
      onChange={handleChange}
    />
    <ListGroup.Item className="p-1">
      <div className="admin-card-description">
        <h5 className="title-5">{title}</h5>
        <p className="mb-1" dangerouslySetInnerHTML={{ __html: description }}></p>
        <div>
          <span className="title-5 mr-1 text-primary">₹ {salePrice}/mo</span>
          {/* <span className="title-5 list-price">{listPrice}/h</span> */}
        </div>
      </div>
    </ListGroup.Item>
  </Form.Label>
</ListGroup>

Skawe.registerComponent('PriceCard', PriceCard);
