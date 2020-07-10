import { onPageLoad } from 'meteor/server-render';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { object } from 'prop-types';
import { Helmet } from 'react-helmet';

onPageLoad(async (sink) => {
  const context = {};
  let htmlContent = '';

  const App = 
    <StaticRouter location={sink.request.url} context={context}>
      <Skawe.components.App />
    </StaticRouter>;

  htmlContent = ReactDOM.renderToString(App);

  const wrappedHtmlContent = `<div id="react-app">${htmlContent}</div>`;
  const helmet = Helmet.renderStatic();

  sink.appendToBody(wrappedHtmlContent);
  sink.appendToHead(helmet.meta.toString());
  sink.appendToHead(helmet.title.toString());  
});
