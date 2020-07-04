import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';

const OverviewInstance = ({instance}) => {
  return (
    <React.Fragment>
      <div className="section-distributions bg-light mb-1">
        <ul className="list small-list count-list">
          <li><span className="list-label">Location:</span> {instance.region}</li>
          {instance.ipv4.map((ip, index) =>
            <li key={index}><span className="list-label">{ip.split('.')[0] === '192' ? 'Private IP Address (IPv4)' : 'IP Address (IPv4)' }:</span>  {ip}</li>
          )}
          <li><span className="list-label">IP Address (IPv6):</span> {instance.ipv6}</li>
          <li><span className="list-label">OS:</span> {instance.image.split('/')[1]}</li>
          <li><span className="list-label">CPU:</span> {instance.specs.vcpus} vCore</li>
          <li><span className="list-label">RAM:</span> {instance.specs.memory / 1024} GB</li>
          <li><span className="list-label">Storage:</span> {instance.specs.disk / 1024} GB SSD</li>
          
          {/* <li><span className="list-label">Label:</span> <Link to={{ pathname: '/' }}>[Click here to add]</Link></li> */}
        </ul>
      </div>
    </React.Fragment>
  )
}

Skawe.registerComponent('OverviewInstance', OverviewInstance);
