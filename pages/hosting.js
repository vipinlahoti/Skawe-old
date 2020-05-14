import Skawe from '@skawe';
import constants from '@constants';
import React, { Component } from 'react';
import axios from 'axios'; 
import { Jumbotron, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

class Hosting extends Component {
  state = {
    cPanelList: null,
    wordPressList: null,
    websiteBuilderList: null
  }

  getHostingList = async (state, type) => {
    axios.get(`${constants.host}/catalog/${constants.plId}/products/${type}?currencyType=${constants.currencyType}&marketId=${constants.marketId}`)
      .then(getHostingData => {
        this.setState({[state]: getHostingData.data})
      })
  }

  componentDidMount() {
    this.getHostingList('cPanelList', 'cpanel-starter');
    this.getHostingList('wordPressList', 'wordpress-basic');
    this.getHostingList('websiteBuilderList', 'website-builder-personal');
  }

  render() {
    const { cPanelList, wordPressList, websiteBuilderList } = this.state;
    const setHostingPackages = [
      cPanelList, wordPressList, websiteBuilderList
    ];

    return (
      <Skawe.components.Layout>
        <Skawe.components.HeadTags title="Hosting" description="Web Hosting Page" />

        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <div className="title-4 mb-0">
                  Powerful Website builder & Hosting.
                </div>
                <ul className="list">
                  <li>State-of-the-Art Hosting Infrastructure</li>
                  <li>99.9% Uptime Guarantee</li>
                  <li>All plans include one-click install, 99.9% uptime, 24/7 security monitoring and an easy-to-use control panel.</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        
        {cPanelList ? 
          (<Skawe.components.MiniFooter
            variant="bg-sweet-pink"
            className="center-xs"
            title={`Webhosting Starts at just ${cPanelList.salePrice ? cPanelList.salePrice : cPanelList.listPrice}/mo`} 
          />)
         : null }

        <div className="section">
          <Container>
            <Row>
            {cPanelList && wordPressList && websiteBuilderList ? setHostingPackages.map((hosting, index) => 
              <Col md={4} key={index}>
                <ListGroup>
                  <ListGroup.Item>
                    <h5 className="title-6">{hosting.title}</h5>
                    <p>Budget-friendly shared hosting </p>
                    <p className="mb-0">Starting at</p>
                    <div className="mb-1">
                      {hosting.salePrice ? <span className="title-5 mr-1">{hosting.salePrice}/{hosting.term[0]}</span> : null }
                      {hosting.salePrice ? <span className="title-5 list-price">{hosting.listPrice}/{hosting.term[0]}</span> : <span className="title-5">{hosting.listPrice}/{hosting.term[0]}</span> }
                    </div>
                    <Skawe.components.Button type="link" path={hosting.id} size="small">
                      Learn More
                    </Skawe.components.Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              ) : null }

            </Row>
          </Container>
        </div>

        <div className="section section-features bg-gray">
          <Container>
            <Row className="center-xs mb-3">
              <Col sm={12} md={8} lg={8}>
                <h3 className="title-3">Install these softwares in just 1 - click!</h3>
              </Col>
            </Row>

            <Row className="center-xs">
              <Col sm={12}>
                <img src="addons.gif" />
              </Col>
            </Row>
          </Container>
        </div>
      </Skawe.components.Layout>
    )
  }
}

export default Hosting;
