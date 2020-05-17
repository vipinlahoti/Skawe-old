import Skawe from 'meteor/skawe:lib';
import React from 'react';

const wrapper = {
  fontSize: '32px',
  margin: '3rem auto',
  textAlign: 'center'
};

const HelloWorld = () => 
  <div style={wrapper}>
    <h2>Hello World!!</h2>
  </div>

Skawe.registerComponent('HelloWorld', HelloWorld);
