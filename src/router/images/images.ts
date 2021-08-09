import multer from 'multer';

import { RequestHandler } from 'express';

const msg: string = 'GET /images/';
const imageSave = multer({
  dest: 'image',
});

interface MulterRequest extends Request {
  file: any;
}

const addImage: RequestHandler = async (req, res, next) => {
  res.send(msg + 'addImage');
  return next();
};

const test: RequestHandler = (req, res, next) => {
  res.send(msg);
  return next();
};

export { test, addImage };
