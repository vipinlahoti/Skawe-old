import { Components, registerComponent, withMutation, withMessages } from 'meteor/vulcan:core';
import React, { Component } from 'react';

class DeleteRecords extends Component {

  cancelRecord = async e => {
    this.props.closeModal();
  }
  
  deleteRecord = async e => {
    const domainId = this.props.domainData.id;
    const recordId = this.props.records.id
      
    dataMutation = {
      url: `domains/${domainId}/records/${recordId}`,
      method: 'DELETE'
    }

    try {
      const result = await this.props.getInstancesData({ dataMutation });

      const {
        data: {
          getInstancesData
        }
      } = result;
      const body = getInstancesData.data;

      if (body.statusCode === 200) {
        this.props.closeModal();
        this.props.flash({ id: 'records.deleted', type: 'success' });
        this.props.domainRecords();
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  }

  render() {
    return (
      <React.Fragment>
        Are you sure you want to delete this record?

        <div className="d-block mt-2">
          <Components.Button variant="black-link" onClick={this.cancelRecord}>
            Cancel
          </Components.Button>

          <Components.Button variant="danger" onClick={this.deleteRecord}>
            Delete
          </Components.Button>
        </div>
      </React.Fragment>
    )
  }
}

const instanceOptions = {
  name: 'getInstancesData',
  args: { dataMutation: 'JSON' }
};

registerComponent({
  name: 'DeleteRecords',
  component: DeleteRecords,
  hocs: [
    withMessages,
    withMutation(instanceOptions),
  ]
});
