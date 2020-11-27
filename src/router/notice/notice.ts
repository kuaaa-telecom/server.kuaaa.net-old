import { Request, Response, RequestHandler, NextFunction } from "express";

const msg: String = "GET /notice/";

const test: RequestHandler = (_req, _res, next) => {
  _res.send(msg);
  return next();
};

export default test;
