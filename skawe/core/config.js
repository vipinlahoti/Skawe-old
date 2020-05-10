/**
 * @summary Kick off the namespace for Skawe.
 * @namespace Skawe
 */

// eslint-disable-next-line no-undef
const Skawe = {};

// eslint-disable-next-line no-undef
Skawe.VERSION = '0.0.1';

// Components
Skawe.components = {};

// Register Component
Skawe.registerComponent = (name, component) => {
  Skawe.components[name] = component;
};

// Head Tags
Skawe.headtags = {
  meta: [],
  link: [],
  script: [],
};

// eslint-disable-next-line no-undef
export default Skawe;
