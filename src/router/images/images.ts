import { RequestHandler } from 'express';

const msg: string = 'GET /images/';

const addImage: RequestHandler = async (req, res, next) => {
  res.send(msg + 'addImage');
  return next();
};

const test: RequestHandler = (req, res, next) => {
  res.send(msg);
  return next();
};

export { test, addImage };
