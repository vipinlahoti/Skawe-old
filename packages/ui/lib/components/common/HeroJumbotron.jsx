import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const HeroJumbotron = ({title, description, whiteButton, whiteButtonPath, whiteButtonText, blackButton, blackButtonPath, form, formType}) =>
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

        {form ?
          (<Col sm={12} md={10}>
            <div className="mt-1">
              <Skawe.components.CreateAccount buttonText="Create an Account" state={formType} />
            </div>
          </Col>) : null }
      </Row>
    </Container>
  </Jumbotron>

Skawe.registerComponent('HeroJumbotron', HeroJumbotron);
