import Skawe from 'meteor/skawe:lib';
import React from 'react';
import moment from 'moment';

const SupportTicketThread = ({ticket}) =>
  <div className="support__ticket-thread">
    <div className="bg-gray p-1 mb-1">
      <h6 className="title-6 mb-0">
        Ticket ID: {ticket._id}
        <span className="d-block">Type: {ticket.category}</span>
      </h6>
    </div>

    <div className="bg-gray p-1 mb-1">
      <h6 className="title-6 mb-1">{ticket.title}</h6>
      <p>{ticket.description}</p>
      {ticket.userId}
      User: {Users.getDisplayNameById(ticket.userId)}
      <div className="posted-at"><Components.Icon name="access_time" /> {moment(new Date(ticket.createdAt)).fromNow()}</div>
    </div>
  </div>

Skawe.registerComponent('SupportTicketThread', SupportTicketThread);
