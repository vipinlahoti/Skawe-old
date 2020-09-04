import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class MxRecords extends Component {
  render() {
    const { domainData, domainRecordData, domainRecords } = this.props;

    return (
      <div className="mb-4">
        <Row>
          <Col>
            <h6 className="title-6">MX Record</h6>
          </Col>
          <Col>
            <div className="d-flex end-xs">
              <Components.ModalTrigger size="small" title="Add MX Record" component={
                <Components.Button variant="primary-link" size="small">
                  <Components.Icon name="add_circle_outline" />
                  Add a MX Record
                </Components.Button>
              }>
                <Components.AddMxRecords
                  domainData={domainData}
                  domainRecords={domainRecords}
                />
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
                    <span className="datatable-header-cell-label">Mail Server</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">Priority</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">Subdomain</span>
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
                  {record.type === 'MX' ?
                    <tr>            
                      <td className="">
                        <span className="datatable-body-cell-label">{record.target}</span>
                      </td>
                      <td className="">
                        <span className="datatable-body-cell-label">{record.priority}</span>
                      </td>
                      <td className="">
                        <span className="datatable-body-cell-label">{record.name}</span>
                      </td>
                      <td className="">
                        <span className="datatable-body-cell-label">{record.ttl_sec === 0 ? 'Default' : record.ttl_sec}</span>
                      </td>
                      <td className="" style={{width: '225px'}}>
                        <div className="d-flex">
                          <Components.ModalTrigger size="small" title="Edit MX Record" component={
                            <Components.Button variant="primary-link" size="small">
                              <Components.Icon name="edit" />
                              Edit
                            </Components.Button>
                          }>
                            <Components.AddMxRecords
                              records={record}
                              domainData={domainData}
                              domainRecords={domainRecords}
                            />
                          </Components.ModalTrigger>
                          <Components.ModalTrigger size="alert" title="Delete MX Record" component={
                            <Components.Button variant="danger-link" size="small">
                              <Components.Icon name="delete_forever" />
                              Delete
                            </Components.Button>
                          }>
                            <Components.DeleteRecords
                              records={record}
                              domainData={domainData}
                              domainRecords={domainRecords}
                            />
                          </Components.ModalTrigger>
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

registerComponent({ name: 'MxRecords', component: MxRecords });
