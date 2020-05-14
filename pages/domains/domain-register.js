import Skawe from '@skawe';
import constants from '@constants';
import Router, { withRouter } from 'next/router';
import React, { Component } from 'react';
import classNames from 'classnames';
import axios from 'axios'; 
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

class Domains extends Component {
  state = {
    value: this.props.router.query.domainToCheck,
    domainQuery: this.props.router.query.domainToCheck,
    domainsResultList: null,
    domainsBundleList: null,
    domainsExactList: null,
  }

  handleSubmit = async e => {
    e.preventDefault();
    Router.push({
      pathname: '/domains/domain-register',
      query: { domainToCheck: this.state.value },
    })
    this.setState({
      domainQuery: this.state.value,
      domainsResultList: null,
      domainsBundleList: null,
      domainsExactList: null,
    });
    this.getDomainList();
    this.getBundleList();
    this.getExactList();
  }

  handleChange = async e => {
    this.setState({value: e.target.value});
  }

  getDomainList = async ctx => {
    axios.get(`${constants.host}/domains/${constants.plId}?currencyType=${constants.currencyType}&marketId=${constants.marketId}&pageSize=${constants.pageSize}&q=${this.state.domainQuery}`)
      .then(getDomainsData => {
        this.setState({domainsResultList: [getDomainsData.data]})
      })
  }

  getBundleList = async ctx => {
    axios.get(`${constants.host}/search/bundles?plid=${constants.plId}&q=${this.state.domainQuery}`)
      .then(getDomainsData => {
        this.setState({domainsBundleList: getDomainsData.data})
      })
  }

  getExactList = async ctx => {
    axios.get(`${constants.host}/search/exact?plid=${constants.plId}&q=${this.state.domainQuery}`)
      .then(getDomainsData => {
        this.setState({domainsExactList: [getDomainsData.data]})
      })
  }

  componentDidMount() {
    this.getDomainList();
    this.getBundleList();
    this.getExactList();
  }

  render() {
    const { domainsResultList, domainsBundleList, domainsExactList, domainsSpinList } = this.state;

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

        {domainsExactList ? 
          <Skawe.components.DomainSearchResults
            domainList={domainsResultList}
            bundleList={domainsBundleList}
            exactList={domainsExactList}
          /> :
          (<Skawe.components.ComponentLoading />)
        }
      </Skawe.components.Layout>
    )
  }
}

export default withRouter(Domains);
