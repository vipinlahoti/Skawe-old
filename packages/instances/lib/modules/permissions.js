import Users from 'meteor/skawe:users';

const anonymousActions = [
  "distributions.view.all"
];
Users.groups.anonymous.can(anonymousActions);

const defaultActions = [
  "distributions.view.all",
];
Users.groups.default.can(defaultActions);

const adminActions = [
  "distributions.view.all",
  "distributions.new",
  "distributions.edit.all",
  "distributions.remove.all"
];
Users.groups.admins.can(adminActions);
