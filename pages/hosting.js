import Skawe from '@skawe';
import constants from '@constants';
import React, { Component } from 'react';
import axios from 'axios'; 
import { Jumbotron, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

class Hosting extends Component {
  state = {
    hostingList: null,
    cPanelList: null,
    wordPressList: null,
    websiteBuilderList: null
  }

  getHostingList = async ctx => {
    axios.get(`${constants.host}/catalog/${constants.plId}/products?currencyType=${constants.currencyType}&marketId=${constants.marketId}`)
      .then(getHostingData => {
        this.setState({hostingList: getHostingData.data})
      })
  }

  getCpanelList = async ctx => {
    axios.get(`${constants.host}/catalog/${constants.plId}/products/cpanel-starter?currencyType=${constants.currencyType}&marketId=${constants.marketId}`)
      .then(getCpanelData => {
        this.setState({cPanelList: getCpanelData.data})
      })
  }

  getWordPressList = async ctx => {
    axios.get(`${constants.host}/catalog/${constants.plId}/products/cpanel-starter?currencyType=${constants.currencyType}&marketId=${constants.marketId}`)
      .then(getWordPressData => {
        this.setState({wordPressList: getWordPressData.data})
      })
  }



  componentDidMount() {
    this.getHostingList();
    this.getCpanelList();
  }

  render() {
    const { hostingList, cPanelList } = this.state;
    console.log('hostingList: ', hostingList, cPanelList);

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
        
        <Skawe.components.MiniFooter variant="bg-sweet-pink" className="center-xs" title="Webhosting Starts at just Rs. 99/mo" />

        <div className="section">
          <Container>
            <Row>
              <Col md={4}>
                <ListGroup>
                  <ListGroup.Item>
                    <h5 className="title-6">Web Hosting</h5>
                    <p>Budget-friendly shared hosting </p>
                    <p className="mb-0">Starting at</p>
                    <p className="title-5">₹ 99.00/mo</p>
                    <Skawe.components.Button type="link" path="/hosting" size="small">
                      Learn More
                    </Skawe.components.Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col md={4}>
                <ListGroup>
                  <ListGroup.Item>
                    <h5 className="title-6">Wordpress Hosting</h5>
                    <p>Budget-friendly shared hosting </p>
                    <p className="mb-0">Starting at</p>
                    <p className="title-5">₹ 99.00/mo</p>
                    <Skawe.components.Button type="link" path="/hosting" size="small">
                      Learn More
                    </Skawe.components.Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              
              <Col md={4}>
                <ListGroup>
                  <ListGroup.Item>
                    <h5 className="title-6">Website Builder</h5>
                    <p>Budget-friendly shared hosting </p>
                    <p className="mb-0">Starting at</p>
                    <p className="title-5">₹ 99.00/mo</p>
                    <Skawe.components.Button type="link" path="/hosting" size="small">
                      Learn More
                    </Skawe.components.Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              
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
