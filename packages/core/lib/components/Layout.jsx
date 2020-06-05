import Skawe from 'meteor/skawe:lib';
import React from 'react';

const Layout = (props, {children}) =>
  <div className="wrapper" id="wrapper">{children}</div>;

Skawe.registerComponent('Layout', Layout);
