import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Events } from '../../modules/events/index.js';

const UserEvents = ({currentUser}) => {
  return (
    <React.Fragment>
      <Components.HeadTags title="User Events" description="User Events Page" />
      
      <Container>
        <Row>
          <Col>
            <h5 className="title-5 mb-1 breadcrumb__wrapper">
              Events
            </h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="instances__list">
              <Components.Datatable
                collection={Events}
                initialState={{
                  filter: {
                    userId: {
                      _eq: currentUser._id
                    }
                  }
                }}
                columns={[
                  { name: 'name' },
                  {
                    name: 'createdAt',
                    sortable: true,
                    contents: 'date'
                  }
                ]}
                options={{
                  fragmentName: 'EventItem',
                }}
                showNew={false}
                showEdit={false}
                showSearch={false}
              />
            </div>
          </Col>
        </Row>
      </Container>

    </React.Fragment>
  )
}

registerComponent({ name: 'UserEvents', component: UserEvents, hocs: [withCurrentUser] });
