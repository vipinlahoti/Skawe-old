import Skawe from 'meteor/skawe:lib';

Skawe.routes.add([
  {name: 'home',          path: '/',                  component: Skawe.components.HomePage},
  {name: 'contact-sales', path: '/contact-sales',     component: Skawe.components.ContactSalesPage},
  {name: 'pricing',       path: '/pricing',           component: Skawe.components.PricingPage},
  {name: 'tos',           path: '/tos/universal-tos', component: Skawe.components.UniversalTOSPage},
  

  // Accounts
  {name: 'login',           path: '/login',            component: Skawe.components.LoginPage},
  {name: 'register',        path: '/register',         component: Skawe.components.RegisterPage},
  {name: 'forgot-password', path: '/forgot-password',  component: Skawe.components.ForgotPassword},
  {name: 'reset-password',  path: '/reset-password',   component: Skawe.components.ResetPassword},

  // Market place
  {name: 'marketplace',   path: '/marketplace',             component: Skawe.components.MarketPlacePage},
  {name: 'customiso',     path: '/marketplace/custom-iso',  component: Skawe.components.CustomISOPage},

  // Products
  {name: 'cloud-instance',  path: '/products/cloud-instance', component: Skawe.components.CloudInstancePage},
  {name: 'load-balancers',  path: '/products/load-balancers', component: Skawe.components.LoadBalancersPage},

  {name: 'dns-manager',     path: '/products/dns-manager',      component: Skawe.components.DnsManagerPage},
  {name: 'ddos-protection', path: '/products/ddos-protection',  component: Skawe.components.DDosProtectionPage},
  {name: 'additional-ip',   path: '/products/additional-ip',    component: Skawe.components.AdditionalIPPage},
  
  {name: 'storage',       path: '/products/storage',       component: Skawe.components.StoragePage},
  {name: 'block-storage', path: '/products/block-storage', component: Skawe.components.BlockStoragePage},
  {name: 'backups',       path: '/products/backups',       component: Skawe.components.BackupsPage},

  {name: 'professional-services', path: '/products/professional-services',  component: Skawe.components.ProfessionalServicesPage},
  {name: 'object-storage',        path: '/products/object-storage',         component: Skawe.components.ObjectStoragePage},

  // Features
  {name: 'control-panel',  path: '/features/control-panel',  component: Skawe.components.ControlPanelPage},

  // Dashboard  
  {name: 'dashboard',             path: '/accounts/dashboard',                          component: Skawe.components.DashboardPage,            layoutName: 'AdminLayout'},
  {name: 'list-dns-manager',      path: '/accounts/list-dns-manager',                   component: Skawe.components.ListDnsManagerPage,       layoutName: 'AdminLayout'},
  {name: 'list-backups',          path: '/accounts/list-backups',                       component: Skawe.components.ListBackupsPage,          layoutName: 'AdminLayout'},
  {name: 'list-object-storage',   path: '/accounts/list-object-storage',                component: Skawe.components.ListBlockStoragePage,     layoutName: 'AdminLayout'},
  {name: 'list-cloud-instance',   path: '/accounts/list-cloud-instance',                component: Skawe.components.ListCloudInstancePage,    layoutName: 'AdminLayout'},
  {name: 'list-load-balancer',    path: '/accounts/list-load-balancer',                 component: Skawe.components.ListLoadBalancerPage,     layoutName: 'AdminLayout'},
  {name: 'create-cloud-instance', path: '/accounts/list-cloud-instance/create',         component: Skawe.components.CreateCloudInstancePage,  layoutName: 'AdminLayout'},
  {name: 'create-block-storage',  path: '/accounts/list-block-storage/create',          component: Skawe.components.CreateBlockStoragePage,   layoutName: 'AdminLayout'},
  {name: 'create-load-balancer',  path: '/accounts/list-load-balancer/create',          component: Skawe.components.CreateLoadBalancerPage,   layoutName: 'AdminLayout'},

  // summary
  {name: 'summary-overview',      path: '/accounts/list-cloud-instance/summary/:slug',                component: Skawe.components.CloudInstanceSummaryPage, layoutName: 'AdminLayout'},
  {name: 'summary-block-storage', path: '/accounts/list-cloud-instance/summary/:slug/block-storage',  component: Skawe.components.BlockStorageSummary,      layoutName: 'AdminLayout'},
  {name: 'summary-backups',       path: '/accounts/list-cloud-instance/summary/:slug/backups',        component: Skawe.components.BackupSummary,            layoutName: 'AdminLayout'},
  {name: 'summary-networking',    path: '/accounts/list-cloud-instance/summary/:slug/networking',     component: Skawe.components.NetworkingSummary,        layoutName: 'AdminLayout'},
  {name: 'summary-resize',        path: '/accounts/list-cloud-instance/summary/:slug/resize',         component: Skawe.components.ResizeSummary,            layoutName: 'AdminLayout'},
  {name: 'summary-rebuild',       path: '/accounts/list-cloud-instance/summary/:slug/rebuild',        component: Skawe.components.ReBuildSummary,           layoutName: 'AdminLayout'},
  {name: 'summary-settings',      path: '/accounts/list-cloud-instance/summary/:slug/settings',       component: Skawe.components.SettingsSummary,          layoutName: 'AdminLayout'},

  // Help
  {name: 'help',                path: '/accounts/help',            component: Skawe.components.GetHelpPage,          layoutName: 'AdminLayout'},
  {name: 'help-ticket',         path: '/accounts/tickets',         component: Skawe.components.SupportTicket,        layoutName: 'AdminLayout'},
  {name: 'help-ticket-new',     path: '/accounts/tickets/new',     component: Skawe.components.SupportTicketNew,     layoutName: 'AdminLayout'},
  {name: 'help-ticket-closed',  path: '/accounts/tickets/closed',  component: Skawe.components.SupportTicketClosed,  layoutName: 'AdminLayout'},
  {name: 'help-ticket-summary', path: '/accounts/tickets/summary', component: Skawe.components.SupportTicketSummary, layoutName: 'AdminLayout'},

  // Users
  {name: 'users.account',   path: '/accounts',           component: Skawe.components.UsersAccounts,       layoutName: 'AdminLayout'},
  {name: 'users.billings',  path: '/accounts/billing',   component: Skawe.components.UsersBillingInfo,    layoutName: 'AdminLayout'},
  {name: 'users.password',  path: '/accounts/password',  component: Skawe.components.UsersPasswordChange, layoutName: 'AdminLayout'},
  {name: 'users.settings',  path: '/accounts/settings',  component: Skawe.components.UsersSettings,       layoutName: 'AdminLayout'},

  // Admin
  {name: 'admin.users',           path: '/admin/users',           component: Skawe.components.AdminUsers,          layoutName: 'AdminLayout'},
  {name: 'admin.distributions',   path: '/admin/distributions',   component: Skawe.components.AdminDistributions,  layoutName: 'AdminLayout'},
  {name: 'admin.regions',         path: '/admin/regions',         component: Skawe.components.AdminRegions,        layoutName: 'AdminLayout'},
  {name: 'admin.server-plans',    path: '/admin/server-plans',    component: Skawe.components.AdminServerPlans,    layoutName: 'AdminLayout'},
  {name: 'admin.click-apps',      path: '/admin/click-apps',      component: Skawe.components.AdminOneClickApps,   layoutName: 'AdminLayout'},


]);
