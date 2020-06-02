import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AdminAddons = () => (
  <React.Fragment>
    <Skawe.components.HeadTags title="Server Addons" description="Server Addons Page" />
    
    <div className="section-xsmall">
      <Row>
        <Col>
          <div className="d-flex between-xs">
            <h5 className="title-5 mb-1">Server Addons list</h5>
          </div>
        </Col>
      </Row>
    </div>
  </React.Fragment>
);

Skawe.registerComponent('AdminAddons', AdminAddons);
