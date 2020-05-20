import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const HeroJumbotron = ({title, description, whiteButton, whiteButtonPath, whiteButtonText, blackButton, blackButtonPath, form}) =>
  <Jumbotron>
    <Container>
      <Row>
        <Col sm={12} md={10} lg={8}>
          <h2 className="title-2">{title}</h2>
          <p className="lead mb-2">{description}</p>
          
          {whiteButton ?
            (<Skawe.components.Button type="link" variant="white" path={whiteButtonPath}>
              {whiteButtonText}
            </Skawe.components.Button>) : null }

          {blackButton ?
            (<Skawe.components.Button type="link" variant="black-fill" path={blackButtonPath}>
              Create a Free Account
            </Skawe.components.Button>) : null }
        </Col>

        {form ?
          (<Col sm={12} md={10}>
            <div className="mt-1">
              <Skawe.components.CreateAccount type="inline" />
            </div>
          </Col>) : null }
      </Row>
    </Container>
  </Jumbotron>

Skawe.registerComponent('HeroJumbotron', HeroJumbotron);
