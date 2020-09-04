import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class NetworkingInstance extends Component {

  render() {
    const { networkIps, instanceId, getNetworkIps, instanceStatus } = this.props;

    return (
      <React.Fragment>
        <div className="section-distributions bg-light mb-1">
          <h6 className="title-6">Access</h6>
          <ul className="list small-list count-list">
          {networkIps.ipv4.public.map((ips, index) => 
            <li key={index}><span className="list-label">SSH Access:</span> ssh root@{ips.address}</li>
          )}
          </ul>
        </div>

        <div className="section-distributions bg-light mb-1">
          <Row>
            <Col>
              <h6 className="title-6">IPv4</h6>
            </Col>
            <Col>
              <div className="d-flex end-xs">
                <Components.ModalTrigger size="alert" title="Allocate Private IPv4 Address" component={
                  <Components.Button variant="primary-link" size="small" disabled={networkIps.ipv4.private.length}>
                    <Components.Icon name="add_circle_outline" />
                      Add Private IPv4
                    </Components.Button>
                  }>
                  <Components.AddPrivateIPInstance instanceId={instanceId} getNetworkIps={getNetworkIps} instanceStatus={instanceStatus} />
                </Components.ModalTrigger>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Address</th>
                    <th scope="col">Default Gateway</th>
                    <th scope="col">Reverse DNS</th>
                    <th scope="col">Type</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {networkIps.ipv4.public.map((ips, index) => 
                    <tr key={index}>
                      <td>{ips.address}</td>
                      <td>{ips.gateway}</td>
                      <td>{ips.rdns}</td>
                      <td>{ips.public ? 'Public' : 'Private'}</td>
                      <td></td>
                    </tr>
                  )}
                  {networkIps.ipv4.private.map((ips, index) => 
                    <tr key={index}>
                      <td>{ips.address}</td>
                      <td>{ips.gateway}</td>
                      <td>{ips.rdns}</td>
                      <td>{ips.public ? 'Public' : 'Private'}</td>
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Col>
          </Row>
        </div>

        <div className="section-distributions bg-light mb-1">
          <Row>
            <Col>
              <h6 className="title-6">IPv6</h6>
            </Col>
          </Row>

          <Row>
            <Col>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Address</th>
                    <th scope="col">Default Gateway</th>
                    <th scope="col">Reverse DNS</th>
                    <th scope="col">Type</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{networkIps.ipv6.link_local.address}</td>
                    <td>{networkIps.ipv6.link_local.gateway}</td>
                    <td>{networkIps.ipv6.link_local.rdns}</td>
                    <td>{networkIps.ipv6.link_local.public ? 'Public' : 'Private'} Link Local</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>{networkIps.ipv6.slaac.address}</td>
                    <td>{networkIps.ipv6.slaac.gateway}</td>
                    <td>{networkIps.ipv6.slaac.rdns}</td>
                    <td>{networkIps.ipv6.slaac.public ? 'Public' : 'Private'} SLAAC</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </React.Fragment>  
    )
  }
}

registerComponent({ name: 'NetworkingInstance', component: NetworkingInstance });
