import { addRoute } from 'meteor/vulcan:core';

addRoute([
  {name: 'home',          path: '/',                  componentName: 'HomePage'},
  {name: 'pages-single',  path: '/page/:_id/:slug?',  componentName: 'PagesPage'},

  // Accounts
  {name: 'login',           path: '/login',            componentName: 'LoginPage'},
  {name: 'register',        path: '/register',         componentName: 'RegisterPage'},
  {name: 'forgot-password', path: '/forgot-password',  componentName: 'ForgotPassword'},
  {name: 'reset-password',  path: '/reset-password',   componentName: 'ResetPassword'},

  // posts
  {name: 'posts.new',        path: '/blog',                 componentName: 'PostsHome'},
  {name: 'posts.top',        path: '/blog/top',             componentName: 'PostsHome'}, 
  {name: 'posts.best',       path: '/blog/best',            componentName: 'PostsHome'},
  {name: 'posts.category',   path: '/blog/category/:slug',  componentName: 'PostsCategory'},
  {name: 'posts.single',     path: '/blog/:_id/:slug?',     componentName: 'PostsPage'},

  // Dashboard  
  {name: 'dashboard',    path: '/accounts/dashboard',   componentName: 'DashboardPage',  layoutName: 'AdminLayout'},

  {name: 'list-dns-manager',      path: '/accounts/list-dns-manager',                       componentName: 'ListDnsManagerPage',          layoutName: 'AdminLayout'},
  {name: 'list-backups',          path: '/accounts/list-backups',                           componentName: 'ListBackupsPage',             layoutName: 'AdminLayout'},
  {name: 'list-object-storage',   path: '/accounts/list-object-storage',                    componentName: 'ListBlockStoragePage',        layoutName: 'AdminLayout'},
  {name: 'list-cloud-instance',   path: '/accounts/list-cloud-instance',                    componentName: 'ListCloudInstancePage',       layoutName: 'AdminLayout'},
  {name: 'list-load-balancer',    path: '/accounts/list-load-balancer',                     componentName: 'ListLoadBalancerPage',        layoutName: 'AdminLayout'},
  {name: 'create-cloud-instance', path: '/accounts/list-cloud-instance/create',             componentName: 'CreateCloudInstancePage',     layoutName: 'AdminLayout'},
  {name: 'create-click-apps',     path: '/accounts/list-cloud-instance/create/click-apps',  componentName: 'CreateCloudInstanceAppsPage', layoutName: 'AdminLayout'},
  {name: 'create-block-storage',  path: '/accounts/list-block-storage/create',              componentName: 'CreateBlockStoragePage',      layoutName: 'AdminLayout'},
  {name: 'create-load-balancer',  path: '/accounts/list-load-balancer/create',              componentName: 'CreateLoadBalancerPage',      layoutName: 'AdminLayout'},

  // summary
  {name: 'summary-overview',  path: '/accounts/list-cloud-instance/summary/:_id/:slug',  componentName: 'CloudInstanceSummaryPage', layoutName: 'AdminLayout'},
  {name: 'domain-overview',   path: '/accounts/list-dns-manager/domain/:_id/:slug',      componentName: 'DomainSummaryPage',        layoutName: 'AdminLayout'},


  // users
  {name: 'users.profile',   path: '/users/:slug',       componentName: 'UsersProfile',},
  {name: 'users.account',   path: '/accounts',          componentName: 'UsersAccount',        layoutName: 'AdminLayout'},
  {name: 'users.edit',      path: '/users/:slug/edit',  componentName: 'UsersEdit',           layoutName: 'AdminLayout'},
  {name: 'users.billings',  path: '/accounts/billing',  componentName: 'UsersBillingInfo',    layoutName: 'AdminLayout'},
  {name: 'users.password',  path: '/accounts/password', componentName: 'UsersPasswordChange', layoutName: 'AdminLayout'},
  {name: 'users.settings',  path: '/accounts/settings', componentName: 'UsersSettings',       layoutName: 'AdminLayout'},
  {name: 'users.events',    path: '/accounts/events',   componentName: 'UserEvents',          layoutName: 'AdminLayout'},

  // Help
  {name: 'help-ticket',         path: '/accounts/tickets',             componentName: 'TicketsHome',         layoutName: 'AdminLayout'},
  {name: 'help-ticket-new',     path: '/accounts/tickets/new',         componentName: 'TicketsNew',          layoutName: 'AdminLayout'},
  // {name: 'help-ticket-closed',  path: '/accounts/tickets/closed',      componentName: 'SupportTicketClosed', layoutName: 'AdminLayout'},
  {name: 'help-ticket-summary', path: '/accounts/tickets/:_id/:slug?', componentName: 'TicketsPage',         layoutName: 'AdminLayout'},

  // admin
  {name: 'admin.categories',  path: '/admin/categories',  componentName: 'AdminCategories',  layoutName: 'AdminLayout'},
  {name: 'admin.posts',       path: '/admin/posts',       componentName: 'AdminPosts',       layoutName: 'AdminLayout'},
  {name: 'posts-write',       path: '/accounts/blog/new', componentName: 'PostsNew',         layoutName: 'AdminLayout'},
  {name: 'admin.comments',    path: '/admin/comments',    componentName: 'AdminComments',    layoutName: 'AdminLayout'},
  
  {name: 'admin.departments', path: '/admin/departments', componentName: 'AdminDepartments', layoutName: 'AdminLayout'},
  {name: 'admin.tickets',     path: '/admin/tickets',     componentName: 'AdminTickets',     layoutName: 'AdminLayout'},
  {name: 'admin.replies',     path: '/admin/replies',     componentName: 'AdminReplies',     layoutName: 'AdminLayout'},
  
  {name: 'admin.features',    path: '/admin/features',    componentName: 'AdminFeatures',    layoutName: 'AdminLayout'},
  {name: 'admin.pages',       path: '/admin/pages',       componentName: 'AdminPages',       layoutName: 'AdminLayout'},
  
  {name: 'admin.users',       path: '/admin/users',       componentName: 'AdminUsers',       layoutName: 'AdminLayout'},

  {name: 'admin-distributions', path: '/admin/distributions', componentName: 'AdminDistributions', layoutName: 'AdminLayout'},
  {name: 'admin-clickapps',     path: '/admin/click-apps',  componentName: 'AdminOneClickApps',  layoutName: 'AdminLayout'},
  {name: 'admin-Regions',       path: '/admin/Regions',       componentName: 'AdminRegions',       layoutName: 'AdminLayout'},
  {name: 'admin-serverplans',   path: '/admin/server-plans',   componentName: 'AdminServerPlans', layoutName: 'AdminLayout'},
  {name: 'admin-instances',   path: '/admin/instances',   componentName: 'AdminCloudInstances', layoutName: 'AdminLayout'},
  {name: 'admin-domains',   path: '/admin/domains',   componentName: 'AdminDomains', layoutName: 'AdminLayout'},

]);
