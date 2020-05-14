import Skawe from '@skawe';
import constants from '@constants';
import Router from 'next/router';
import React, { Component } from 'react';
import axios from 'axios'; 
import classNames from 'classnames';
import groupBy from 'lodash/groupBy';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

class Domains extends Component {
  state = {
    value: '',
    domainsResultList: null
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
    axios.get(`${constants.host}/search/spins?plid=${constants.plId}&q=skaweewaks.com`)
      .then(getDomainsData => {
        this.setState({domainsResultList: [getDomainsData.data]})
      })

    axios.get(`${constants.host}/domains/${constants.plId}?currencyType=${constants.currencyType}&marketId=${constants.marketId}&pageSize=23&q=skaweewaks.com`)
      .then(getDomainsData => {
        const getDomainPrice = groupBy(getDomainsData.data.suggestedDomains, 'productId');
        console.log(getDomainPrice)
      })
  }

  componentDidMount() {
    this.getDomainList();
  }

  render() {
    const { domainsResultList } = this.state;
    
    return (
      <Skawe.components.Layout>
        <Skawe.components.HeadTags title="Domains" description="Domains Page" />

        <Jumbotron>
          <Container>
            <Row className="center-xs">
              <Col>
                <div className="hero__wrapper text-dark">
                  <Skawe.components.DomainSearch
                    title="Get a Domain Name"
                    lead="With Privacy Protection and lots more."
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

        <Skawe.components.DomainPage domainList={domainsResultList} />
      </Skawe.components.Layout>
    )
  }
}

export default Domains;
