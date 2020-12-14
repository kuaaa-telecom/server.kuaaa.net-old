import { Router } from 'express';
import test from './boards';

const router = Router();

router.get('/', test);

export default router;
