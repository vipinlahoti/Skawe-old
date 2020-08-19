import { Utils, Components, registerComponent, withMutation } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Apps } from '../../modules/apps/collection.js';

const Scripts = ({ document: scripts }) => {
  if (scripts.script) {
    const getScript = scripts.script;
    return Utils.trimHTML(getScript, 5);
  }
}

class AdminOneClickApps extends Component {
  state = {
    setApiData: {}
  }

  componentDidMount() {
    const setApiData = JSON.parse(localStorage.getItem('appsList'));
    if (setApiData !== null) this.setState({ setApiData });
  }

  fetchAPI = async e => {
    const dataMutation = {
      url: 'stackscripts',
      type: 'full',
      filter: true,
      method: 'GET'
    }
    localStorage.removeItem('appsList');

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        },
      } = result;

      const body = getInstancesData.data;
      const flatBody = body.data;
      let apiData = [];

      for (i = 0; i < flatBody.data.length; i++) {
        const makeApiData = {
          id: flatBody['data'][i]['id'],
          label: flatBody['data'][i]['label'],
          username: flatBody['data'][i]['username'],
          script: flatBody['data'][i]['script'],
          images: flatBody['data'][i]['images'][0],
        }

        apiData.push(makeApiData);
      }
      
      // localstorage setter
      localStorage.setItem('appsList', JSON.stringify(apiData));

      if (apiData) {
        this.setState({ setApiData: apiData });
      }

    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  clearLStorage = async e => {
    localStorage.removeItem('appsList');
  }

  render() {
    const { setApiData } = this.state;

    return (
      <React.Fragment>
        <Components.HeadTags title="One Click Apps" description="One Click Apps Page" />
        
        <div className="section-xsmall">
          <Row>
            <Col>
              <div className="d-flex between-xs">
                <h5 className="title-5 mb-1">One Click Apps List from API</h5>
                <div>
                  <Components.Button size="small" onClick={this.clearLStorage}>
                    Clear Local Storage
                  </Components.Button>
                  <Components.Button size="small" variant="primary-fill" onClick={this.fetchAPI}>
                    Refetch from API
                  </Components.Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {Object.keys(setApiData).length ? 
          <Components.InstanceOriginalJsonCard
            setApiData={setApiData}
            collection={Apps}
          /> : null }

        <hr />

        <div className="section-xsmall">
          <Row>
            <Col>
              <h5 className="title-5 mb-1">One Click Apps from Database</h5>
              <Components.Datatable
                collection={Apps}
                columns={[
                  { name: 'label' },
                  { name:  'distId' },
                  { name: 'typeId' },
                  { name: 'script', component: Scripts},
                  { name: 'image' }
                ]}
              />
            </Col>
          </Row>
        </div>

      </React.Fragment>
    )
  }
}

const options = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

withMutation(options)(AdminOneClickApps);
registerComponent('AdminOneClickApps', AdminOneClickApps, [withMutation, options]);
