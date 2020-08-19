import { Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage, intlShape } from 'meteor/vulcan:i18n';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup, Form } from 'react-bootstrap';

const AdminCreateNew = (props, context) =>
  <React.Fragment>
    <Link to={{ pathname: '/accounts/list-cloud-instance/create' }} className="list-group-item text-dark d-row middle-xs p-1 p-0">
      <span className="admin-select-card-image">
        <Components.Icon name="cloud_queue" iconClass="text-primary" />
      </span>
      <span>Cloud Instance</span>
    </Link>

    <Link to={{ pathname: '/accounts/list-block-storage/create' }} className="list-group-item text-dark d-row middle-xs p-1 p-0">
      <span className="admin-select-card-image">
        <Components.Icon name="storage" iconClass="text-primary" />
      </span>
      <span>Volume Block Storage</span>
    </Link>

    <Link to={{ pathname: '/accounts/list-load-balancer/create' }} className="list-group-item text-dark d-row middle-xs p-1 p-0">
      <span className="admin-select-card-image">
        <Components.Icon name="dns" iconClass="text-primary" />
      </span>
      <span>Load Balancers</span>
    </Link>

    <Link to={{ pathname: '/accounts/list-dns-manager' }} className="list-group-item text-dark d-row middle-xs p-1 p-0">
      <span className="admin-select-card-image">
        <Components.Icon name="public" iconClass="text-primary" />
      </span>
      <span>Domains</span>
    </Link>

  </React.Fragment>

AdminCreateNew.contextTypes = {
  messages: PropTypes.object,
  intl: intlShape
};

registerComponent({ name: 'AdminCreateNew', component: AdminCreateNew });
