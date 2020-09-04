import { withSingle2, Components, getSetting, registerComponent, withCurrentUser, withMessages, withUpdate } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Navbar, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title');

class UsersProfileCheck extends Component {
  state = {
    country: '',
    region: '',
    nextStep: false
  }

  selectCountry = val => {
    this.setState({ country: val });
  }
 
  selectRegion = val => {
    this.setState({ region: val });
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  }

  showNext = e => {
    const { country, region } = this.state;
    const checkFields = country.length > 0 && region.length > 0;
    
    this.setState({
      nextStep: checkFields
    })
  }

  updateProfile = async e => {
    const { updateUser, currentUser, flash } = this.props;
    const { country, region } = this.state;

    if (currentUser) {
      this.props.updateUser({
        selector: { _id: currentUser._id},
        data: { 
          country: country,
          region: region
        }
      }).then(() => flash({ id: 'users.edit_success', properties: { name: Users.getDisplayName(currentUser) }, type: 'success' }))
    }
  }

  render() {
    const { currentUser, loading, flash } = this.props;
    console.log('currentUser: ', currentUser)
    // if user is not logged in, or userMustCompleteFields is still loading, don't return anything
    if (!currentUser || loading) {

      return null;

    } else {
      const { country, region, nextStep } = this.state;
      const checkFields = country.length > 0 && region.length > 0;
      const activeTab = nextStep ? 'active-tab' : '';

        return (
          <div className="profile__complete section">
            <Container>
              <Row className="center-xs text-left">
                <Col sm={12} md={8}>
                  <Row>
                    <Col>
                      <Navbar variant="light">
                        <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
                      </Navbar>
                    </Col>
                  </Row>

                  <Row className="center-xs">
                    <Col>

                      <div className="complete__profile-wrapper">
                        <ul className="complete__profile-wrapper-links">
                          <li className={`complete__profile-wrapper-item active ${activeTab}`}>Your Details</li>
                          <li className={`complete__profile-wrapper-item ${activeTab}`}>Billing Info</li>
                        </ul>

                        <div className="pt-3">
                          <div className={`complete__profile-tab text-left active ${activeTab}`}>
                            <Components.FormElement>
                              
                              <div className="form-group">
                                <label>Country</label>
                                <CountryDropdown
                                  className="form-control"
                                  value={country}
                                  priorityOptions={['IN']}
                                  onChange={(val) => this.selectCountry(val)} />
                              </div>

                              <div className="form-group">
                                <label>Region</label>
                                <RegionDropdown
                                  className="form-control"
                                  country={country}
                                  value={region}
                                  onChange={(val) => this.selectRegion(val)} />
                              </div>
                              <Components.Button variant="primary-fill" onClick={this.showNext} disabled={!checkFields}>
                                Next
                              </Components.Button>
                            </Components.FormElement>
                          </div>

                          <div className={`complete__profile-tab text-left ${activeTab}`}>
                            <div className="d-block mb-2">
                              Billing Info
                            </div>
                            <Components.Button variant="primary-fill" onClick={this.updateProfile}>
                              Complete Profile
                            </Components.Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                </Col>
              </Row>
            </Container>
          </div>
        );
      // } else {

      //   return null;

      // }
    }

  }
}


// UsersProfileCheck.propTypes = {
//   currentUser: PropTypes.object
// };

// UsersProfileCheck.displayName = 'UsersProfileCheck';

// const mustCompleteFragment = gql`
//   fragment UsersMustCompleteFragment on User {
//     _id
//     ${Users.getRequiredFields().join('\n')}
//   }
// `

// const options = {
//   collection: Users,
//   queryName: 'usersMustCompleteQuery',
//   fragment: mustCompleteFragment,
// };


// const options = {
//   collection: Users,
//   fragmentName: 'UsersProfile',
// };

registerComponent({
  name: 'UsersProfileCheck',
  component: UsersProfileCheck,
  hocs: [
    withMessages,
    withCurrentUser,
    withUpdate({
      collection: Users,
      fragmentName: 'UsersCurrent',
    }),
    // [withSingle2, options]
  ]
});
