import Events from './collection.js';

if (Meteor.isServer) {
  Events.log = function (event) {
    // if event is supposed to be unique, check if it has already been logged
    if (!!event.unique && !!Events.findOne({name: event.name})) {
      return;
    }

    event.createdAt = new Date();
    Events.insert(event);
  };
}

Events.track = function(event, properties){
  console.log('trackevent: ', event, properties);
  properties = properties || {};
};
