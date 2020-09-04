import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

class RegionSelect extends Component {
  state = {
    selectedRegion: this.props.placeholder,
    selectedRegionImage: '',
    markSelectedRegion: ''
  }

  selectedRegion = setRegion => {
    this.setState({ 
      selectedRegion: `${setRegion[0]}, ${setRegion[1]}`,
      selectedRegionImage: `${setRegion[3]}`,
      markSelectedRegion: setRegion[0]
    })
    this.props.selectedRegion(setRegion);
  }

  render() {
    const { title, selectedRegion, showSpeedTest } = this.props;
    const { markSelectedRegion } = this.state;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">Region</h6>
        {showSpeedTest ?
          <Row>
            <Col>
              {/*<small className="d-block mb-1">Use our speedtest page to find the best region for your current location.</small>*/}
            </Col>
          </Row>
        : null }
        <Row>
          <Col md={6} sm={12} xs={4}>
            <Components.ModalTrigger size="small" title={title} component={
              <ListGroup>
                <div className="admin-checkbox admin-selectbox">
                  <ListGroup.Item className="p-1 mb-0">
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
                      <Components.Icon name="keyboard_arrow_down"/>
                    </div>
                  </ListGroup.Item>
                </div>
              </ListGroup>
            }>
              <Components.Region
                selectedRegion={this.selectedRegion}
                markSelectedRegion={markSelectedRegion}
              />
            </Components.ModalTrigger>
          </Col>
        </Row>
      </div>
    )
  }
}

registerComponent({ name: 'RegionSelect', component: RegionSelect });
