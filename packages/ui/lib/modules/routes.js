import Skawe from 'meteor/skawe:lib';

Skawe.routes.add([
  {name: 'home',              path: '/',                 component: Skawe.components.HomePage},
  {name: 'login',             path: '/login',            component: Skawe.components.LoginPage},
  {name: 'register',          path: '/register',         component: Skawe.components.RegisterPage},
  {name: 'forgot-password',   path: '/forgot-password',  component: Skawe.components.ForgotPassword},
  {name: 'marketplace',       path: '/marketplace',      component: Skawe.components.MarketPlacePage},
  {name: 'marketplaceapps',   path: '/marketplace/apps', component: Skawe.components.MarketPlaceAppsPage},
  {name: 'domains',           path: '/domains',          component: Skawe.components.DomainsPage},

]);
