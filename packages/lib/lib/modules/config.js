/**
 * @summary Kick off the namespace for Skawe.
 * @namespace Skawe
 */

// eslint-disable-next-line no-undef
Skawe = {};

// Components
Skawe.components = {};

// Register Component
Skawe.registerComponent = (name, component) => {
  Skawe.components[name] = component;
};

/**
* @summary Routes namespace
* @namespace Skawe.routes
* @method Add a Routes to routes Array
* @param {object} routes - Array of Objects
*/
Skawe.routes = {
  routes: [],
  add(Routes) {
    const addedRoutes = Array.isArray(Routes) ? Routes : [Routes];
    this.routes = this.routes.concat(addedRoutes);
  }
};


/**
* @summary Subscriptions namespace
* @namespace Skawe.subscriptions
*/
Skawe.subscriptions = [];

/**
 * @summary Add a subscription to be preloaded
 * @param {string} subscription - The name of the subscription
 */
Skawe.subscriptions.preload = function (subscription, args) {
  Skawe.subscriptions.push({name: subscription, arguments: args});
};

// Head Tags
Skawe.headtags = {
  meta: [],
  link: [],
  script: [],
};

// Status
Skawe.statuses = [
  {
    value: 1,
    label: 'pending'
  },
  {
    value: 2,
    label: 'approved'
  },
  {
    value: 3,
    label: 'rejected'
  },
  {
    value: 4,
    label: 'spam'
  },
  {
    value: 5,
    label: 'deleted'
  }
];

// eslint-disable-next-line no-undef
export default Skawe;
