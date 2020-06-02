import Skawe from 'meteor/skawe:lib';
import { AccountsReact } from 'meteor/skawe:accounts';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class UsersMenu extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <React.Fragment>
         <Dropdown id="user-dropdown">
          <Dropdown.Toggle variant="none">
            <Skawe.components.Avatar size="small" user={currentUser} link={false} />
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight>
            {currentUser.isAdmin ?
              <React.Fragment>
                <LinkContainer to={`/admin/distributions`}>
                  <Dropdown.Item eventKey="1">Distributions</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/admin/regions`}>
                  <Dropdown.Item eventKey="2">Regions</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/admin/server-plans`}>
                  <Dropdown.Item eventKey="3">Server Plans</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/admin/click-apps`}>
                  <Dropdown.Item eventKey="3">One Click Apps</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/admin/addons`}>
                  <Dropdown.Item eventKey="4">Server Addons</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/admin/users`}>
                  <Dropdown.Item eventKey="5">Users</Dropdown.Item>
                </LinkContainer>
              </React.Fragment>
            : null }

            <Dropdown.Item eventKey="9" onClick={() => AccountsReact.logout()}>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </React.Fragment>
    )
  }
}

const UsersMenuContainer = Skawe.withAccount(UsersMenu);
Skawe.registerComponent('UsersMenu', UsersMenuContainer);
