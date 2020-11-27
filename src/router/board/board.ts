import { RequestHandler } from 'express';

const msg: string = 'GET /board/';

const test: RequestHandler = (req, res, next) => {
  res.send(msg);
  return next();
};

export default test;
