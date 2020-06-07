import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class AdditionalFeatures extends Component {
  state = {
    checkedItems: new Map(),
    apiDataList: this.props.selectedAddons
  }

  handleChange = async e => {
    const name = e.target.name;
    const id = e.target.id;
    const isChecked = e.target.checked;

    let addonPlans = this.props.addonPlans;

    addonPlans.map(itemId => {
      if(itemId['id'] === id) {
        itemId['show'] = isChecked;
      }
    })
    
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(name, isChecked)
    }));

    this.props.selectedAddonPlans(addonPlans);
  }

  render() {
    const { selectedAddonPrices, addonPlans } = this.props;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">
          Additional Features
          {!selectedAddonPrices.length ?
            <small className="d-block">Choose a plan to select an additional features.</small>
          : null }
        </h6>

        <Row>
          <Col>
            <div className="admin-additional-features">
              {addonPlans.map((plans, index) => 
                <Form.Group className="mb-2" key={index}>
                  <Form.Label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      id={plans.id}
                      name={plans.id}
                      checked={!!this.state.checkedItems.get(plans['id'])}
                      disabled={!selectedAddonPrices.length}
                      onChange={this.handleChange}
                    />
                    <div className="check"></div>
                    <div className="title-6 mb-0">
                      {plans.label}
                      
                      {plans.id === 'enable-backup' && selectedAddonPrices && selectedAddonPrices.length ?
                        <React.Fragment>
                          <span className="ml-1 badge">₹{selectedAddonPrices[6]}/mo</span>
                        </React.Fragment>
                      : null }
                    </div>
                  </Form.Label>
                  <Form.Text className="text-muted">
                    {plans.description}
                  </Form.Text>
                </Form.Group>
              )}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

Skawe.registerComponent('AdditionalFeatures', AdditionalFeatures);
