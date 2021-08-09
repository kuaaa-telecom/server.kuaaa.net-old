import path from 'path';

import { RequestHandler } from 'express';

const msg: string = 'GET /images/';

const addImage: RequestHandler = async (req, res, next) => {
  console.log(req.file);
  res.send(msg + 'addImage');
  return next();
};

const getImage: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const dirname = path.resolve();
  const fullPath = path.join(dirname, 'src/res/image/' + id);
  console.log(fullPath);
  return res.status(200).sendFile(fullPath);
};

const test: RequestHandler = (req, res, next) => {
  res.send(msg);
  return next();
};

export { test, addImage, getImage };
