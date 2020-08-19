import { Components, registerComponent, Utils, withAccess } from 'meteor/vulcan:core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Instances } from '../../modules/instances/collection.js';

const Label = ({ document: instance }) => {
  const getImage = instance.image.split(' ')[0];
  const image = getImage.toLowerCase();

  return (
    <React.Fragment> 
      <Link to={instance.pagePath}>
        <span className="d-flex middle-xs">
          <span className="admin-card-image d-flex middle-xs">
            <img src={`/images/${image}.png`} alt={instance.label} />
          </span>
          <span>
            <span className="d-block"><strong>{instance.label}</strong></span>
            <span>{instance.image}, {instance.ram}, {instance.cpu}, {instance.storage} </span>
          </span>
        </span>
      </Link>
    </React.Fragment>
  )
}

const Status = ({ document: instance }) => {
  return (
    <span className="d-flex middle-xs">
      {instance.status === 'running' ?
        <span className="instance-status bg-success"></span>
      : instance.status === 'offline' ?
        <span className="instance-status bg-danger"></span>
      : <span className="instance-status bg-warning"></span>
      }
      {Utils.toTitleCase(instance.status)}
    </span>
  )
}

const AdminCloudInstances = () => (
  <div className="admin-instances">
    <Components.HeadTags title="Instances" description="Instances Page" />
    
    <h5 className="title-5 mb-1">Admin Instance</h5>
    <div className="instances__list">
      <Components.Datatable
        collection={Instances}
        columns={[
          { name: 'label', component: Label },
          { name: 'instanceId'},
          { name: 'type', sortable: true },
          { name: 'createdAt', sortable: true, contents: 'date'},
          { name: 'userId', label: 'User', sortable: true},     
          { name: 'status', component: Status, sortable: true }
        ]}
        options={{
          fragmentName: 'InstanceItem',
        }}
        showNew={true}
        showEdit={true}
      />
    </div>
  </div>
);

const accessOptions = {
  groups: ['admins'],
  redirect: '/',
  message: 'Sorry, you do not have the rights to access this page.',
};

registerComponent('AdminCloudInstances', AdminCloudInstances, [withAccess, accessOptions]);
