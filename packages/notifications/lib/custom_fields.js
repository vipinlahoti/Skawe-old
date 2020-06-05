import Users from 'meteor/skawe:users';

const notificationsGroup = {
  name: 'Notifications',
  order: 2
};

// check if user can create a new account
const canInsert = user => Users.canDo(user, 'users.new');
// check if user can edit a user
const canEdit = Users.canEdit;

// Add notifications options to user profile settings
Users.addField([
  {
    fieldName: 'notifications_users',
    fieldSchema: {
      label: 'New users',
      type: Boolean,
      optional: true,
      defaultValue: false,
      control: 'checkbox',
      insertableBy: Users.isAdmin,
      editableBy: Users.isAdmin,
      group: notificationsGroup
    }
  }
]);
