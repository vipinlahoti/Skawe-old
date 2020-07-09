import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Form } from 'react-bootstrap';

const AdminCreateNew = () =>
  <React.Fragment>
    <Link to={{ pathname: '/accounts/list-cloud-instance/create' }} className="list-group-item text-dark d-row middle-xs p-1 p-0">
      <span className="admin-select-card-image">
        <Skawe.components.Icon name="cloud_queue" iconClass="text-primary" />
      </span>
      <span>Cloud Instance</span>
    </Link>

    <Link to={{ pathname: '/accounts/list-block-storage/create' }} className="list-group-item text-dark d-row middle-xs p-1 p-0">
      <span className="admin-select-card-image">
        <Skawe.components.Icon name="storage" iconClass="text-primary" />
      </span>
      <span>Volume Block Storage</span>
    </Link>

    <Link to={{ pathname: '/accounts/list-load-balancer/create' }} className="list-group-item text-dark d-row middle-xs p-1 p-0">
      <span className="admin-select-card-image">
        <Skawe.components.Icon name="dns" iconClass="text-primary" />
      </span>
      <span>Load Balancers</span>
    </Link>

    <Link to={{ pathname: '/accounts/list-dns-manager' }} className="list-group-item text-dark d-row middle-xs p-1 p-0">
      <span className="admin-select-card-image">
        <Skawe.components.Icon name="public" iconClass="text-primary" />
      </span>
      <span>Domains</span>
    </Link>
  </React.Fragment>

Skawe.registerComponent('AdminCreateNew', AdminCreateNew);
