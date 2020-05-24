Package.describe({
  name: 'skawe',
});

Package.onUse(function (api) {

  api.use([
    'promise',
    'fourseven:scss@4.12.0',

    // vulcan packages
    'vulcan:core',
    'vulcan:email',
    'vulcan:forms',
    'vulcan:accounts',
    'vulcan:events',
    'vulcan:admin',
    'vulcan:ui-bootstrap',
  ]);

  api.addAssets(
    [
      "lib/server/emails/templates/common/test.handlebars",
      "lib/server/emails/templates/common/wrapper.handlebars",
      "lib/server/emails/templates/comments/newComment.handlebars",
      "lib/server/emails/templates/comments/newReply.handlebars",
      "lib/server/emails/templates/posts/newPendingPost.handlebars",
      "lib/server/emails/templates/posts/newPost.handlebars",
      "lib/server/emails/templates/posts/postApproved.handlebars",
      "lib/server/emails/templates/users/accountApproved.handlebars",
      "lib/server/emails/templates/users/newUser.handlebars",
    ],
    ["server"]
  );

  api.addFiles('lib/styles/main.scss');

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
