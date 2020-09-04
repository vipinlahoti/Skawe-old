import { Components, registerComponent, Utils, withSingle, withMutation, withUpdate, withDelete } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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

      this.setState({ domainData: {} });
      Utils.domains.getDomainData = {};
    
      if (domainData) {
        this.setState({ domainData });
        Utils.domains.getDomainData = domainData;
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  domainAction = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const domainId = getCurrentRoute[getCurrentRoute.length - 1];
    const domainDbId = getCurrentRoute[getCurrentRoute.length - 2];

    let setAction;

    if (e === 'disable') {
      setAction = {
        status: 'disabled'
      };
    } else {
      setAction = {
        status: 'active'
      };
    }

    const dataMutation = {
      url: `domains/${domainId}`,
      method: 'PUT',
      data: setAction
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

      this.setState({ domainData: {} });
      Utils.domains.getDomainData = {};
    
      if (domainData) {
        this.setState({ domainData });
        Utils.domains.getDomainData = domainData;
        const data = {
          status: domainData.status,
        };
        this.props.updateDomain({
          selector: { _id: domainDbId },
          data: data
        })
        this.getDomain();
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  deleteDomain = async e => {
    const currentRoute = this.props.location.pathname;
    const getCurrentRoute = currentRoute.split('/');
    const domainId = getCurrentRoute[getCurrentRoute.length - 1];
    const domainDbId = getCurrentRoute[getCurrentRoute.length - 2];

    const dataMutation = {
      url: `domains/${domainId}`,
      method: 'DELETE'
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const deleteDomain = getInstancesData.data;

      if (deleteDomain.statusCode === 200) {
        this.props.deleteDomain({
          selector: { _id: domainDbId }
        })
        .then(() => this.props.history.push({ pathname: '/accounts/list-dns-manager' }));
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

      this.setState({ domainRecordData: [] });
      Utils.domains.getDomainRecordsData = [];

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

      if (skaweDomainRecord === undefined || skaweDomainRecord.length === 0) {
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
                    {domainData.status === 'active' ? 
                      <Components.Button variant="black-link" size="small" onClick={() => this.domainAction('disable')}>
                        <Components.Icon name="highlight_off" />
                        Disable
                      </Components.Button>
                      :
                      <Components.Button variant="primary-link" size="small" onClick={() => this.domainAction('enable')}>
                        <Components.Icon name="autorenew" />
                        Enable
                      </Components.Button>
                    }
                    <Components.Button variant="danger-link" size="small" onClick={this.deleteDomain}>
                      <Components.Icon name="delete_forever" />
                      Delete
                    </Components.Button>
                  </div>
                </Col>
              </Row>

              <Components.SoaRecords
                domainData={domainData}
                getDomain={this.getDomain}
              />
              <Components.NsRecords
                domainData={domainData}
                domainRecordData={domainRecordData}
                domainRecords={this.domainRecords}
              />
              <Components.MxRecords
                domainData={domainData}
                domainRecordData={domainRecordData}
                domainRecords={this.domainRecords}
              />
              <Components.ARecords
                domainData={domainData}
                domainRecordData={domainRecordData}
                domainRecords={this.domainRecords}
              />
              <Components.CNameRecords
                domainData={domainData}
                domainRecordData={domainRecordData}
                domainRecords={this.domainRecords}
              />
              <Components.TxtRecords
                domainData={domainData}
                domainRecordData={domainRecordData}
                domainRecords={this.domainRecords}
              />
              <Components.SrvRecords
                domainData={domainData}
                domainRecordData={domainRecordData}
                domainRecords={this.domainRecords}
              />
              <Components.CaaRecords
                domainData={domainData}
                domainRecordData={domainRecordData}
                domainRecords={this.domainRecords}
              />

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
    withRouter,
    mapProps(mapPropsFunction),
    withMutation(instanceOptions),
    withUpdate({
      collection: Domains,
      fragmentName: 'DomainItem',
    }),
    withDelete({
      collection: Domains,
      fragmentName: 'DomainItem',
    }),
    [withSingle, queryOptions],
  ]
});
