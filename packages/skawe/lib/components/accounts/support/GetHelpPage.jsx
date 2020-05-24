import { Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage, intlShape } from 'meteor/vulcan:i18n';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const GetHelpPage = (props, context) => {
  return (
    <React.Fragment>
      <Components.HeadTags title="Get Help" description="Get Help Page" />
      
      <Container>
        <Row>
          <Col>
            <Components.ModalTrigger size="full" title={context.intl.formatMessage({ id: 'help.chat_bot' })} component={<div><Components.ChatBotModal /></div>}>
              <Components.ChatBotThread />
            </Components.ModalTrigger>
          </Col>

          <Col>
            <Link to={{ pathname: '/accounts/help/tickets' }} className="text-dark">
              <Card className="bg-light text-center support-card">
                <Card.Body>
                  <div className="card-icon rounded-circle text-white">
                    <Components.Icon name="email"/>
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

GetHelpPage.contextTypes = {
  messages: PropTypes.object,
  intl: intlShape
};

registerComponent({ name: 'GetHelpPage', component: GetHelpPage });
