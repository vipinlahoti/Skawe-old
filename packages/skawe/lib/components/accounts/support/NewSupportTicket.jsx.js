import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const NewSupportTicket = () =>
  <div>
    Support Ticket Form
  </div>

registerComponent({ name: 'NewSupportTicket', component: NewSupportTicket });
