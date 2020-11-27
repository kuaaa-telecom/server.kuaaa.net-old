import { Router } from 'express';
import test from './notice';

const router = Router();

router.get('/', test);

export default router;
