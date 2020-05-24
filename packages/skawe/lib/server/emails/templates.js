import VulcanEmail from 'meteor/vulcan:email';

VulcanEmail.addTemplates({
  test:                     Assets.getText("lib/server/emails/templates/common/test.handlebars"),
  wrapper:                  Assets.getText("lib/server/emails/templates/common/wrapper.handlebars"),
  accountApproved:          Assets.getText("lib/server/emails/templates/users/accountApproved.handlebars"),
  newUser:                  Assets.getText("lib/server/emails/templates/users/newUser.handlebars"),
});
