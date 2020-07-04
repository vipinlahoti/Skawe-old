import Skawe from 'meteor/skawe:lib';
import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class ResizeInstance extends Component {
  state = {
    autoResize: false,
    selectServerPlans: []
  }

  autoResize = async e => {
    const name = e.target.name;
    const isChecked = e.target.checked;

    this.setState({
      [name]: isChecked
    })
  }

  selectedPlans = (setServerPlans) => {
    console.log(setServerPlans)
    this.setState({
      selectServerPlans: setServerPlans
    });
  }

  resizeInstance = async e => {
    e.preventDefault();
    console.log('resizeInstance');
  }

  render() {
    const { instance } = this.props;
    const { selectServerPlans, autoResize } = this.state;
    const checkDisabled = autoResize ||  selectServerPlans.length;

    return (
      <React.Fragment>
        <div className="section-distributions bg-light mb-1">
          <h6 className="title-6">Auto Resize Disk</h6>
          <Form.Group>
            <Form.Label className="custom-checkbox mb-0">
              <input
                type="checkbox"
                id="autoResize"
                name="autoResize"
                checked={this.state.autoResize}
                onChange={this.autoResize}
              />
              <div className="check"></div>
              <div className="mb-0">
                Would you like {Skawe.utils.capitalise(instance.image.split('/')[1])} Disk to be automatically scaled with this Skawe's new size? We recommend you keep this option enabled when available.
              </div>
            </Form.Label>
          </Form.Group>
        </div>

        <div className="bg-light mb-1">
          <Skawe.components.InstancePlans
            title="Choose a new plan"
            description="You can temporarily or permanently resize your Instance to a different plan."
            selectedPlans={this.selectedPlans}
            disableActive={instance.type}
          />
        </div>

        <Skawe.components.Button variant="primary" disabled={!checkDisabled} onClick={this.resizeInstance}>
          Resize a Server
        </Skawe.components.Button>

      </React.Fragment>  
    )
  }
}

Skawe.registerComponent('ResizeInstance', ResizeInstance);
