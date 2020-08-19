import { Components, registerComponent, Utils, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import { Domains } from '../../../modules/domains/collection.js';

const Domain = ({ document: domain }) =>
  <Link to={domain.pagePath} className="d-flex middle-xs">
    <Components.Icon name="public" iconClass="text-primary mr-xs" />
    <strong>{domain.name}</strong>
  </Link>

const DomainStatus = ({ document: domain }) => {
  return (
    <span className="d-flex middle-xs">
      {domain.status === 'active' ?
        <span className="instance-status bg-success"></span>
      : <span className="instance-status bg-danger"></span>
      }
      {Utils.toTitleCase(domain.status)}
    </span>
  )
}


const ListDnsManagerPage = ({currentUser}) => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Domains" description="Domains Page" />
    
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col>
                <h6 className="title-6">Manage your Domains</h6>
              </Col>
              <Col>
                <div className="text-right">
                  <Components.ModalTrigger title="Add a New Domain" size="small" component={
                    <Components.Button variant="primary-link" size="small" className="pr-0">
                      <Components.Icon name="add_circle_outline" />
                      Add a Domain
                    </Components.Button>
                  }>
                    <Components.AddDomain />
                  </Components.ModalTrigger>
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <div className="instances__list">
                  <Components.Datatable
                    collection={Domains}
                    initialState={{
                      filter: {
                        userId: {
                          _eq: currentUser._id
                        }
                      }
                    }}
                    columns={[
                      { name: 'name', component: Domain },
                      { name: 'status', component: DomainStatus, sortable: true },
                      { name: 'createdAt' },
                    ]}
                    options={{
                      fragmentName: 'DomainItem',
                    }}
                    showNew={false}
                    showEdit={false}
                    showSearch={false}
                  />
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <div className="text-left block-right">
              <ListGroup className="cloud__card">
                <ListGroup.Item>
                  <p>You do not have an active Instance for DNS zones to be served</p>
                  <Components.Button variant="primary" size="small" path="/accounts/list-cloud-instance/create" isLink={true}>
                    Add an Instance
                  </Components.Button>
                </ListGroup.Item>
              </ListGroup>

            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

registerComponent({ name: 'ListDnsManagerPage', component: ListDnsManagerPage, hocs: [withCurrentUser] });
