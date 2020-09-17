/*
 * Voting callbacks
 */

import { performVoteServer } from 'meteor/vulcan:voting';
import { Documentations } from '../../../modules/documentations/index.js';

/**
 * @summary Make users upvote their own new documentations
 */
export function upvoteOwnDocumentation(document, { currentUser }) {
  return performVoteServer({
    document,
    voteType: 'upvote',
    collection: Documentations,
    user: currentUser,
    updateDocument: false,
  });
}
