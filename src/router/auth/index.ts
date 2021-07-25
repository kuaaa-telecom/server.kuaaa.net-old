import { Router } from 'express';
import { register, unregister, login, logout, verify } from './auth';

const router = Router();

router.post('/register', register);
router.post('/unregister', unregister);
router.post('/login', login);
router.post('/logout', logout);

export default router;
