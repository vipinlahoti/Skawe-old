import Skawe from 'meteor/skawe:lib';
import { Regions } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import _groupBy from 'lodash/groupBy';
import { Row, Col, ListGroup, Form } from 'react-bootstrap';

class RegionSelect extends Component {
  state = {
    checkedItems: new Map(),
    apiDataList: this.props.apiData,
    toggleVersions: false,
    selectedRegion: '-- Select a Region --',
    selectedRegionImage: '',
  }

  handleChange = async e => {
    const id = e.target.id;
    const splitId = id.split(',');
    this.setState({ 
      selectedRegion: `${splitId[0]}, ${splitId[1]}`,
      selectedRegionImage: `${splitId[3]}`,
      toggleVersions: false
    })
    this.props.selectedRegion(splitId);
  }

  toggleVersions = () => {
    this.setState({ toggleVersions: !this.state.toggleVersions })
  }

  render() {
    const { dataList, showSpeedTest } = this.props;
    const setDataList = _groupBy(dataList, 'region');
    const expandVersions = this.state.toggleVersions ? 'd-expand' : 'd-collapse';

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">Region</h6>
        {showSpeedTest ?
          <Row>
            <Col>
              <small className="d-block mb-1">Use our speedtest page to find the best region for your current location.</small>
            </Col>
          </Row>
        : null }
        <Row>
          <Col md={6}>
            <ListGroup>
              <div className="admin-checkbox admin-selectbox">
                <ListGroup.Item className={`p-1 mb-0 ${expandVersions}`} onClick={this.toggleVersions}>
                  <div className="d-flex admin-select"> 
                    <div className="admin-card-description">
                      <div className="d-flex middle-xs">
                        {this.state.selectedRegionImage ?
                          <div className="admin-card-image admin-select-card-image d-flex middle-xs">
                            <img src={this.state.selectedRegionImage} />
                          </div>
                        : null }
                        <h6 className="title-6 mb-0">{this.state.selectedRegion}</h6>
                      </div>
                    </div>
                    <Skawe.components.Icon name="keyboard_arrow_down"/>
                  </div>
                  <div className="radio-dropdown">
                    {Object.entries(setDataList).map(([key, value], index) => 
                      <React.Fragment key={index}>
                        <div className="mb-2">
                          <h6 className="title-6">{key}</h6>
                          {value.map((region, index) => 
                            <Form.Label key={index}>
                              <input 
                                type="radio"
                                name="distributions"
                                id={`${region['city']},${region['country']},${region['regionId']},${region['image']}`}
                                onChange={this.handleChange}
                              />
                              <div className="d-flex middle-xs">
                                <div className="admin-card-image admin-select-card-image d-flex middle-xs">
                                  <img src={region.image} alt={region.city} />
                                </div>
                                <p className="mb-0">{region.city}, {region.country}</p>
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

const RegionSelectContainer = withTracker(() => {
  Meteor.subscribe('regions.list');

  return {
    dataList: Regions.find().fetch(),
  };
})(RegionSelect);

Skawe.registerComponent('RegionSelect', RegionSelectContainer);
