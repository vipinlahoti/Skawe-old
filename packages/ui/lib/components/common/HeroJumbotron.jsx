import Skawe from 'meteor/skawe:lib';
import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const HeroJumbotron = (
  {
    currentUser,
    title,
    description,
    whiteButton,
    whiteButtonPath,
    whiteButtonText,
    blackButton,
    blackButtonPath,
    form,
    formType,
    size,
    image,
    alt
  }) => {

  return (
    <Jumbotron className={`jumbotron-${size}`}>
      <Container>
        <Row className="middle-xs">
          <Col md={7} sm={12} xs={4}>
            <h2 className="title-2">{title}</h2>
            <p className="lead mb-2">{description}</p>
            
            {whiteButton ?
              (<Skawe.components.Button isLink={true} variant="primary" path={whiteButtonPath}>
                {whiteButtonText}
              </Skawe.components.Button>) : null }

            {blackButton ?
              (<Skawe.components.Button isLink={true} variant="primary-fill" path={blackButtonPath}>
                Create a Free Account
              </Skawe.components.Button>) : null }

          {form && !currentUser ?
            (
              <div className="mt-1">
                <Skawe.components.CreateAccount buttonText="Create account" state={formType} />
              </div>
            ) : null }
          </Col>

          <Col md={5} sm={12} xs={4}>
            <div className="jumbotron-image">
              <img src={image} alt={alt} />
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

const HeroJumbotronContainer = Skawe.withAccount(HeroJumbotron);
Skawe.registerComponent('HeroJumbotron', HeroJumbotronContainer);
