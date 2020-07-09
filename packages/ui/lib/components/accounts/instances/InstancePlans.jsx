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
    const { dataList, title, description, disableActive } = this.props;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6">{title}</h6>
        { description ? <p className="d-block mt-1">{description}</p> : null }
        <Row>
          {dataList.map((plans, index) => 
            <Col md={4} sm={6} xs={4} key={index}>
              <Skawe.components.PriceCard
                title={plans.label}
                description={
                  `
                  ${plans.vcpu} </br>
                  ${plans.memory} Memory </br>
                  ${plans.transfer} Bandwidth
                  `
                }
                salePrice={plans.priceMo}
                formId={`${plans['planId']},${plans['label']},${plans['vcpu']},${plans['disk']},${plans['memory']},${plans['priceMo']},${plans['addonBackupMo']},${plans['transfer']}`}
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

const InstancePlansContainer = withTracker(() => {
  Meteor.subscribe('serverplans.list');

  return {
    dataList: ServerPlans.find().fetch(),
  };
})(InstancePlans);

Skawe.registerComponent('InstancePlans', InstancePlansContainer);
