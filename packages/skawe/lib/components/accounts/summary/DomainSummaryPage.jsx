import { Components, registerComponent, Utils, withSingle, withMutation, withUpdate } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mapProps from 'recompose/mapProps';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Domains } from '../../../modules/domains/collection.js';

class DomainSummaryPage extends Component {
  state = {
    domainData: {},
    domainRecordData: [],
  }

  componentDidMount() {
    const getDomainData = Utils.domains.getDomainData;
    const getDomainRecordsData = Utils.domains.getDomainRecordsData;
    
    if (getDomainData === undefined) {
      this.getDomain();
    }

    if (getDomainRecordsData === undefined) {
      this.domainRecords();
    }
  }

  getDomain = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const domainId = getCurrentRoute[getCurrentRoute.length - 1];

    const dataMutation = {
      url: `domains/${domainId}`,
      method: 'GET',
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const body = getInstancesData.data;
      const domainData = body.data;

      if (domainData) {
        this.setState({ domainData });
        Utils.domains.getDomainData = domainData;
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  domainRecords = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const domainId = getCurrentRoute[getCurrentRoute.length - 1];

    const dataMutation = {
      url: `domains/${domainId}/records`,
      method: 'GET',
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const body = getInstancesData.data;
      const flatBody = body.data;

      const domainRecordData = flatBody.data;
      if (domainRecordData) {
        this.setState({ domainRecordData });
        Utils.domains.getDomainRecordsData = domainRecordData;
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="domain-page">
          <Components.Loading />
        </div>
      );
    } else if (!this.props.document) {
      return (
        <Components.Error404 />
      );
    } else {
      const currentRoute = this.props.location.pathname;
      const getCurrentRoute = currentRoute.split('/');
      const domainId = getCurrentRoute[getCurrentRoute.length - 1];
      const domainDbId = getCurrentRoute[getCurrentRoute.length - 2];
      const domainSingle = this.props.document;

      let domainData;
      let domainRecordData;
      const skaweDomainData = Utils.domains.getDomainData;
      const skaweDomainRecord = Utils.domains.getDomainRecordsData;

      if ((skaweDomainData === undefined) || (Object.keys(skaweDomainData).length === 0)) {
        domainData = this.state.domainData;
      } else {
        domainData = skaweDomainData;
      }

      if (skaweDomainRecord === undefined) {
        domainRecordData = this.state.domainRecordData;
      } else {
        domainRecordData = skaweDomainRecord;
      }

      return (
        <React.Fragment>
          <Components.HeadTags title={`Domain - ${domainSingle.name}`} description="Domain Page" />
          
          {Object.keys(domainData).length
            && domainRecordData.length ?
            <Container>
              <Row>
                <Col>
                  <h5 className="title-5 mb-1 breadcrumb__wrapper d-flex middle-xs">
                    <Link to={{ pathname: '/accounts/list-dns-manager' }}>
                      Domains
                    </Link>
                    <span className="breadcrumb-divider">/</span>
                    {domainSingle.name}
                  </h5>
                </Col>

                <Col>
                  <div className="text-right">
                    <Components.Button variant="black-link" size="small">
                      <Components.Icon name="highlight_off" />
                      Disable
                    </Components.Button>
                    <Components.Button variant="danger-link" size="small">
                      <Components.Icon name="delete_forever" />
                      Delete
                    </Components.Button>
                  </div>
                </Col>
              </Row>

              <Components.SoaRecords domainData={domainData} />
              <Components.NsRecords domainData={domainData} domainRecordData={domainRecordData} />
              <Components.MxRecords domainRecordData={domainRecordData} />
              <Components.ARecords domainData={domainData} domainRecordData={domainRecordData} />
              <Components.CNameRecords domainData={domainData} domainRecordData={domainRecordData} />
              <Components.TxtRecords domainRecordData={domainRecordData} />
              <Components.SrvRecords domainRecordData={domainRecordData} />
              <Components.CaaRecords domainRecordData={domainRecordData} />

            </Container>
          : <Components.Loading /> }
        </React.Fragment>
      )
    }
  }
}

const queryOptions = {
  collection: Domains,
  queryName: 'domainsSingleQuery',
  fragmentName: 'DomainItem',
};

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

const mapPropsFunction = props => ({
  ...props,
  documentId: props.match && props.match.params._id,
});

registerComponent({
  name: 'DomainSummaryPage',
  component: DomainSummaryPage,
  hocs: [
    mapProps(mapPropsFunction),
    withMutation(instanceOptions),
    withUpdate({
      collection: Domains,
      fragmentName: 'DomainItem',
    }),
    [withSingle, queryOptions],
  ]
});
