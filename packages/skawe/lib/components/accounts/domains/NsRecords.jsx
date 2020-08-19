import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class NsRecords extends Component {
  render() {
    const { domainData, domainRecordData } = this.props;

    return (
      <div className="mb-4">
        <Row>
          <Col>
            <h6 className="title-6">NS Record</h6>
          </Col>
          <Col>
            <div className="d-flex end-xs">
              <Components.ModalTrigger size="small" title="Add NS Record" component={
                <Components.Button variant="primary-link" size="small">
                  <Components.Icon name="add_circle_outline" />
                  Add a NS Record
                </Components.Button>
              }>
                <Components.AddNsRecords />
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
                    <span className="datatable-header-cell-label">Name Server</span>
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
              {['ns1', 'ns2', 'ns3', 'ns4', 'ns5'].map((ns, index) =>
                <tr key={index}>
                  <td className="">
                    <span className="datatable-body-cell-label">{ns}.skawe.com</span>
                  </td>
                  <td className="">
                    <span className="datatable-body-cell-label">{domainData.domain}</span>
                  </td>
                  <td className="">
                    <span className="datatable-body-cell-label">Default</span>
                  </td>
                  <td className="" style={{width: '225px'}}></td>
                </tr>
              )}
              {domainRecordData.map(record =>
                <React.Fragment key={record.id}>
                  {record.type === 'NS' ?
                    <tr>            
                      <td className="">
                        <span className="datatable-body-cell-label">{record.target}</span>
                      </td>
                      <td className="">
                        <span className="datatable-body-cell-label">{record.name}.{domainData.domain}</span>
                      </td>
                      <td className="">
                        <span className="datatable-body-cell-label">{record.ttl_sec === 0 ? 'Default' : record.ttl_sec}</span>
                      </td>
                      <td className="" style={{width: '225px'}}>
                        <div className="d-flex">
                          <Components.ModalTrigger size="small" title="Edit NS Record" component={
                            <Components.Button variant="primary-link" size="small">
                              <Components.Icon name="edit" />
                              Edit
                            </Components.Button>
                          }>
                            <Components.AddNsRecords records={record} />
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

registerComponent({ name: 'NsRecords', component: NsRecords });
