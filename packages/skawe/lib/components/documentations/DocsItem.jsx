import { Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const DocsItem = ({ doc }) =>
  <div className="mb-2">
    <div className="badge badge-primary ml-0">
      {doc.categories && doc.categories.length > 0 && <Components.DocsCategories doc={doc} />}
    </div>

    <h5 className="title-5 blog-title mt-xs">
      <Link to={doc.pagePath} className="docs-item-title-link">
        {doc.title}
      </Link>
    </h5>

    <div className="d-flex middle-xs doced-at">
      {doc.postedAt ? <small>{moment(new Date(doc.postedAt)).fromNow()}</small> : <FormattedMessage id="docs.dateNotDefined" />}
    </div>
  </div>

registerComponent({ name: 'DocsItem', component: DocsItem });
