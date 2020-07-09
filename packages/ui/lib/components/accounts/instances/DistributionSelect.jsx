import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

class DistributionSelect extends Component {
  state = {
    selectedDistro: this.props.placeholder,
    selectedDistroImage: '',
    markSelectedDistro: '',
    modalIsOpen: false
  }

  selectedDistribution = (setDistribution) => {
    this.setState({ 
      selectedDistro: `${setDistribution[1]}, ${setDistribution[2]}`,
      selectedDistroImage: `${setDistribution[3]}`,
      markSelectedDistro: setDistribution[2]
    })
    this.props.selectedDistribution(setDistribution);
  }

  onHide = setState => {
    this.setState({ modalIsOpen: !setState })
  }

  showModal = setModal => {
    this.setState({ modalIsOpen: setModal })
  }

  render() {
    const { title, selectedDistribution } = this.props;
    const { modalIsOpen, markSelectedDistro } = this.state;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">{title}</h6>
        <Row>
          <Col md={6} sm={12} xs={4}>
            <Skawe.components.ModalTrigger showModal={this.showModal} modalIsOpen={modalIsOpen} title={title} component={
                <ListGroup>
                  <div className="admin-checkbox admin-selectbox">
                    <ListGroup.Item className="p-1 mb-0">
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
                    </ListGroup.Item>
                  </div>
                </ListGroup>
            }>
              <Skawe.components.Distribution
                selectedDistribution={this.selectedDistribution}
                markSelectedDistro={markSelectedDistro}
                onHide={this.onHide}
              />
            </Skawe.components.ModalTrigger>
          </Col>
        </Row>
      </div>
    )
  }
}

Skawe.registerComponent('DistributionSelect', DistributionSelect);
