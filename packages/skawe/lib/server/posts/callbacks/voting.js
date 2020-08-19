/*
 * Voting callbacks
 */

import { performVoteServer } from 'meteor/vulcan:voting';
import { Posts } from '../../../modules/posts/index.js';

/**
 * @summary Make users upvote their own new posts
 */
export function upvoteOwnPost(document, { currentUser }) {
  return performVoteServer({
    document,
    voteType: 'upvote',
    collection: Posts,
    user: currentUser,
    updateDocument: false,
  });
}
