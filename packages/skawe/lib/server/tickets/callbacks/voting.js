/*
 * Voting callbacks
 */

import { performVoteServer } from 'meteor/vulcan:voting';
import { Tickets } from '../../../modules/tickets/index.js';

/**
 * @summary Make users upvote their own new tickets
 */
export function upvoteOwnTicket(document, { currentUser }) {
  return performVoteServer({
    document,
    voteType: 'upvote',
    collection: Tickets,
    user: currentUser,
    updateDocument: false,
  });
}
