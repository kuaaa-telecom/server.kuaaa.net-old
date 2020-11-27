import { Router } from 'express';

import account from './account';
import archive from './archive';
import blog from './blog';
import board from './board';
import gall from './gall';
import notice from './notice';
import hello from './root';

const router: Router = Router();

router.use('/account', account);
router.use('/archive', archive);
router.use('/blog', blog);
router.use('/board', board);
router.use('/gall', gall);
router.use('/notice', notice);

router.get('/', hello);

export default router;
