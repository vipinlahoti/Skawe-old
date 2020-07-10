import Skawe from 'meteor/skawe:lib';
import Users from 'meteor/skawe:users';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const UsersHeaders = ({currentUser}) => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Accounts" description="Accounts Page" />
      
      <Container>
        <Row>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
};

const UsersHeadersContainer = Skawe.withCurrentUser(UsersHeaders);

Skawe.registerComponent('UsersHeaders', UsersHeadersContainer);
