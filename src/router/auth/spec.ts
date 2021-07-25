/**
 * A register form
 * @typedef {object} RegisterForm
 * @property {string} id
 * @property {string} password
 * @property {string} name
 * @property {string} sid
 * @property {string} belong
 * @property {string} email
 */

/**
 * A unregister form
 * @typedef {object} UnregisterForm
 * @property {string} id
 */

/**
 * A login form
 * @typedef {object} LoginForm
 * @property {string} id
 * @property {string} password
 */

/**
 * A logout form
 * @typedef {object} LogoutForm
 * @property {string} token
 */

/**
 * POST /auth/register
 * @tags Auth
 * @summary Add a new User account to the kuaaa.net DB
 * @param {RegisterForm} request.body.required - Register Form
 * @return {object} 200 - Returns user ID
 * @return {object} 401 - Returns error message for unauthorized request
 * @return {object} 403 - Returns error message for forbidden request of given users
 * @return {object} 500 - Returns error message for internal server error
 * @example response - 200 - REGISTER_SUCCESS
 * {
 *  "msg": "Registered Successfully",
 *  "id": "wkkjdkkwk778"
 * }
 * @example response - 401 - REGISTER_FAILED
 * {
 *  "error": "REGISTER_FAILED",
 *  "msg": "Input ID is already in use."
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

/**
 * POST /auth/unregister
 * @tags Auth
 * @summary Unregister existing User
 * @param {UnregisterForm} request.body.required - Unregister Form
 * @return {object} 200 - Returns success message
 * @return {object} 401 - Returns error message for unauthorized request
 * @return {object} 403 - Returns error message for forbidden request of given users
 * @return {object} 500 - Returns error message for internal server error
 * @example response - 200 - UNREGISTER_SUCCESS
 * {
 *  "msg": "Unregister Successfully"
 * }
 * @example response - 401 - UNREGISTER_FAILED
 * {
 *  "error": "UNREGISTER_FAILED",
 *  "msg": "Username does not exist"
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

/**
 * POST /auth/login
 * @tags Auth
 * @summary Check User account and issue authorized token
 * @param {LoginForm} request.body.required - Login Form
 * @return {object} 200 - Returns authorized jwt token
 * @return {object} 401 - Returns error message for unauthorized request
 * @return {object} 403 - Returns error message for forbidden request of given users
 * @return {object} 500 - Returns error message for internal server error
 * @example response - 200 - LOGIN_SUCCESS
 * {
 *  "msg": "Login Successfully",
 *  "id": "wkkjdkkwk778",
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzc2tkaWJta201NTQ3IiwiaWF0IjoxNjI3MjA2MjYyLCJleHAiOjE2Mjc4MTEwNjIsImlzcyI6Imt1YWFhLm5ldCIsInN1YiI6IlVzZXIgSW5mby4ifQ.CSZgkrynztRxt0Qsz69msWt1NUj62eSQIEuXhb4J814"
 * }
 * @example response - 401 - LOGIN_FAILED
 * {
 *  "error": "LOGIN_FAILED",
 *  "msg": "Wrong password.."
 * }
 * @example response - 401 - LOGIN_FAILED
 * {
 *  "error": "LOGIN_FAILED",
 *  "msg": "Username does not exist."
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

/**
 * POST /auth/logout
 * @tags Auth
 * @summary Logout the user by making the authorized token expire
 * @param {LogoutForm} request.body.required - Logout Form
 * @return {object} 200 - Returns success message
 * @return {object} 401 - Returns error message for unauthorized request
 * @return {object} 403 - Returns error message for forbidden request of given users
 * @return {object} 500 - Returns error message for internal server error
 * @example response - 200 - LOGOUT_SUCCESS
 * {
 *  "msg": "Logout Successfully"
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