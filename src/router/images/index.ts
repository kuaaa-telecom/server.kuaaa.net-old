import { Router } from 'express';
import { test, addImage } from './images';

const router = Router();

router.get('/', test);
router.post('/', addImage);

export default router;
