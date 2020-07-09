import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

class RegionSelect extends Component {
  state = {
    selectedRegion: this.props.placeholder,
    selectedRegionImage: '',
    markSelectedRegion: '',
    modalIsOpen: false
  }

  selectedRegion = setRegion => {
    this.setState({ 
      selectedRegion: `${setRegion[0]}, ${setRegion[1]}`,
      selectedRegionImage: `${setRegion[3]}`,
      markSelectedRegion: setRegion[0]
    })
    this.props.selectedRegion(setRegion);
  }

  onHide = setState => {
    this.setState({ modalIsOpen: !setState })
  }

  showModal = setModal => {
    this.setState({ modalIsOpen: setModal })
  }

  render() {
    const { title, selectedRegion, showSpeedTest } = this.props;
    const { modalIsOpen, markSelectedRegion } = this.state;

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
          <Col md={6} sm={12} xs={4}>
            <Skawe.components.ModalTrigger showModal={this.showModal} modalIsOpen={modalIsOpen} title={title} component={
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
                      <Skawe.components.Icon name="keyboard_arrow_down"/>
                    </div>
                  </ListGroup.Item>
                </div>
              </ListGroup>
            }>
              <Skawe.components.Region
                selectedRegion={this.selectedRegion}
                markSelectedRegion={markSelectedRegion}
                onHide={this.onHide}
              />
            </Skawe.components.ModalTrigger>
          </Col>
        </Row>
      </div>
    )
  }
}

Skawe.registerComponent('RegionSelect', RegionSelect);
