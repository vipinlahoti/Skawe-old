import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col, ListGroup, Form } from 'react-bootstrap';
import { Plans } from '../../../modules/plans/index.js';

class InstancePlans extends Component {
  state = {
    checkedItems: new Map(),
    apiDataList: this.props.apiData
  }

  handleChange = async e => {
    const id = e.target.id;
    const splitId = id.split(',');
    this.props.selectedPlans(splitId);
  }

  render() {
    const { results, title, description, disableActive, colSize } = this.props;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6">{title}</h6>
        { description ? <p className="d-block mt-1">{description}</p> : null }
        <Row>
          {results && results.map((plans, index) => 
            <Col lg={colSize} md={4} sm={6} xs={4} key={index}>
              <Components.PriceCard
                title={plans.label}
                description={
                  `
                  ${plans.vcpu}CPU </br>
                  ${plans.memory}GB Memory </br>
                  ${plans.transfer}GB Bandwidth
                  `
                }
                salePrice={plans.sellPriceHr}
                listPrice={plans.sellPriceMo}
                formId={`${plans['planId']},${plans['label']},${plans['vcpu']},${plans['disk']},${plans['memory']},${plans['transfer']},${plans['sellPriceHr']},${plans['sellPriceMo']},${plans['sellAddonBackupHr']},${plans['sellAddonBackupMo']}`}
                formName="serverPlans"
                handleChange={this.handleChange}
                disableActive={disableActive}
              />
            </Col>
          )}
        </Row>
      </div>
    )
  }
}

const options = {
  collection: Plans,
  fragmentName: 'PlanItem',
};

registerComponent({ name: 'InstancePlans', component: InstancePlans, hocs: [[withMulti2, options]] });
