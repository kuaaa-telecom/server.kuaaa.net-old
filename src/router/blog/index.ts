import { Router } from 'express';
import test from './blog';

const router = Router();

router.get('/', test);

export default router;
