import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class BlockStorageSummary extends Component {
  state = {
    instanceId: '',
  }

  render() {
    return (
      <React.Fragment>
        <Components.SummaryHeader />

        <Row>
          <Col>
            <div className="flex-column nav nav-pills" role="tablist">
              <div className="nav-item">
                <Link to={{ pathname: `/accounts/list-cloud-instance/summary/${this.state.instanceId}/overview` }} className="nav-link" role="tab">
                  Overview
                </Link>
              </div>
              <div className="nav-item">
                <Link to={{ pathname: `/accounts/list-cloud-instance/summary/${this.state.instanceId}/block-storage` }} className="nav-link active" role="tab">
                  Block Storage
                </Link>
              </div>
              <div className="nav-item">
                <Link to={{ pathname: `/accounts/list-cloud-instance/summary/${this.state.instanceId}/backups` }} className="nav-link" role="tab">
                  Backups
                </Link>
              </div>
              <div className="nav-item">
                <Link to={{ pathname: `/accounts/list-cloud-instance/summary/${this.state.instanceId}/networking` }} className="nav-link" role="tab">
                  Networking
                </Link>
              </div>
              <div className="nav-item">
                <Link to={{ pathname: `/accounts/list-cloud-instance/summary/${this.state.instanceId}/resize` }} className="nav-link" role="tab">
                  Resize
                </Link>
              </div>
              <div className="nav-item">
                <Link to={{ pathname: `/accounts/list-cloud-instance/summary/${this.state.instanceId}/rebuild` }} className="nav-link" role="tab">
                  Rebuild
                </Link>
              </div>
              <div className="nav-item">
                <Link to={{ pathname: `/accounts/list-cloud-instance/summary/${this.state.instanceId}/settings` }} className="nav-link" role="tab">
                  Settings
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <div className="mt-2">
          <Components.FirstInstance
            icon="create_new_folder"
            button="Create"
            title="Add extra storage to your Instance"
            description="Choose a plan, select an image, and deploy within minutes. Need help getting started?"
            path="/accounts/list-block-storage/create"
          />
        </div>
      </React.Fragment>
    )
  }
}

registerComponent({ name: 'BlockStorageSummary', component: BlockStorageSummary });
