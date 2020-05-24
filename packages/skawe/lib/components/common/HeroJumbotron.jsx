import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const HeroJumbotron = ({currentUser, title, description, whiteButton, whiteButtonPath, whiteButtonText, blackButton, blackButtonPath, form, formType, className}) =>
  <Jumbotron className={className}>
    <Container>
      <Row>
        <Col sm={12} md={10} lg={8}>
          <h2 className="title-2">{title}</h2>
          <p className="lead mb-2">{description}</p>
          
          {whiteButton ?
            (<Components.Button isLink={true} variant="white" path={whiteButtonPath}>
              {whiteButtonText}
            </Components.Button>) : null }

          {blackButton ?
            (<Components.Button isLink={true} variant="black-fill" path={blackButtonPath}>
              Create a Free Account
            </Components.Button>) : null }
        </Col>

        {form && !currentUser ?
          (<Col sm={12} md={10}>
            <div className="mt-1">
              <Components.CreateAccount formState="SIGN_UP"/>
            </div>
          </Col>) : null }
      </Row>
    </Container>
  </Jumbotron>

registerComponent({ name: 'HeroJumbotron', component: HeroJumbotron, hocs: [withCurrentUser] });
