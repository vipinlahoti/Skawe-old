import Skawe from 'meteor/skawe:lib';
import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const HeroJumbotron = (props, {currentUser}) => {
  const { title, description, whiteButton, whiteButtonPath, whiteButtonText, blackButton, blackButtonPath, form, formType } = props;

  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col sm={12} md={10} lg={8}>
            <h2 className="title-2">{title}</h2>
            <p className="lead mb-2">{description}</p>
            
            {whiteButton ?
              (<Skawe.components.Button isLink={true} variant="white" path={whiteButtonPath}>
                {whiteButtonText}
              </Skawe.components.Button>) : null }

            {blackButton ?
              (<Skawe.components.Button isLink={true} variant="black-fill" path={blackButtonPath}>
                Create a Free Account
              </Skawe.components.Button>) : null }
          </Col>

          {form && !currentUser ?
            (<Col sm={12} md={10}>
              <div className="mt-1">
                <Skawe.components.CreateAccount buttonText="Create an Account" state={formType} />
              </div>
            </Col>) : null }
        </Row>
      </Container>
    </Jumbotron>
  )
}

const HeroJumbotronContainer = Skawe.withAccount(HeroJumbotron);
Skawe.registerComponent('HeroJumbotron', HeroJumbotronContainer);
