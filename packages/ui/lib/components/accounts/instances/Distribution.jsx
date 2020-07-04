import Skawe from 'meteor/skawe:lib';
import { Distributions } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';

class Distribution extends Component {

  handleChange = async e => {
    const id = e.target.id;
    const splitId = id.split(',');
    this.props.selectedDistribution(splitId);
    this.props.onHide(true)
  }

  render() {
    const { dataList, title, markSelectedDistro } = this.props;
    const setDistributionList = _groupBy(dataList, 'category');

    return (
      <div className="select-list">
        {Object.entries(setDistributionList).map(([key, value], index) => 
          <React.Fragment key={index}>
            <div className="mb-2">
              <h6 className="title-6">{key}</h6>
              {value.map((distro, index) => 
                <ListGroup key={index}>
                  <Form.Label className="admin-checkbox admin-selectbox">
                    <input 
                      type="radio"
                      name="distributions"
                      id={`${distro['distId']},${distro['category']},${distro['label']},${distro['image']}`}
                      onChange={this.handleChange}
                    />
                    <ListGroup.Item className={markSelectedDistro === distro.label ? 'active' : ''}>
                      <div className="admin-card-description">
                        <div className="d-flex middle-xs">
                          <div className="admin-card-image admin-select-card-image d-flex middle-xs">
                            <img src={distro.image} alt={distro.label} />
                          </div>
                          <p className="mb-0">{distro.label}</p>
                        </div>
                      </div>
                    </ListGroup.Item>
                  </Form.Label>
                </ListGroup>
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

const DistributionContainer = withTracker(() => {
  Meteor.subscribe('distributions.list');

  return {
    dataList: Distributions.find().fetch(),
  };
})(Distribution);

Skawe.registerComponent('Distribution', DistributionContainer);

