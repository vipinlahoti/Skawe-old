import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';
import { Distributions } from '../../../modules/distributions/index.js';

class Distribution extends Component {

  handleChange = async e => {
    const id = e.target.id;
    const splitId = id.split(',');
    this.props.selectedDistribution(splitId);
    this.props.closeModal();
  }

  render() {
    const { results, title, markSelectedDistro } = this.props;
    const setDistributionList = _groupBy(results, 'vendor');

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
                      id={`${distro['distId']},${distro['vendor']},${distro['label']},${distro['image']}`}
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

const options = {
  collection: Distributions,
  fragmentName: 'DistributionItem',
};

registerComponent({ name: 'Distribution', component: Distribution, hocs: [[withMulti2, options]] });
