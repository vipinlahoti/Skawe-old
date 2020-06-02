Package.describe({
  name: 'skawe:core',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.1');
  
  api.use([
    'skawe:lib',
    'skawe:accounts',
    'skawe:users',
    'skawe:instances',
    'skawe:events',
    'skawe:email-templates',
    'skawe:forms'
  ]);

  api.imply(['skawe:lib']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
