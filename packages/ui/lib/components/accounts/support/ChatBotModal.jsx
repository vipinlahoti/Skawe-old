import Skawe from 'meteor/skawe:lib';
import React from 'react';
import Card from 'react-bootstrap/Card';

const ChatBotModal = () =>
  <div>
    <Card className="bg-light text-center support-card">
      <Card.Body>
        <div className="card-icon rounded-circle text-white">
          <Skawe.components.Icon name="chat"/>
        </div>
        <h6 className="title-6">Support chat Bot</h6>
        <Card.Text>
          Chat with the Support Bot, can answer your questions, accurately, and completely.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

Skawe.registerComponent('ChatBotModal', ChatBotModal);
