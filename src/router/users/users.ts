import { RequestHandler } from 'express';
import { getConnection } from 'typeorm';

import { generatePassword, comparePassword } from '../../lib/auth';

import Auth from '../../lib/model/auth';
import User from '../../lib/model/user';


const register: RequestHandler = async (req, res, next) => {
  res.status(500).json({"msg":"Not implemented"});
  return next();
};

const unregister: RequestHandler = (req, res, next) => {
  return next();
};

const login: RequestHandler = (req, res, next) => {
  return next();
};

const test: RequestHandler = async (req, res, next) => {
  res.status(500).json({"msg":"Something went wrong..."})
  return next();
};

export {
  register, unregister, test, login,
};
