import Skawe from 'meteor/skawe:lib';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const GetHelpPage = (props, context) => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Get Help" description="Get Help Page" />
      
      <Container>
        <Row>
          <Col>
            <div className="section-xsmall">
              <h5 className="title-5 mb-1">Need Help?</h5>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Skawe.components.ModalTrigger title="Support Chat Bot" component={<div><Skawe.components.ChatBotModal /></div>}>
              <Skawe.components.ChatBotThread />
            </Skawe.components.ModalTrigger>
          </Col>

          <Col>
            <Link to={{ pathname: '/accounts/help/tickets' }} className="text-dark">
              <Card className="bg-light text-center support-card">
                <Card.Body>
                  <div className="card-icon rounded-circle text-white">
                    <Skawe.components.Icon name="email"/>
                  </div>
                  <h6 className="title-6">Support Ticket</h6>
                  <Card.Text>
                    Open / or View support tickets
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>

          </Col>

        </Row>
      </Container>

    </React.Fragment>
  )
}

Skawe.registerComponent('GetHelpPage', GetHelpPage);
