import { makeCloudinary } from 'meteor/vulcan:cloudinary';
import { Posts } from './posts/index.js';
import { Pages } from './pages/index.js';

makeCloudinary({collection: Pages, fieldName: 'thumbnailUrl'});
makeCloudinary({collection: Posts, fieldName: 'thumbnailUrl'});
