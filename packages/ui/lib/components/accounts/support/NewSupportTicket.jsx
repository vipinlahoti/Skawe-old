import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';
 
const NewSupportTicket = () =>
  <div className="support-tickets">
    <p><small>we are here to help if you need us. Please keep in mind that not all topics are within the scope of our support. For overall system status, please see &nbsp;
    <Link to={{ pathname: '#' }} className="nav-link">
      status.skawe.in
    </Link>.</small></p>

    Tickets form

  </div>

Skawe.registerComponent('NewSupportTicket', NewSupportTicket);

// <Skawe.components.SkaweForms
//   collection={Tickets} 
//   buttonText="Open a Ticket"
//   methodName="tickets.new"
//   successCallback={ticket => {
//     console.log('successCallback: ', ticket)
//   }}
// />
