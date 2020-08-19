import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

class ClickAppsSelect extends Component {
  state = {
    selectedDistro: this.props.placeholder,
    selectedDistroImage: '',
    markSelectedDistro: ''
  }

  selectedApps = (setApps) => {
    this.setState({ 
      selectedDistro: `${setApps[2]}`,
      selectedDistroImage: `${setApps[3]}`,
      markSelectedDistro: setApps[2]
    })
    this.props.selectedApp(setApps);
  }

  render() {
    const { title } = this.props;
    const { markSelectedDistro } = this.state;

    return (
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6 mb-1">{title}</h6>
        <Row>
          <Col md={6} sm={12} xs={4}>
            <Components.ModalTrigger size="small" title={title} component={
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
                        <Components.Icon name="keyboard_arrow_down"/>
                      </div>
                    </ListGroup.Item>
                  </div>
                </ListGroup>
            }>
              <Components.AppsSelect
                selectedApps={this.selectedApps}
                markSelectedDistro={markSelectedDistro}
              />
            </Components.ModalTrigger>
          </Col>
        </Row>
      </div>
    )
  }
}

registerComponent({ name: 'ClickAppsSelect', component: ClickAppsSelect });
