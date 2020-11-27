import { Request, Response, RequestHandler, NextFunction } from "express";

const msg = "Hello KUAAA.<br>By Pngwna. @ 2020";

const hello: RequestHandler = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  _res.send(msg);
  return next();
};

export default hello;
