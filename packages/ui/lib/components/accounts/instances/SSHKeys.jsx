import Skawe from 'meteor/skawe:lib';
import Users from 'meteor/skawe:users';
import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

const SSHKeys = () =>
  <div className="section-distributions mb-1 bg-light">
    <h6 className="title-6 mb-1">SSH Keys</h6>
    <Row>
      <Col>
        <Skawe.components.DataTable
          collection={Users}
          columns={['_id', 'ssh_key']}
          showEdit={true}
        />
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Skawe.components.Button>
          Add SSH Key
        </Skawe.components.Button>
      </Col>
    </Row>
  </div>

Skawe.registerComponent('SSHKeys', SSHKeys);
