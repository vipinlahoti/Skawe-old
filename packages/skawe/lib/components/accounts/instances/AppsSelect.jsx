import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import { Apps } from '../../../modules/apps/index.js';

class AppsSelect extends Component {

  handleChange = async e => {
    const id = e.target.id;
    const splitId = id.split('^');
    this.props.selectedApps(splitId);
    this.props.closeModal();
  }

  render() {
    const { loading, results, title, markSelectedDistro } = this.props;

    if (loading) {
      return <Components.Loading />;
    
    } else if (results && results.length > 0) {
      const setAppsSelectList = results;

      return (
        <div className="select-list">
          <div className="mb-2">
            {setAppsSelectList.map((apps, index) => 
              <ListGroup key={index}>
                <Form.Label className="admin-checkbox admin-selectbox">
                  <input 
                    type="radio"
                    name="distributions"
                    id={`${apps['distId']}^${apps['script']}^${apps['label']}^${apps['image']}^${apps['typeId']}^${apps['username']}`}
                    onChange={this.handleChange}
                  />
                  <ListGroup.Item className={markSelectedDistro === apps.label ? 'active' : ''}>
                    <div className="admin-card-description">
                      <div className="d-flex middle-xs">
                        <div className="admin-card-image admin-select-card-image d-flex middle-xs">
                          <img src={apps.image} alt={apps.label} />
                        </div>
                        <p className="mb-0">{apps.label}</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                </Form.Label>
              </ListGroup>
            )}
          </div>
        </div>
      )
    
    } else {
      return (
        <React.Fragment>
          <p>No Apps available</p>
        </React.Fragment>
      )
    }

  }
}

const options = {
  collection: Apps,
  fragmentName: 'AppItem',
};

registerComponent({ name: 'AppsSelect', component: AppsSelect, hocs: [[withMulti2, options]] });
