/*
 * GraphQL config
 */

import { addGraphQLMutation, addGraphQLResolvers } from 'meteor/vulcan:core';

const specificResolvers = {
  Mutation: {
    increaseDocumentationViewCount(root, { documentationId }, context) {
      return context.Documentations.update({_id: documentationId}, { $inc: { viewCount: 1 }});
    }
  }
};

addGraphQLResolvers(specificResolvers);
addGraphQLMutation('increaseDocumentationViewCount(documentationId: String): Float');
