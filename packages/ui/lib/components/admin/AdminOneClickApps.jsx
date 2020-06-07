import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';

class AdminOneClickApps extends Component {

  render() {
    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Admin ServerPlans" description="Admin ServerPlans Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">One Click Apps List from API</h5>
                <div>
                  <Skawe.components.Button size="small">
                    Clear Local Storage
                  </Skawe.components.Button>
                  <Skawe.components.Button size="small" variant="black-fill">
                    Refetch from API
                  </Skawe.components.Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

      </React.Fragment>
    )
  }
}

Skawe.registerComponent('AdminOneClickApps', AdminOneClickApps);
