import Skawe from '@skawe';
import constants from '@constants';
import Router, { withRouter } from 'next/router';
import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

class Domains extends Component {
  state = {
    value: this.props.router.query.domainToCheck,
    domainsResult: null,
    domainQuery: this.props.router.query.domainToCheck,
  }

  handleSubmit = async e => {
    e.preventDefault();
    Router.push({
      pathname: '/domains/domain-register',
      query: { domainToCheck: this.state.value },
    })
  }

  handleChange = async e => {
    this.setState({value: e.target.value});
  }

  getDomainList = async ctx => {
    const getTosRes = await fetch(
        `https://www.secureserver.net/api/v1/domains/${constants.plId}?currencyType=${constants.currencyType}&marketId=${constants.marketId}&pageSize=${constants.pageSize}&q=${this.state.domainQuery}`
      )
      .then(getDomainsData => getDomainsData.json())
      .then((item) => {
        this.setState({domainsResult: [item]})
      })
  };

  componentDidMount() {
    this.getDomainList();
  }

  render() {
    const { domainsResult } = this.state;

    return (
      <Skawe.components.Layout>
        <Skawe.components.HeadTags title="Domains" description="Domains Page" />

        <div className="section-stripe section-xsmall text-white bg-sweet-purple">
          <Container>
            <Row className="center-xs">
              <Col sm={8}>
                <div className="hero__wrapper text-dark">
                  <Skawe.components.DomainSearch
                    handleValue={this.state.value}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        { domainsResult ? <Skawe.components.DomainSearchResults domainList={domainsResult} /> : (<Skawe.components.ComponentLoading />) }
      </Skawe.components.Layout>
    )
  }
}

export default withRouter(Domains);
