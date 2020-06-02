import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col, ListGroup, Form } from 'react-bootstrap';
import classNames from 'classnames';

class ServerPlans extends Component {
  state = {
    checkedItems: new Map(),
    apiDataList: this.props.apiData
  }

  handleChange = async e => {
    const name = e.target.name;
    const id = e.target.id;
    const isChecked = e.target.checked;

    let apiDataList = this.state.apiDataList;

    console.log('apiDataList: ', apiDataList, name, id);

    apiDataList.map(apiItem => {
      if(apiItem['id'] === id) {
        apiItem['show'] = isChecked
      }
    })
    
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(name, isChecked)
    }));

    this.props.selectedData(apiDataList)
  }

  setApiDataFn = (setApiData) => {
    return (
      <React.Fragment>
        {Object.entries(setApiData).map(([key, value], index) => 
          <Row key={index} className="mb-2 bg-gray">
            <Col>
              <div className="section-xsmall">
                <h6 className="title-6">{key}</h6>
                <Row>
                  {value.map((apiDataItem, index) => 
                    <Col md={3} key={index}>
                      <ListGroup>
                        <Form.Label className="admin-checkbox">
                          <input 
                            type="checkbox"
                            id={apiDataItem['id']}
                            name={apiDataItem['label']}
                            checked={!!this.state.checkedItems.get(apiDataItem['label'])}
                            onChange={this.handleChange}
                          />
                          <ListGroup.Item className="p-1">
                            <div className="admin-card-description">
                              <p className="mb-0">
                                Label: {apiDataItem.label}<br />
                                ID: {apiDataItem.id}<br />
                                Memory: {apiDataItem.memory}<br />
                                CPU: {apiDataItem.vcpus}<br />
                                Disk: {apiDataItem.disk}<br />
                                <span className="divder"></span>
                                Price hr: {apiDataItem.price.hourly}<br />
                                Price Monthly: {apiDataItem.price.monthly}<br />
                                <span className="divder"></span>
                                Backup hr: {apiDataItem.addons.backups.price.hourly}<br />
                                Backup Monthly: {apiDataItem.addons.backups.price.monthly}
                              </p>
                            </div>
                          </ListGroup.Item>
                        </Form.Label>
                      </ListGroup>
                    </Col>
                  )}
                </Row>
              </div>
            </Col>
          </Row>
        )}
      </React.Fragment>
    )
  }

  render() {
    const { setApiData, apiData, title } = this.props;
    const { checkedItems } = this.state;

    console.log(setApiData, apiData)
    return (
      <div className="section-distributions">
        {title ? <h6 className="title-6 mb-1">Choost a {title}</h6> : null }
        {this.setApiDataFn(setApiData)}
      </div>
    )
  }
}

Skawe.registerComponent('ServerPlans', ServerPlans);
