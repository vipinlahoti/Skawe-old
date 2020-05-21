import Skawe from 'meteor/skawe:lib';

Skawe.routes.add([
  {name: 'home',              path: '/',               component: Skawe.components.HomePage},
  {name: 'contact-sales',     path: '/contact-sales',  component: Skawe.components.ContactSalesPage},
  {name: 'pricing',           path: '/pricing',        component: Skawe.components.PricingPage},

  // Accounts
  {name: 'login',             path: '/login',            component: Skawe.components.LoginPage},
  {name: 'register',          path: '/register',         component: Skawe.components.RegisterPage},
  {name: 'forgot-password',   path: '/forgot-password',  component: Skawe.components.ForgotPassword},
  {name: 'reset-password',    path: '/reset-password',  component: Skawe.components.ResetPassword},

  // Market place
  {name: 'marketplace',       path: '/marketplace',             component: Skawe.components.MarketPlacePage},
  {name: 'customiso',         path: '/marketplace/custom-iso',  component: Skawe.components.CustomISOPage},

  // Products
  {name: 'cloud-instance',    path: '/products/cloud-instance', component: Skawe.components.CloudInstancePage},
  {name: 'block-storage',     path: '/products/block-storage',  component: Skawe.components.BlockStoragePage},
  {name: 'load-balancers',    path: '/products/load-balancers', component: Skawe.components.LoadBalancersPage},

  {name: 'dns-manager',           path: '/products/dns-manager',            component: Skawe.components.DnsManagerPage},
  {name: 'ddos-protection',       path: '/products/ddos-protection',        component: Skawe.components.DDosProtectionPage},
  {name: 'backups',               path: '/products/backups',                component: Skawe.components.BackupsPage},
  {name: 'professional-services', path: '/products/professional-services',  component: Skawe.components.ProfessionalServicesPage},
  {name: 'object-storage',        path: '/products/object-storage',         component: Skawe.components.ObjectStoragePage},

  // Features
  {name: 'control-panel',     path: '/features/control-panel',  component: Skawe.components.ControlPanelPage},

  // Users  
  {name: 'dashboard',       path: '/accounts/dashboard',  component: Skawe.components.DashboardPage},

]);
