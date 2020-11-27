import { RequestHandler } from "express";

export const test: RequestHandler<{ a: string }, any, { id: string }> = (
  req,
  res
) => {
  res.send("GET /blog/");
};

export default test;
