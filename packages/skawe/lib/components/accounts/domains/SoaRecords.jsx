import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class SoaRecords extends Component {
  render() {
    const { domainData } = this.props;

    return (
      <div className="mb-4">
        <Row>
          <Col>
            <h6 className="title-6">SOA Record</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <table className="table">
              <thead>
                <tr>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">Primary Domain</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">Email</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">Default TTL</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">Refresh Rate</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">Retry Rate</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label">Expire Time</span>
                  </th>
                  <th className="datatable-header">
                    <span className="datatable-header-cell-label"></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                  <tr>            
                    <td className="">
                      <span className="datatable-body-cell-label">{domainData.domain}</span>
                    </td>
                    <td className="">
                      <span className="datatable-body-cell-label">{domainData.soa_email}</span>
                    </td>
                    <td className="">
                      <span className="datatable-body-cell-label">{domainData.ttl_sec === 0 ? 'Default' : domainData.ttl_sec}</span>
                    </td>
                    <td className="">
                      <span className="datatable-body-cell-label">{domainData.refresh_sec === 0 ? 'Default' : domainData.refresh_sec}</span>
                    </td>
                    <td className="">
                      <span className="datatable-body-cell-label">{domainData.retry_sec === 0 ? 'Default' : domainData.retry_sec}</span>
                    </td>
                    <td className="">
                      <span className="datatable-body-cell-label">{domainData.expire_sec === 0 ? 'Default' : domainData.expire_sec}</span>
                    </td>
                    <td className="">
                      <Components.ModalTrigger size="small" title="Edit SOA Record" component={
                        <Components.Button variant="primary-link" size="small">
                          <Components.Icon name="edit" />
                          Edit
                        </Components.Button>
                      }>
                        <Components.AddSoaRecords records={domainData} />
                      </Components.ModalTrigger>
                    </td>
                  </tr>
              </tbody>
            </table>

          </Col>
        </Row>
      </div>
    )
  }
}

registerComponent({ name: 'SoaRecords', component: SoaRecords });
