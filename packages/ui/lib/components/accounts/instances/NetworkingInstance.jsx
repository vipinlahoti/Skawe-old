import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class NetworkingInstance extends Component {
  render() {
    const { networkIps } = this.props;

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
                <Skawe.components.ModalTrigger title="Allocate Private IPv4 Address" component={
                  <Skawe.components.Button variant="primary-link" size="small" className="mr-1" disabled={networkIps.ipv4.private.length}>
                    <Skawe.components.Icon name="add_circle_outline" />
                      Add Private IPv4
                    </Skawe.components.Button>
                  }>
                  <Skawe.components.AddPrivateIPInstance />
                </Skawe.components.ModalTrigger>

                <Skawe.components.ModalTrigger title="Allocate Public IPv4 Address" component={
                  <Skawe.components.Button variant="primary-link" size="small">
                    <Skawe.components.Icon name="add_circle_outline" />
                    Add Public IPv4
                  </Skawe.components.Button>
                }>
                  <Skawe.components.AddPublicIPInstance />
                </Skawe.components.ModalTrigger>
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
            <Col>
              <div className="d-flex end-xs">
                <Skawe.components.ModalTrigger title="Allocate IPv6 Address" component={
                    <Skawe.components.Button variant="primary-link" size="small">
                      <Skawe.components.Icon name="add_circle_outline" />
                      Add IPv6
                    </Skawe.components.Button>
                  }>
                  <Skawe.components.AddIPv6Instance />
                </Skawe.components.ModalTrigger>
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

Skawe.registerComponent('NetworkingInstance', NetworkingInstance);
