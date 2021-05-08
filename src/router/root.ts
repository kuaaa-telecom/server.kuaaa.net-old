// Landing page | Main page
import { RequestHandler } from 'express';

const msg = 'Hello KUAAA.<br>By Pngwna. @ 2021';

/**
 * GET /
 * @summary This is the root path of API Server 
 * @return {object} 200 - Hello message from server if it is working.
 * @example response - 200 - Hello message
 * {
 *  "msg":"Hello KUAAA.<br>By Pngwna. @ 2021"
 * }
 */
const main: RequestHandler = (req, res, next) => {
  res.status(200).json({msg});
  return next();
};

export default main;
