/**
 * GET /users/
 * @tags Users
 * @summary Returns all users existing in kuaaa.net user DB
 * @return {object} 200 - Returns json containing all users
 * @return {object} 401 - Returns error message for unauthorized request
 * @return {object} 403 - Returns error message for forbidden request of given users
 * @return {object} 500 - Returns error message for internal server error
 * @example response - 200 - List of users
 * [
 *  {
 *      "uid": "5ef69f7b-a27e-4b8c-b7f4-c865cd79c35a",
 *      "id": "wkkjdkkwk778",
 *      "password": "(Encrypted Password)",
 *      "name": "BlackCow",
 *      "sid": "2018320201",
 *      "belong": "Computer Science & Engineering",
 *      "email": "wkkjdkkwk778@korea.ac.kr",
 *      "isActive": true,
 *      "createdAt": "2021-07-25T09:10:51.000Z",
 *      "updatedAt": "2021-07-25T09:10:51.000Z"
 *  },
 *  {
 *      "uid": "8f84a27a-23f0-42b2-a192-71837e967e70",
 *      "id": "sskdibmkm5547",
 *      "password": "(Encrypted Password)",
 *      "name": "WhiteCow",
 *      "sid": "2018320111",
 *      "belong": "Computer Science & Engineering",
 *      "email": "sskdibmkm5547@korea.ac.kr",
 *      "isActive": true,
 *      "createdAt": "2021-07-25T09:11:35.000Z",
 *      "updatedAt": "2021-07-25T09:11:35.000Z"
 *  }
 * ]
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
