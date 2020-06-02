import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';

const UsersName = () => 
  <Link className="users-name" to={{pathname: '/'}}>
    User Name
  </Link>

Skawe.registerComponent('UsersName', UsersName);
