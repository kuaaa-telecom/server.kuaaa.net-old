import { Router } from 'express';
import { verifyToken } from '../../lib/auth';
import { register, unregister, login, logout, findid, resetpw } from './account';

const router = Router();

router.post('/register', register);
router.post('/unregister', verifyToken, unregister);
router.post('/login', login);
router.post('/logout', verifyToken, logout);
router.post('/findid', findid);
router.post('/resetpw', resetpw);

export default router;
