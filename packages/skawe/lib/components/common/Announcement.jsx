import { registerComponent, withMulti2 } from 'meteor/vulcan:core';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Announcements } from '../../modules/announcements/index.js';

const Announcement = ({results, loading}) => {
  if (results && results.length > 0) {
    return results.map(announcement =>
      <div className="announcement__wrapper bg-light" key={announcement._id}>
        <Container>
          <Row className="center-xs">
            <Col sm={12} md={10}>
              <div className="announcement">
                <h6 className="mb-0 text-left d-flex middle-xs">
                  {announcement.description} {announcement.code ? <span className="coupon-code">{announcement.code}</span> : null }
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  } else {
    return null;
  }
}

const options = {
  collection: Announcements,
  fragmentName: 'AnnouncementItem',
};

registerComponent({
  name: 'Announcement',
  component: Announcement,
  hocs: [
    [withMulti2, options]
  ]
});
