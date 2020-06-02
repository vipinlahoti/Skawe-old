Package.describe({
  name: 'skawe:notifications',
  summary: 'Skawe notifications package',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.10.1');

  api.use([
    'skawe:core',
    'skawe:email',
    'skawe:users'
  ]);

  api.addFiles([
    'lib/notifications.js',
    'lib/custom_fields.js'
  ], ['client', 'server']);

});
