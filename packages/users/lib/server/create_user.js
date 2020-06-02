import { Accounts } from 'meteor/accounts-base'
import Skawe from 'meteor/skawe:lib';

function skaweCreateUserCallback (options, user) {
  user = Skawe.callbacks.run('users.new.sync', user, options);
  console.log('skaweCreateUserCallback', user)
  return user;
}

Accounts.onCreateUser(skaweCreateUserCallback);
