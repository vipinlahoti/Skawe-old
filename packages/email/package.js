Package.describe({
  name: 'skawe:email',
  summary: 'Skawe email package',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.10.1');

  api.use([
    'skawe:lib'
  ]);

  api.export('SkaweEmail');

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
