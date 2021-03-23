import { Router } from 'express';

/* Router structure
*  / -> main
*    /auth -> auth
*    /users -> auth
*    /articles -> auth
*    /boards -> auth
*/

import main from './root';

import auth from './auth';
import users from './users';
import articles from './articles';
import boards from './boards';

const router = Router();

router.get('/', main);

router.get('/auth', auth);
router.use('/users', users);
router.use('/articles', articles);
router.use('/boards', boards);

export default router;
