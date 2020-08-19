import { makeCloudinary } from 'meteor/vulcan:cloudinary';
import { Posts } from './posts/index.js';

makeCloudinary({collection: Posts, fieldName: 'thumbnailUrl'});
