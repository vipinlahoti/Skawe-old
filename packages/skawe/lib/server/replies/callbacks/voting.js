import { performVoteServer } from 'meteor/vulcan:voting';
import { Replies } from '../../../modules/replies/index.js';

/**
 * @summary Make users upvote their own new replies
 */
export function upvoteOwnReply(document, { currentUser }) {
  return performVoteServer({
    document,
    voteType: 'upvote',
    collection: Replies,
    user: currentUser,
    updateDocument: false,
  });
}
