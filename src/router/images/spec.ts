/**
 * A Upload Image form
 * @typedef {object} UploadImageForm
 * @property {string[]} image - Binary files to upload - Binary
 */

/**
 * POST /images/
 * @tags Images
 * @summary Upload single or multiple images and return image info.
 * @param {UploadImageForm} request.body.required - Request - multipart/form-data
 * @return {object} 200 - Returns image info
 * @return {object} 400 - Returns error message for no image in request
 * @return {object} 403 - Returns error message for forbidden request
 * @return {object} 500 - Returns error message for internal server error
 * @example response - 200 - UPLOAD_SUCCESS
 * {
 *  "msg": "Image Saved Successfully",
 *  "imageInfo": [
 *       {
 *         "id": "fad6c4b32695ff7e0a35f27fd42ba7b9",
 *          "mimetype": "image/jpeg",
 *          "size": 873901
 *       },
 *       {
 *          "id": "7c90a0d3684b49b68330c57013b6bed4",
 *          "mimetype": "image/png",
 *          "size": 113429
 *       }
 *  ]
 * }
 * @example response - 400 - BAD_REQUEST
 * {
 *  "error": "BAD_REQUEST",
 *  "msg": "Image does not exist in request"
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
 * GET /images/:id
 * @tags Images
 * @summary Get Image file by ID
 * @return {object} 200 - Returns image info
 * @return {object} 403 - Returns error message for forbidden request
 * @return {object} 404 - Returns error message when requested id does not exist in DB
 * @return {object} 500 - Returns error message for internal server error
 * @example response - 200 - UPLOAD_SUCCESS
 * image file
 * @example response - 403 - Forbidden
 * {
 *  "msg":"Forbidden request"
 * }
 * @example response - 404 - IMAGE_NOT_FOUND
 * {
 *  "error": "IMAGE_NOT_FOUND",
 *  "msg": "Image id does not exist in DB"
 * }
 * @example response - 500 - Internal Server error
 * {
 *  "msg":"Something went wrong..."
 * }
 */
