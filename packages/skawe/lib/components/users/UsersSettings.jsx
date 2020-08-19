import { Components, registerComponent, withCurrentUser, withUpdate, withMessages } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import React, { Component } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class UsersSettings extends Component {

  state = {
    autoBackup: this.props.currentUser.autoBackup,
    closeAccount: false
  }

  setTheme = async e => {
    const { updateUser, currentUser, flash } = this.props;
    const themeSelected = e.target.id;

    if (currentUser) {
      updateUser({
        selector: { _id: currentUser._id},
        data: { theme: themeSelected }
      }).then(() => flash({ id: 'users.theme_edit_success', type: 'success' }))
    }
  }

  autoBackup = async e => {
    const { updateUser, currentUser, flash } = this.props;
    const name = e.target.name;
    const isChecked = e.target.checked;

    this.setState({
      autoBackup: isChecked
    })

    if (currentUser) {
      updateUser({
        selector: { _id: currentUser._id},
        data: { autoBackup: isChecked }
      }).then(() => flash({ id: 'users.autobackup_edit_success', type: 'success' }))
    }
  }

  closeAccount = async e => {
    const name = e.target.name;
    const isChecked = e.target.checked;

    this.setState({
      [name]: isChecked
    })

    // const set = { 
    //   [name]: isChecked
    // }
    // const modifier = { $set: set };

    // // call method with _id of document being edited and modifier
    // Meteor.call('users.edit', document._id, modifier);
  }

  render() {
    const activeTheme = this.props.currentUser.theme;

    return (
      <React.Fragment>
        <Components.UsersHeaders />

        <Container>
          <Row>
            <Col>
              <div className="flex-column nav nav-pills" role="tablist">
                <div className="nav-item">
                  <Link to={{ pathname: '/accounts' }} className="nav-link" role="tab">
                    Your Details
                  </Link>
                </div>
                <div className="nav-item">
                  <Link to={{ pathname: '/accounts/billing' }} className="nav-link" role="tab">
                    Billing Info
                  </Link>
                </div>
                <div className="nav-item">
                  <Link to={{ pathname: '/accounts/settings' }} className="nav-link active" role="tab">
                    Settings
                  </Link>
                </div>
              </div>

              <div className="tab-content">
                <Row>
                  <Col>

                    <div className="section-distributions bg-light mb-1">
                      <h6 className="title-6">Theme</h6>
                      <div className="theme-selection mb-1">
                        {[{
                            id: 'light-mode',
                            name: 'Light Mode',
                          },
                          {
                            id: 'dark-mode',
                            name: 'Dark Mode'
                          }].map((list, index) => 
                          <ListGroup key={index} className="theme-check">
                            <Form.Label className="admin-checkbox admin-selectbox">
                              <input 
                                type="radio"
                                name="theme"
                                id={list.id}
                                checked={this.state.themeMode}
                                onChange={this.setTheme}
                              />
                              <ListGroup.Item className={classNames(list.id, list.id === activeTheme ? 'active' : '')}>
                                <div className="admin-card-description d-flex middle-xs center-xs">
                                  {list.name}
                                </div>
                              </ListGroup.Item>
                            </Form.Label>
                          </ListGroup>
                        )}
                      </div>
                    </div>
                    
                    {/*
                    <div className="section-distributions bg-light mb-1">
                      <h6 className="title-6">Auto Backup</h6>
                      <Form.Group>
                        <Form.Label className="custom-checkbox mb-0">
                          <input
                            type="checkbox"
                            id="autoBackup"
                            name="autoBackup"
                            checked={this.state.autoBackup}
                            onChange={this.autoBackup}
                          />
                          <div className="check"></div>
                          <div className="mb-0">
                            Create a backup for all cloud instances automatically when new instace is created.
                          </div>
                        </Form.Label>
                      </Form.Group>
                    </div>
                    
                    <div className="section-distributions bg-light mb-1">
                      <h6 className="title-6">Close Account</h6>
                      <Form.Group>
                        <Form.Label className="custom-checkbox mb-0">
                          <input
                            type="checkbox"
                            id="closeAccount"
                            name="closeAccount"
                            checked={this.state.closeAccount}
                            onChange={this.closeAccount}
                          />
                          <div className="check"></div>
                          <div className="mb-0">
                            Closing Account will result in permanent data loss, and you may require to register again in future.
                          </div>
                        </Form.Label>
                      </Form.Group>
                      <Components.Button variant="danger" disabled={!this.state.closeAccount}>
                        Close Account
                      </Components.Button>
                    </div>
                    */}

                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

registerComponent({
  name: 'UsersSettings',
  component: UsersSettings,
  hocs: [
    withCurrentUser,
    withMessages,
    withUpdate({
      collection: Users,
      fragmentName: 'UsersCurrent',
    })
  ]
});
