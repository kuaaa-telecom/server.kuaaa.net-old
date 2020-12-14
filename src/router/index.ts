import { Router } from 'express';

import main from './root';
import accounts from './accounts';
import articles from './articles';
import boards from './boards';

const router = Router();

router.get('/', main);
router.use('/accounts', accounts);
router.use('/articles', articles);
router.use('/boards', boards);

export default router;
