/**
 * @summary SkaweEmail namespace
 * @namespace SkaweEmail
 */
const SkaweEmail = {};

SkaweEmail.emails = {};

SkaweEmail.addEmails = emails => {
  SkaweEmail.emails = Object.assign(SkaweEmail.emails, emails);
};

export default SkaweEmail;
