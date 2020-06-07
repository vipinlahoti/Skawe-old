import Skawe from 'meteor/skawe:lib';
import { Distributions } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Row, Col, ListGroup, Form } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';

class DistributionSelect extends Component {
  state = {
    checkedItems: new Map(),
    apiDataList: this.props.apiData,
    toggleVersions: false,
    selectedDistro: '-- Select a Distribution --',
    selectedDistroImage: '',
  }

  handleChange = async e => {
    console.log('handleChange: ', e)
    const id = e.target.id;
    const splitId = id.split(',');
    this.setState({ 
      selectedDistro: `${splitId[1]}, ${splitId[2]}`,
      selectedDistroImage: `${splitId[3]}`,
      toggleVersions: false
    })
    this.props.selectedDistribution(splitId);
  }

  toggleVersions = () => {
    this.setState({ toggleVersions: !this.state.toggleVersions })
  }

  render() {
    const { dataList } = this.props;
    const setDistributionList = _groupBy(dataList, 'category');
    const expandVersions = this.state.toggleVersions ? 'd-expand' : 'd-collapse';

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">Choose a Distribution</h6>
        <Row>
          <Col md={6}>
            <ListGroup>
              <div className="admin-checkbox admin-selectbox">
                <ListGroup.Item className={`p-1 mb-0 ${expandVersions}`} onClick={this.toggleVersions}>
                  <div className="d-flex admin-select"> 
                    <div className="admin-card-description">
                      <div className="d-flex middle-xs">
                        {this.state.selectedDistroImage ?
                          <div className="admin-card-image admin-select-card-image d-flex middle-xs">
                            <img src={this.state.selectedDistroImage} />
                          </div>
                        : null }
                        <h6 className="title-6 mb-0">{this.state.selectedDistro}</h6>
                      </div>
                    </div>
                    <Skawe.components.Icon name="keyboard_arrow_down"/>
                  </div>
                  <div className="radio-dropdown">
                    {Object.entries(setDistributionList).map(([key, value], index) => 
                      <React.Fragment key={index}>
                        <div className="mb-2">
                          <h6 className="title-6">{key}</h6>
                          {value.map((distro, index) => 
                            <Form.Label key={index}>
                              <input 
                                type="radio"
                                name="distributions"
                                id={`${distro['distId']},${distro['category']},${distro['label']},${distro['image']}`}
                                onChange={this.handleChange}
                              />
                              <div className="d-flex middle-xs">
                                <div className="admin-card-image admin-select-card-image d-flex middle-xs">
                                  <img src={distro.image} alt={distro.label} />
                                </div>
                                <p className="mb-0">{distro.label}</p>
                              </div>
                            </Form.Label>
                          )}
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </ListGroup.Item>
              </div>
            </ListGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

const DistributionSelectContainer = withTracker(() => {
  Meteor.subscribe('distributions.list');

  return {
    dataList: Distributions.find().fetch(),
  };
})(DistributionSelect);

Skawe.registerComponent('DistributionSelect', DistributionSelectContainer);
