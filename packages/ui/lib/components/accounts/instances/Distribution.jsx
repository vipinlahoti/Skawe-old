import Skawe from 'meteor/skawe:lib';
import { Distributions } from 'meteor/skawe:instances';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Row, Col, ListGroup, Form } from 'react-bootstrap';
import _groupBy from 'lodash/groupBy';

class Distribution extends Component {
  state = {
    checkedItems: new Map(),
    apiDataList: this.props.apiData
  }

  handleChange = async e => {
    const id = e.target.id;
    const splitId = id.split(',');
    this.props.selectedDistribution(splitId);
  }

  render() {
    const { dataList } = this.props;
    const setDistributionList = _groupBy(dataList, 'category');
    console.log(setDistributionList)

    return (
      <div className="section-distributions mb-1 bg-light">
        <Row>
          {Object.entries(setDistributionList).map(([key, value], index) => 
            <Col md={4} key={index}>
              <ListGroup>
                <Form.Label className="admin-checkbox">
                  <input 
                    type="radio"
                    name="distributions"
                  />
                  <ListGroup.Item className="p-1">
                    <div className="admin-card-image">
                      <img src={value[0]['image']} alt={key} />
                    </div>
                    <div className="admin-card-description">
                      <h6 className="title-6 mb-0">{key}</h6>
                      {value.map((version, index) => 
                        <p className="mb-0" key={index}><small>{version.label}</small></p>
                      )}
                    </div>
                  </ListGroup.Item>
                </Form.Label>
              </ListGroup>
            </Col>
            
          )}
        </Row>
      </div>
    )
  }
}

const DistributionContainer = withTracker(() => {
  Meteor.subscribe('distributions.list');

  return {
    dataList: Distributions.find().fetch(),
  };
})(Distribution);

Skawe.registerComponent('Distribution', DistributionContainer);




// {dataList.map((distro, index) => 
//   <Col md={4} key={index}>
//     <ListGroup>
//       <Form.Label className="admin-checkbox">
//         <input 
//           type="radio"
//           id={`${distro['id']},${distro['vendor']},${distro['label']}`}
//           name="distributions"
//           onChange={this.handleChange}
//         />
//         <ListGroup.Item className="p-1">
//           <div className="admin-card-image">
//             <img src={distro.image} alt={distro.label} />
//           </div>
//           <div className="admin-card-description">
//             <h6 className="title-6 mb-0">{distro.label}</h6>
//           </div>
//         </ListGroup.Item>
//       </Form.Label>
//     </ListGroup>
//   </Col>
// )}
