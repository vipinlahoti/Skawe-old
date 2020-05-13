import Skawe from '@skawe';
import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

class Domains extends Component {
  state = {
    value: '',
    domainValue: ''
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({domainValue: this.state.value});
  }

  handleChange = async e => {
    this.setState({value: e.target.value});
  }

  render() {
    const { domainValue } = this.state;
    return (
      <Skawe.components.Layout>
        <Skawe.components.HeadTags title="Domains" description="Domains Page" />

        <Jumbotron className={classNames(domainValue ? 'section-small' : '')}>
          <Container>
            <Row className="center-xs">
              <Col>
                <div className="hero__wrapper text-dark">
                  <Skawe.components.DomainSearch
                    title={domainValue ? '' : 'Get a Domain Name'}
                    lead={domainValue ? '' : 'With Privacy Protection and lots more.'}
                    placeholder="Find your Perfect Domain Name."
                    handleValue={this.state.value}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        { domainValue ? ( <Skawe.components.DomainSearchResults /> ) : (<Skawe.components.DomainPage />) }
      </Skawe.components.Layout>
    )
  }
}

export default Domains;
