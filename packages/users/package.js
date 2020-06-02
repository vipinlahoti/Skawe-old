Package.describe({
  name: 'skawe:users',
  summary: 'Skawe permissions.'
});

Package.onUse(function (api) {
  api.versionsFrom('1.10.1');

  api.use([
    'skawe:lib'
  ]);
  
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
