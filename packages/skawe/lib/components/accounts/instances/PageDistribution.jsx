import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';
import { Distributions } from '../../../modules/distributions/index.js';

class PageDistribution extends Component {
  render() {
    const { results } = this.props;
    const setDistributionList = _groupBy(results, 'vendor');

    return (
      <div className="tabpanel-list center-xs d-flex">
        {Object.entries(setDistributionList).map(([key, value], index) => 
          <div className="ml-1 mr-1" key={index}>
            <img src={`/images/${(key).toLowerCase()}.png`} alt={key} />
            <h6 className="title-6 mb-0">{key}</h6>
          </div>
        )}
      </div>
    )
  }
}

const options = {
  collection: Distributions,
  fragmentName: 'DistributionItem',
};

registerComponent({ name: 'PageDistribution', component: PageDistribution, hocs: [[withMulti2, options]] });
