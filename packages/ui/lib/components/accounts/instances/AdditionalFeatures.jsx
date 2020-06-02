import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class AdditionalFeatures extends Component {
  state = {
    checkedItems: new Map(),
  }

  handleChange = async e => {
    const id = e.target.id;
    this.props.selectedAddonPlans(id);
  }

  render() {
    const { selectedAddonPrices } = this.props;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">Additional Features</h6>
        <Row>
          <Col>
            <div className="admin-additional-features">
              <Form.Group className="mb-2">
                <Form.Label className="custom-checkbox mb-0">
                  <input
                    type="checkbox"
                    id={`${selectedAddonPrices[0]}, 'backup'`}
                    name="backup"
                    onChange={this.handleChange}
                  />
                  <div className="check"></div>
                  <div className="title-6 mb-0">
                    Enable Backup
                    
                    {selectedAddonPrices.length ?
                      <React.Fragment>
                        <span className="ml-1 badge">{selectedAddonPrices[0]}/mo</span>
                      </React.Fragment>
                    : null }
                  </div>
                </Form.Label>
                <Form.Text className="text-muted">
                  Three backup slots are executed and rotated automatically: a daily backup, a 2-7 day old backup, and an 8-14 day old backup. Plans are priced according to the Linode plan selected above.
                </Form.Text>
              </Form.Group>
              
              <Form.Group className="mb-2">
                <Form.Label className="custom-checkbox mb-0">
                   <input
                    type="checkbox"
                    id="privateIP"
                    name="privateIP"
                    onChange={this.handleChange}
                  />
                  <div className="check"></div>
                  <span className="title-6 mb-0">Private IP</span>
                </Form.Label>
                <Form.Text className="text-muted">
                  Add an Internal IP to this VM
                </Form.Text>
              </Form.Group>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

Skawe.registerComponent('AdditionalFeatures', AdditionalFeatures);
