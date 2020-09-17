import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Link } from 'react-router-dom';

const DocsCategories = ({ doc }) => {
  return (
    <React.Fragment>
      {doc.categories.map(({ _id, slug, name }) => (
        <Link key={_id} to={`/docs/category/${slug}`}>
          {name}
        </Link>
      ))}
    </React.Fragment>
  );
};

registerComponent({ name: 'DocsCategories', component: DocsCategories });
