import { Router } from 'express';

import main from './root';

import auth from './auth';
import users from './users';
import articles from './articles';
import boards from './boards';
import images from './images';

const router = Router();

router.get('/', main);

router.use('/auth', auth);
router.use('/users', users);
router.use('/articles', articles);
router.use('/boards', boards);
router.use('/images', images);

export default router;
