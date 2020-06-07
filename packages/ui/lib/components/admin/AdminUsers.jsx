import Skawe from 'meteor/skawe:lib';
import Users from 'meteor/skawe:users';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AdminUsers = () => (
  <React.Fragment>
    <Skawe.components.HeadTags title="Admin Users" description="Admin Users Page" />
    
    <div className="section-xsmall">
      <Row>
        <Col>
          <h5 className="title-5 mb-1">Registered Users</h5>
          <Skawe.components.DataTable
            collection={Users}
            showEdit={true}
            columns={['_id', 'email', 'displayName']}
          />
        </Col>
      </Row>
    </div>
  </React.Fragment>
);

Skawe.registerComponent('AdminUsers', AdminUsers);
