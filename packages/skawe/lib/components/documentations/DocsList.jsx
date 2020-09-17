import { Components, registerComponent, withMulti2, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import { Documentations } from '../../modules/documentations/index.js';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import classNames from 'classnames';

const Error = ({ error }) => (
  <Components.Alert className="flash-message" variant="danger">
    <FormattedMessage id={error.id} values={{ value: error.value }} />
    {error.message}
  </Components.Alert>
);

const DocsNoMore = () => (
  <p className="docs-no-more">
  </p>
);
const DocsLoading = () => (
  <div className="docs-load-more-loading">
    <Components.Loading />
  </div>
);

const DocsNoResults = props => (
  <p className="docs-no-results">
    <FormattedMessage id="docs.no_results" />
  </p>
);

const DocsLoadMore = ({ loading, loadMore, count, totalCount }) => (
  <div className={classNames('docs-load-more', { 'docs-load-more-loading': loading })}>
    <a
      className="docs-load-more-link"
      href="#"
      onClick={e => {
        e.preventDefault();
        loadMore();
      }}
    >
      <span>
        <FormattedMessage id="docs.load_more" />
      </span>
      &nbsp;
      {totalCount ? <span className="load-more-count">{`(${count}/${totalCount})`}</span> : null}
    </a>
    {loading ? (
      <div className="docs-load-more-loader">
        <Components.Loading />
      </div>
    ) : null}
  </div>
);

const DocsList = ({
  className,
  results,
  loading,
  count,
  totalCount,
  loadMore,
  showHeader = true,
  showFooter = true,
  networkStatus,
  currentUser,
  error,
  terms = {},
}) => {
  const loadingMore = networkStatus === 2;
  const hasResults = results && results.length > 0;
  const hasMore = results && totalCount > results.length;

  const renderContents = () => {
    if (loading) {
      // loading
      return <DocsLoading />;
    } else if (results && results.length > 0) {
      // show results
      return results.map(doc => (
        <Components.DocsItem doc={doc} key={doc._id} currentUser={currentUser} terms={terms} />
      ));
    } else {
      // no results
      return <DocsNoResults />;
    }
  };

  const renderFooter = () => {
    if (hasMore) {
      // there are more docs to load
      return <DocsLoadMore loading={loadingMore} loadMore={loadMore} count={count} totalCount={totalCount} />;
    } else if (hasResults) {
      // there were docs, but there aren't any more to load
      return <DocsNoMore />;
    } else {
      // there were no docs to load at all
      return null;
    }
  };

  return (
    <React.Fragment>
      {error && <Error error={error} />}
      {renderContents()}
      {showFooter && <div className="docs-list-footer">{renderFooter()}</div>}
    </React.Fragment>
  );
};

const options = {
  collection: Documentations,
  fragmentName: 'DocumentationItem',
};

registerComponent({ name: 'DocsList', component: DocsList, hocs: [withCurrentUser, [withMulti2, options]] });
