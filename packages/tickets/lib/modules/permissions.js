import Users from 'meteor/nova:users';

const defaultActions = [
  'posts.view.own',
  'posts.view.closed.own',
  'posts.view.rejected.own',
  'posts.view.spam.own',
  'posts.view.deleted.own',
  'posts.new', 
  'posts.edit.own', 
  'posts.remove.own', 
];
Users.groups.default.can(defaultActions);

const adminActions = [
  'posts.view.all',
  'posts.view.rejected.all',
  'posts.view.spam.all',
  'posts.view.deleted.all',
  'posts.view.closed.all',
  'posts.new',
  'posts.edit.all',
  'posts.remove.all'
];
Users.groups.admins.can(adminActions);
