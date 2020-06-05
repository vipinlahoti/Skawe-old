import Skawe from 'meteor/skawe:lib';
import Users from 'meteor/skawe:users';
import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Nav, Row, Col, ListGroup, Form } from 'react-bootstrap';

const UsersEditForm = ({currentUser}) => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Accounts" description="Accounts Page" />
      
      <div className="section-xsmall">
        <div className="d-flex">
          <Skawe.components.Avatar size="large" className="mr-2" user={currentUser} link={false} />
          <div>
            <h5 className="title-5">{Users.getDisplayName(currentUser)}</h5>
            <h6 className="title-6">{Users.getEmail(currentUser)}</h6>
          </div>
        </div>
      </div>      

      <div className="section-xsmall">
        <h5 className="title-5">Edit Account</h5>
      </div>

      <Tab.Container defaultActiveKey="first">
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Your Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Billing Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Password</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>

          <Tab.Pane eventKey="first">
            <Row>
              <Col sm={12} md={4}>
                <Skawe.components.SkaweForms
                  collection={Users}
                  document={currentUser}
                  buttonText="Update Profile"
                  methodName="users.edit"
                />
              </Col>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="second">
            Billing
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <Row>
              <Col sm={12} md={4}>
                <Skawe.components.CreateAccount state="changePwd" />
              </Col>
            </Row>
          </Tab.Pane>
          
        </Tab.Content>
      </Tab.Container>
    </React.Fragment>
  )
};

const UsersEditFormContainer = Skawe.withAccount(UsersEditForm);

Skawe.registerComponent('UsersEditForm', UsersEditFormContainer);
