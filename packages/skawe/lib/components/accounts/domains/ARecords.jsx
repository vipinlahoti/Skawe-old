import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ARecords extends Component {
  render() {
    const { domainData, domainRecordData } = this.props;

    return (
      <div className="mb-4">
        <Row>
          <Col>
            <h6 className="title-6">A/AAAA Record</h6>
          </Col> 
          <Col>
            <div className="d-flex end-xs">
              <Components.ModalTrigger size="small" title="Add A/AAAA Record" component={
                <Components.Button variant="primary-link" size="small">
                  <Components.Icon name="add_circle_outline" />
                  Add an A/AAAA Record
                </Components.Button>
              }>
                <Components.AddARecords />
              </Components.ModalTrigger>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <table className="table">
              <thead>
                <tr>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">Hostname</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">IP Address</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">TTL</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label"></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {domainRecordData.map(record =>
                  <React.Fragment key={record.id}>
                    {record.type === 'A' || record.type === 'AAAA' ?
                      <tr>            
                        <td className="">
                          <span className="datatable-body-cell-label">{record.name === '' ? domainData.domain : record.name}</span>
                        </td>
                        <td className="">
                          <span className="datatable-body-cell-label">{record.target}</span>
                        </td>
                        <td className="">
                          <span className="datatable-body-cell-label">{record.ttl_sec === 0 ? 'Default' : record.ttl_sec}</span>
                        </td>
                        <td className="" style={{width: '225px'}}>
                          <div className="d-flex">
                            <Components.ModalTrigger size="small" title="Edit A/AAAA Record" component={
                              <Components.Button variant="primary-link" size="small">
                                <Components.Icon name="edit" />
                                Edit
                              </Components.Button>
                            }>
                              <Components.AddARecords records={record} />
                            </Components.ModalTrigger>
                            <Components.Button size="small" variant="danger-link">
                              <Components.Icon name="delete_forever" />
                              Delete
                            </Components.Button>
                          </div>
                        </td>
                      </tr>
                    : null }
                  </React.Fragment>
                )}
              </tbody>
            </table>

          </Col>
        </Row>
      </div>

    )
  }
}

registerComponent({ name: 'ARecords', component: ARecords });
