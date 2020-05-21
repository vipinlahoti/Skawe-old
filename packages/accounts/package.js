Package.describe({
  name: 'skawe:accounts',
  version: '0.0.1'
})

Package.onUse(api => {
  api.versionsFrom('1.10.1');

  api.use([
    'ecmascript',
    'check',
    'accounts-base',
    'accounts-password'
  ], ['client', 'server']);

  api.use('accounts-oauth', { weak: true });
  api.use('service-configuration', { weak: true });
  api.use('http', 'server');

  api.mainModule('lib/index.js', ['client', 'server'])
})
