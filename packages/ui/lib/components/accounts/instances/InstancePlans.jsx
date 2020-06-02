import Skawe from 'meteor/skawe:lib';
import { ServerPlans } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Row, Col, ListGroup, Form } from 'react-bootstrap';

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
    const { dataList } = this.props;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">Choose a Plan</h6>
        <Row>
          {dataList.map((plans, index) => 
            <Col md={4} key={index}>
              <Skawe.components.PriceCard
                title={`${plans.disk / 1024} GB SSD`}
                description={
                  `
                  ${plans.vcpus} CPU </br>
                  ${plans.memory} GB Memory </br>
                  ${plans.transfer} GB Bandwidth
                  `
                }
                salePrice={plans.price.monthly}
                listPrice={plans.price.hourly}
                formId={`${plans['id']},${plans['vcpus']},${plans['disk']},${plans['label']},${plans['memory']},${plans['price']['monthly']},${plans['addons']['backups']['price']['monthly']},${plans['addons']['backups']['price']['hourly']}`}
                formName="serverPlans"
                handleChange={this.handleChange}
              />
            </Col>
          )}
        </Row>
      </div>
    )
  }
}

const InstancePlansContainer = withTracker(() => {
  Meteor.subscribe('serverplans.list');

  return {
    dataList: ServerPlans.find().fetch(),
  };
})(InstancePlans);

Skawe.registerComponent('InstancePlans', InstancePlansContainer);
