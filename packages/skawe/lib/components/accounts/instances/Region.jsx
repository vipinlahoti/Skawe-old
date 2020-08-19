import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';
import { Regions } from '../../../modules/regions/index.js';

class Region extends Component {
  handleChange = async e => {
    const id = e.target.id;
    const splitId = id.split(',');
    this.props.selectedRegion(splitId);
    this.props.closeModal();
  }

  render() {
    const { results, title, markSelectedRegion } = this.props;
    const setDataList = _groupBy(results, 'region');

    return (
     <div className="select-list">
      {Object.entries(setDataList).map(([key, value], index) => 
        <React.Fragment key={index}>
          <div className="mb-2">
            <h6 className="title-6">{key}</h6>
            {value.map((region, index) => 
              <ListGroup key={index}>
                <Form.Label className="admin-checkbox admin-selectbox">
                  <input 
                    type="radio"
                    name="regions"
                    id={`${region['city']},${region['country']},${region['regionId']},${region['image']}`}
                    onChange={this.handleChange}
                  />
                  <ListGroup.Item className={markSelectedRegion === region.city ? 'active' : ''}>
                    <div className="admin-card-description">
                      <div className="d-flex middle-xs">
                        <div className="admin-card-image admin-select-card-image d-flex middle-xs">
                          <img src={region.image} alt={region.city} />
                        </div>
                        <p className="mb-0">{region.city}, {region.country}</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                </Form.Label>
              </ListGroup>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
    )
  }
}

const options = {
  collection: Regions,
  fragmentName: 'RegionItem',
};

registerComponent({ name: 'Region', component: Region, hocs: [[withMulti2, options]] });
