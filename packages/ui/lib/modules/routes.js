import Skawe from 'meteor/skawe:lib';

Skawe.routes.add([
  {name: 'home',              path: '/',                        component: Skawe.components.HomePage},

  // Accounts
  {name: 'login',             path: '/login',                   component: Skawe.components.LoginPage},
  {name: 'register',          path: '/register',                component: Skawe.components.RegisterPage},
  {name: 'forgot-password',   path: '/forgot-password',         component: Skawe.components.ForgotPassword},

  // Market place
  {name: 'marketplace',       path: '/marketplace',             component: Skawe.components.MarketPlacePage},
  {name: 'customiso',         path: '/marketplace/custom-iso',  component: Skawe.components.CustomISOPage},

  // Products
  {name: 'cloud-instance',    path: '/products/cloud-instance', component: Skawe.components.CloudInstancePage},
  {name: 'object-storage',    path: '/products/object-storage',  component: Skawe.components.ObjectStoragePage},
  {name: 'block-storage',     path: '/products/block-storage',  component: Skawe.components.BlockStoragePage},
  {name: 'load-balancers',    path: '/products/load-balancers', component: Skawe.components.LoadBalancersPage},

  // Features
  {name: 'control-panel',     path: '/features/control-panel',  component: Skawe.components.ControlPanelPage},
]);
