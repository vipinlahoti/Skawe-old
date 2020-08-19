import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Link } from 'react-router-dom';

const PostsCategories = ({ post }) => {
  return (
    <React.Fragment>
      {post.categories.map(({ _id, pagePath, name }) => (
        <Link className="text-white" key={_id} to={pagePath}>
          {name}
        </Link>
      ))}
    </React.Fragment>
  );
};

registerComponent({ name: 'PostsCategories', component: PostsCategories });
