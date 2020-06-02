import Skawe from 'meteor/skawe:lib';
import Juice from 'juice';
import htmlToText from 'html-to-text';
import Handlebars from 'handlebars';

import SkaweEmail from '../modules/namespace.js';

SkaweEmail.templates = {};

SkaweEmail.addTemplates = function (templates) {
  _.extend(SkaweEmail.templates, templates);
};

// for template "foo", check if "custom_foo" exists. If it does, use it instead
SkaweEmail.getTemplate = function (templateName) {

  const template = templateName;

  // note: template prefixes are disabled
  // go through prefixes and keep the last one (if any) that points to a valid template
  // Skawe.config.customPrefixes.forEach(function (prefix) {
  //   if(typeof SkaweEmail.templates[prefix+templateName] === 'string'){
  //     template = prefix + templateName;
  //   }
  // });

  // return Handlebars.templates[template];

  // console.log(templateName)
  // console.log(SkaweEmail.templates[template])

  return Handlebars.compile(SkaweEmail.templates[template], {
    noEscape: true
  });

};

SkaweEmail.buildTemplate = function (htmlContent, optionalProperties = {}) {

  const emailProperties = {
    secondaryColor: Skawe.settings.get('secondaryColor', '#444444'),
    accentColor: Skawe.settings.get('accentColor', '#DD3416'),
    siteName: Skawe.settings.get('title', "Skawe"),
    tagline: Skawe.settings.get('tagline'),
    siteUrl: Skawe.utils.getSiteUrl(),
    body: htmlContent,
    unsubscribe: '',
    accountLink: Skawe.utils.getSiteUrl()+'account',
    footer: Skawe.settings.get('emailFooter'),
    logoUrl: Skawe.settings.get('logoUrl'),
    logoHeight: Skawe.settings.get('logoHeight'),
    logoWidth: Skawe.settings.get('logoWidth'),
    ...optionalProperties
  };

  const emailHTML = SkaweEmail.getTemplate('wrapper')(emailProperties);

  const inlinedHTML = Juice(emailHTML, {preserveMediaQueries: true});

  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">'

  return doctype+inlinedHTML;
};

SkaweEmail.send = function(to, subject, html, text){

  // TODO: limit who can send emails
  // TODO: fix this error: Error: getaddrinfo ENOTFOUND

  const from = Skawe.settings.get('defaultEmail', 'noreply@example.com');
  const siteName = Skawe.settings.get('title', 'Skawe');
  subject = '[' + siteName + '] ' + subject;

  if (typeof text === 'undefined'){
    // Auto-generate text version if it doesn't exist. Has bugs, but should be good enough.
    text = htmlToText.fromString(html, {
        wordwrap: 130
    });
  }

  console.log('//////// sending email…'); // eslint-disable-line
  console.log('from: '+from); // eslint-disable-line
  console.log('to: '+to); // eslint-disable-line
  console.log('subject: '+subject); // eslint-disable-line
  // console.log('html: '+html);
  // console.log('text: '+text);

  const email = {
    from: from,
    to: to,
    subject: subject,
    text: text,
    html: html
  };

  try {
    Email.send(email);
  } catch (error) {
    console.log("// error while sending email:"); // eslint-disable-line
    console.log(error); // eslint-disable-line
  }

  return email;
};

SkaweEmail.buildAndSend = function (to, subject, template, properties) {
  const html = SkaweEmail.buildTemplate(SkaweEmail.getTemplate(template)(properties));
  return SkaweEmail.send (to, subject, html);
};

SkaweEmail.buildAndSendHTML = function (to, subject, html) {
  return SkaweEmail.send (to, subject, SkaweEmail.buildTemplate(html));
};
