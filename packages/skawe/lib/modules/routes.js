import { addRoute } from 'meteor/vulcan:core';

addRoute([
  {name: 'home',              path: '/',               componentName: 'HomePage'},
  {name: 'contact-sales',     path: '/contact-sales',  componentName: 'ContactSalesPage'},
  {name: 'pricing',           path: '/pricing',        componentName: 'PricingPage'},

  // Accounts
  {name: 'login',             path: '/login',            componentName: 'LoginPage'},
  {name: 'register',          path: '/register',         componentName: 'RegisterPage'},
  {name: 'forgot-password',   path: '/forgot-password',  componentName: 'ForgotPassword'},
  {name: 'reset-password',    path: '/reset-password',   componentName: 'ResetPassword'},

  // Market place
  {name: 'marketplace',       path: '/marketplace',             componentName: 'MarketPlacePage'},
  {name: 'customiso',         path: '/marketplace/custom-iso',  componentName: 'CustomISOPage'},

  // Products
  {name: 'cloud-instance',    path: '/products/cloud-instance', componentName: 'CloudInstancePage'},
  {name: 'block-storage',     path: '/products/block-storage',  componentName: 'BlockStoragePage'},
  {name: 'load-balancers',    path: '/products/load-balancers', componentName: 'LoadBalancersPage'},

  {name: 'dns-manager',           path: '/products/dns-manager',            componentName: 'DnsManagerPage'},
  {name: 'ddos-protection',       path: '/products/ddos-protection',        componentName: 'DDosProtectionPage'},
  {name: 'backups',               path: '/products/backups',                componentName: 'BackupsPage'},
  {name: 'professional-services', path: '/products/professional-services',  componentName: 'ProfessionalServicesPage'},
  {name: 'object-storage',        path: '/products/object-storage',         componentName: 'ObjectStoragePage'},

  // Features
  {name: 'control-panel',     path: '/features/control-panel',  componentName: 'ControlPanelPage'},

  // Users  
  {name: 'dashboard',            path: '/accounts/dashboard',            componentName: 'DashboardPage',          layoutName: 'AdminLayout'},
  {name: 'users.edit',           path: '/accounts/:slug/edit',           componentName: 'UserEdit',               layoutName: 'AdminLayout'},

  // List Instances
  {name: 'list-dns-manager',     path: '/accounts/list-dns-manager',     componentName: 'ListDnsManagerPage',     layoutName: 'AdminLayout'},
  {name: 'list-backups',         path: '/accounts/list-backups',         componentName: 'ListBackupsPage',        layoutName: 'AdminLayout'},
  {name: 'list-object-storage',  path: '/accounts/list-object-storage',  componentName: 'ListBlockStoragePage',   layoutName: 'AdminLayout'},
  {name: 'list-cloud-instance',  path: '/accounts/list-cloud-instance',  componentName: 'ListCloudInstancePage',  layoutName: 'AdminLayout'},
  {name: 'list-load-balancer',   path: '/accounts/list-load-balancer',   componentName: 'ListLoadBalancerPage',   layoutName: 'AdminLayout'},

  // Create Instances
  {name: 'create-cloud-instance',  path: '/accounts/list-cloud-instance/create',  componentName: 'CreateCloudInstancePage',  layoutName: 'AdminLayout'},

  // Help
  {name: 'help',          path: '/accounts/help',          componentName: 'GetHelpPage',    layoutName: 'AdminLayout'},
  {name: 'help-ticket',   path: '/accounts/help/tickets',  componentName: 'SupportTicket',  layoutName: 'AdminLayout'},

  // Users
  {name: 'users.profile',    path: '/users/:slug',           componentName: 'UsersProfile',   layoutName: 'AdminLayout'},
  {name: 'users.account',    path: '/account',               componentName: 'UsersAccount',   layoutName: 'AdminLayout'},
  {name: 'users.edit',       path: '/users/:slug/edit',      componentName: 'UsersEdit',      layoutName: 'AdminLayout'},

  // Admin
  {name: 'admin.users',      path: '/admin/users',           componentName: 'AdminUsers',     layoutName: 'AdminLayout'},

]);
