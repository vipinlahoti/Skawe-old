import { addCallback } from 'meteor/vulcan:core';

function sortByNew (parameters, terms) {
  return {
    selector: parameters.selector, 
    options: {...parameters.options, sort: {createdAt: 1}}
  };
}

addCallback('reply.parameters', sortByNew);
