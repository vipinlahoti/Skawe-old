import Skawe from 'meteor/skawe:lib';
import React from 'react';
import { Link } from 'react-router-dom';

const NewSupportTicket = () =>
  <div className="support-tickets">
    <p><small>we are here to help if you need us. Please keep in mind that not all topics are within the scope of our support. For overall system status, please see &nbsp;
    <Link to={{ pathname: '#' }} className="nav-link">
      status.skawe.in
    </Link>.</small></p>

    
  </div>

Skawe.registerComponent('NewSupportTicket', NewSupportTicket);



// <Skawe.components.SkaweForms
//   buttonText="Open Ticket"
//   fields={[
//     {
//       id: 'title',
//       type: 'text',
//       label: 'Title',
//       required: true
//     },
//     {
//       id: 'category',
//       type: 'text',
//       label: 'What is this Regarding?',
//       required: true
//     },
//     {
//       id: 'description',
//       type: 'input',
//       fieldAs: 'textarea',
//       label: 'Description',
//       required: true
//     },
//     {
//       id: 'attach',
//       type: 'file',
//       label: 'Attach a file'
//     }
//   ]}
// />
