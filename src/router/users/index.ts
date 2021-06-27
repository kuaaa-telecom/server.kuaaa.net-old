import { Router } from 'express';
import { register, unregister, test } from './users';

const router = Router();


router.get('/', test);

/**
 * POST /users/register/
 * @summary Create a new user to kuaaa.net DB and returns created user info
 * @return {object} 200 - Returns created user info
 * @return {object} 401 - Returns error message for unauthorized request
 * @return {object} 403 - Returns error message for forbidden request of given users
 * @return {object} 500 - Returns error message for internal server error
 * @example response - 200 - Created user info
 * {
 *  "msg":"Not Implemented"
 * }
 * @example response - 401 - Unauthorized
 * {
 *  "msg":"Unauthorized request"
 * }
 * @example response - 403 - Forbidden
 * {
 *  "msg":"Forbidden request"
 * }
 * @example response - 500 - Internal Server error
 * {
 *  "msg":"Something went wrong..."
 * }
 */
router.post('/register', register);
router.post('/unregister', unregister);

export default router;
