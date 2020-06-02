Package.describe({
  name: 'skawe:email-templates',
  summary: 'Skawe email templates package',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.10.1');

  api.use([
    'skawe:lib',
    'skawe:users',
    'skawe:email'
  ]);

  api.addFiles([
    'lib/emails.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/routes.js',
    'lib/server/templates.js'
  ], ['server']);

  api.addAssets([
    'lib/server/emails/common/test.handlebars',
    'lib/server/emails/common/wrapper.handlebars',
    'lib/server/emails/users/accountApproved.handlebars',
    'lib/server/emails/users/newUser.handlebars',
  ], ['server']);

});
