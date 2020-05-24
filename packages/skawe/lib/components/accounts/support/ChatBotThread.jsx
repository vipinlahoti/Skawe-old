import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const ChatBotThread = () =>
  <div>
    Chat bot thread
  </div>

registerComponent({ name: 'ChatBotThread', component: ChatBotThread });
