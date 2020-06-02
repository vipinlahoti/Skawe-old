Package.describe({
  name: 'skawe:instances',
  summary: 'Skawe API Data.'
});

Package.onUse(function (api) {
  api.versionsFrom('1.10.1');

  api.use([
    'skawe:lib',
  ]);
  
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
