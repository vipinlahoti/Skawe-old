import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';

const DashboardPage = (props, { currentUser }) => {

  return (
    <React.Fragment>
      <Components.HeadTags title="Dashboard" description="Dashboard Page" />
      
      <div className="section-xsmall">
        <h6 className="title-6">Cloud Instances</h6>

        <div>
          No item to display
        </div>
      </div>

      <div className="section-xsmall">
        <h6 className="title-6">Backups</h6>

        <div>
          No item to display
        </div>
      </div>

      <div className="section-xsmall">
        <h6 className="title-6">Block Storage</h6>

        <div>
          No item to display
        </div>
      </div>

      <div className="section-xsmall">
        <h6 className="title-6">Load Balancer</h6>

        <div>
          No item to display
        </div>
      </div>

      <div className="section-xsmall">
        <h6 className="title-6">Domains</h6>

        <div>
          No item to display
        </div>
      </div>



    </React.Fragment>
  )
}

DashboardPage.contextTypes = {
  currentUser: PropTypes.object
}

registerComponent({ name: 'DashboardPage', component: DashboardPage, hocs: [withCurrentUser] });
