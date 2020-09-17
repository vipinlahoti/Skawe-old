import { Documentations } from '../../modules/documentations/index.js';

Documentations._ensureIndex({'status': 1, 'isFuture': 1});
Documentations._ensureIndex({'status': 1, 'isFuture': 1, 'postedAt': 1});
