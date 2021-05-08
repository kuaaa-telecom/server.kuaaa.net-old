import { Router } from 'express';
import { test } from './auth';

const router = Router();

router.get('/', test);

export default router;
