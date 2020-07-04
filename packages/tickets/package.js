Package.describe({
  name: 'skawe:tickets',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.10.1');

  api.use([
    'skawe:core',
    'skawe:users',
    'skawe:notifications',
    'skawe:email'
  ]);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
