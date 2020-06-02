import Skawe from 'meteor/skawe:lib';
import React from 'react';

const DashboardPage = () => {
  return (
    <React.Fragment>
      <Skawe.components.HeadTags title="Dashboard" description="Dashboard Page" />
      
      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6">Cloud Instances</h6>

        <div>
          No item to display
        </div>
      </div>

      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6">Backups</h6>

        <div>
          No item to display
        </div>
      </div>

      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6">Block Storage</h6>

        <div>
          No item to display
        </div>
      </div>

      <div className="section-distributions mb-1 bg-light">
        <h6 className="title-6">Domains</h6>

        <div>
          No item to display
        </div>
      </div>
    </React.Fragment>
  )
}

Skawe.registerComponent('DashboardPage', DashboardPage);
