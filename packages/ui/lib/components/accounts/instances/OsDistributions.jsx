import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col, ListGroup, Form } from 'react-bootstrap';
import classNames from 'classnames';

class OsDistributions extends Component {
  state = {
    checkedItems: new Map(),
    apiDataList: this.props.apiData
  }

  handleChange = async e => {
    const name = e.target.name;
    const id = e.target.id;
    const isChecked = e.target.checked;

    let apiDataList = this.state.apiDataList;

    apiDataList.map(apiItem => {
      if(apiItem['apiId'] === id) {
        apiItem['show'] = isChecked;
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
                            id={apiDataItem['apiId']}
                            name={apiDataItem['label']}
                            checked={!!this.state.checkedItems.get(apiDataItem['label'])}
                            onChange={this.handleChange}
                          />
                          <ListGroup.Item className="p-1">
                            <div className="admin-card-description">
                              <p className="mb-0">
                                Label: {apiDataItem.label}<br />
                                <span className={classNames(apiDataItem.isPublic ? '' : 'text-danger')}>Is Public: {String(apiDataItem.isPublic)}</span><br />
                                <span className={classNames(apiDataItem.deprecated ? 'text-danger' : '')}>Deprecated: {String(apiDataItem.deprecated)}</span>
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

  apiDataFn = (apiData) => {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Row className="bg-gray section-xsmall">
            {apiData.map((apiItem, index) => 
              <Col md={3} key={index}>
                <ListGroup>
                  <Form.Label className="admin-checkbox">
                    <input 
                      type="checkbox"
                      id={apiItem['id']}
                      name={apiItem['id']}
                      checked={!!this.state.checkedItems.get(apiItem['id'])}
                      onChange={this.handleChange}
                    />
                    <ListGroup.Item className="p-1">
                      <div className="admin-card-description">
                        <p className="mb-0">
                          id: {apiItem.id}<br />
                          Country: {apiItem.country}<br />
                          <span className={classNames(apiItem.status === 'ok' ? 'text-success' : 'text-danger')}>status: {apiItem.status}</span>
                        </p>
                      </div>
                    </ListGroup.Item>
                  </Form.Label>
                </ListGroup>
              </Col>
            )}
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    )
  }

  render() {
    const { setApiData, apiData, title } = this.props;
    const { checkedItems } = this.state;

    return (
      <div className="section-distributions">
        {title ? <h6 className="title-6 mb-1">Choost a {title}</h6> : null }
        
        { setApiData === undefined ?
          this.apiDataFn(apiData)
        :
          this.setApiDataFn(setApiData)
        }
      </div>
    )
  }
}

Skawe.registerComponent('OsDistributions', OsDistributions);
