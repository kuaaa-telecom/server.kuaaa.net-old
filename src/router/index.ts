import { Router } from 'express';

import main from './root';
import account from './account';
import archive from './archive';
import blog from './blog';
import board from './board';
import gall from './gall';
import notice from './notice';

const router = Router();

router.get('/', main);
router.use('/account', account);
router.use('/archive', archive);
router.use('/blog', blog);
router.use('/board', board);
router.use('/gall', gall);
router.use('/notice', notice);

export default router;
