import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const PostsStats = ({post}) => {
  return (
    <React.Fragment>
      {post.score ? <span className="d-flex middle-xs" title="Score"><Components.Icon name="landscape" iconClass="mr-xs" /> {Math.floor((post.score || 0)*10000)/10000}</span> : ''}
    </React.Fragment>
  )
}

registerComponent({ name: 'PostsStats', component: PostsStats });
