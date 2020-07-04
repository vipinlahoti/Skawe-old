import Skawe from 'meteor/skawe:lib';
import Users from 'meteor/skawe:users';
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const UsersAccounts = ({currentUser}) => {
  return (
    <React.Fragment>
      <Skawe.components.UsersHeaders />

      <div className="flex-column nav nav-pills" role="tablist">
        <div className="nav-item">
          <Link to={{ pathname: '/accounts' }} className="nav-link active" role="tab">
            Your Details
          </Link>
        </div>
        <div className="nav-item">
          <Link to={{ pathname: '/accounts/billing' }} className="nav-link" role="tab">
            Billing Info
          </Link>
        </div>
        <div className="nav-item">
          <Link to={{ pathname: '/accounts/settings' }} className="nav-link" role="tab">
            Settings
          </Link>
        </div>
      </div>

      <div className="tab-content">
        <Row>
          <Col sm={12} md={4}>
            <Skawe.components.SkaweForms
              collection={Users}
              document={currentUser}
              buttonText="Update Profile"
              methodName="users.edit"
              fields={[
                'displayName',
                'phoneNumber',
                'address',
                'addressLine2',
                'city',
                'zipCode',
                'country',
                'company',
                'companyUrl'
              ]}
            />
          </Col>
        </Row>
      </div>

    </React.Fragment>
  )
};

const UsersAccountsContainer = Skawe.withAccount(UsersAccounts);

Skawe.registerComponent('UsersAccounts', UsersAccountsContainer);
