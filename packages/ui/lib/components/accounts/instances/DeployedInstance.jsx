import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class DeployedInstance extends Component {
  render() {
    const { cloudInstanceData } = this.props;
    console.log('cloudInstanceData: ', cloudInstanceData)

    return (
      <React.Fragment>

      {cloudInstanceData && cloudInstanceData.length ?
        <div className="instances__list">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Instances</th>
                <th scope="col">Status</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {cloudInstanceData.map((instances, index) => 
              <tr key={index}>
                <td>
                  <h6 className="title-6 mb-0">
                    <Link to={{ pathname: `/accounts/list-cloud-instance/summary/${instances.cloudInstanceId}` }} className="d-flex middle-xs">
                      <div className="admin-card-image d-flex middle-xs">
                        <img src="/images/centos.png" alt="centos" />
                      </div>
                      <div>
                        {instances.label}
                        <small className="d-block">{instances.image}, {instances.cpu}, {instances.storage}, {instances.ram}</small>
                      </div>
                    </Link>
                  </h6>
                </td>
                <td>
                  <span className="d-flex middle-xs">
                    {instances.status === 'running' ?
                      <span className="instance-status bg-success"></span>
                    : instances.status === 'offline' ?
                      <span className="instance-status bg-danger"></span>
                    : <span className="instance-status bg-warning"></span>
                    }
                    {instances.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex middle-xs">
                    <div className="admin-card-image admin-select-card-image d-flex middle-xs">
                      <img src="/images/india.png" alt={instances.region} />
                    </div>
                    <div>
                      {instances.region}
                    </div>
                  </div>
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      :
        <Row>
          <Col>
            <div className="p-1 bg-light bg-dark-light">
              <div className="instances__list">
                No Cloud Instances created yet
              </div>
            </div>
          </Col>
        </Row>
      }
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('DeployedInstance', DeployedInstance);
