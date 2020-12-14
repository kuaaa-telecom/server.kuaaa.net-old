import { Router } from 'express';
import test from './articles';

const router = Router();

router.get('/', test);

export default router;
