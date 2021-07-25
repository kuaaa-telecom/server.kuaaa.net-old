import { Router } from 'express';
import { list } from './users';
import { verify } from '../auth/auth'

const router = Router();

//router.use('/', verify);
router.get('/', list);


export default router;
