import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class CreateBlockStoragePage extends Component {
  // state = {
  //   selectLabel: '',
  //   selectSizeCount: 20,
  //   selectRegion: '',
  //   selectServerPlans: '',
  //   selectTags: [],
  // }

  // serverLabel = (setLabel) => {
  //   this.setState({
  //     selectLabel: setLabel
  //   });
  // }

  // selectedSizeCount = (setSizeCount) => {
  //   this.setState({
  //     selectSizeCount: setSizeCount
  //   });
  // }

  // selectedRegion = (setRegion) => {
  //   this.setState({
  //     selectRegion: setRegion
  //   });
  // }

  // selectedInstance = (setInstance) => {
  //   this.setState({
  //     selectServerPlans: setInstance
  //   });
  // }

  // selectedTags = (setTags) => {
  //   this.setState({
  //     selectTags: setTags
  //   });
  // }

  render() {
    // const { selectRegion, selectLabel, selectServerPlans, selectSizeCount } = this.state;

    return (
      <React.Fragment>
        <Skawe.components.HeadTags title="Block Storage" description="Block Storage Page" />

          <Skawe.components.SkawePriceSummaryForms
            heading="Create a Block Storage"
            fields={[
              {
                id: 'label',
                type: 'text',
                label: 'Label',
                help: 'Add a label to your Backup.',
                required: true
              },
              {
                id: 'volume-size',
                type: 'number',
                label: 'Size',
                help: 'The size of the Storage is in GB',
                required: true
              },
              {
                id: 'instance',
                type: 'text',
                label: 'Instance',
                help: 'Attach block storage as a secondary drive to instances.'
              },
              {
                id: 'region',
                type: 'text',
                label: 'Region',
                help: 'Regions supporting Block Storage are displayed.'
              },
              {
                id: 'tags',
                type: 'text',
                label: 'Tags',
                help: 'Type to choose or create a tag'
              },
            ]}
          />
      </React.Fragment>
    )
  }
}

Skawe.registerComponent('CreateBlockStoragePage', CreateBlockStoragePage);



// <Container>
//   <Row>
//     <Col sm={12} md={8}>
//       <div className="section-xsmall">
//         <h5 className="title-5 mb-1">Create a Block Storage</h5>
//       </div>

//       <Skawe.components.InstanceLabel
//         title="Label"
//         name="selectLabel"
//         description="Add a label to your Backup."
//         required={true}
//         serverLabel={this.serverLabel}
//       />
//       <Skawe.components.InstanceSizeCount
//         title="Size"
//         name="selectSizeCount"
//         description="The size of the Storage is in GB"
//         required={true}
//         selectedSizeCount={this.selectedSizeCount}
//       />

//       <Skawe.components.InstanceLabel
//         title="Instance"
//         name="selectInstance"
//         description="Attach block storage as a secondary drive to instances."
//         required={true}
//         selectedInstance={this.selectedInstance}
//       />

//       <Skawe.components.Region
//         storageDescription="Regions supporting Block Storage are displayed."
//         selectedRegion={this.selectedRegion}
//       />

//       <Skawe.components.InstanceLabel
//         title="Tags"
//         name="selectTags"
//         placeholder="Type to choose or create a tag"
//         selectedTags={this.selectedTags}
//       />
//     </Col>

//     <Col sm={12} md={4}>
//       <Skawe.components.PriceSummary
//         region={selectRegion}
//         serverLabel={selectLabel}
//         serverPlans={selectServerPlans}
//         selectSizeCount={selectSizeCount}
//        />
//     </Col>
//   </Row>
// </Container>
