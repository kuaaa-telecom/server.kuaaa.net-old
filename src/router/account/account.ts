import { RequestHandler } from 'express';
import { getConnection } from 'typeorm';

import { generatePassword, comparePassword } from '../../lib/auth';

import Auth from '../../lib/model/auth';
import User from '../../lib/model/user';

const err: string = 'GET /account/unregister is NOT implemented.';

const register: RequestHandler = async (req, res, next) => {
  const {
    id, pw, sid, belong, name, email,
  } = req.body;

  // Check if parameters are all set.
  const params: (String|undefined)[] = [id, pw, sid, belong, name, email];
  const invalid = params.filter((param) => param === undefined);
  if (invalid.length) {
    const code = '[INVALID] NULL_PARAM';
    const msg = `Following param(s) is(are) null: ${id ? '' : 'id '}${pw ? '' : 'pw '}${sid ? '' : 'sid '}${belong ? '' : 'belong '}${name ? '' : 'name '}${email ? '' : 'email'}`;
    res.status(400).json({ code, msg });
    return next();
  }
  // Check if each id, sid, email is duplicated.
  const db = getConnection();
  const rows = await db.getRepository(User).find({
    where: [
      { id },
      { sid },
      { email },
    ],
  });
  // TODO: Check duplication.

  // Prepare Query.
  const user = new User();
  user.id = id;
  user.name = name;
  user.sid = sid;
  user.belong = belong;
  user.email = email;

  const auth = new Auth();
  auth.uid = user;
  auth.digest = await generatePassword(pw);
  auth.oauth2 = false;

  // Do transaction.
  await db.getRepository(User).save(user);
  await db.getRepository(Auth).save(auth);

  return next();
};

const unregister: RequestHandler = (req, res, next) => {
  res.send(err);
  return next();
};

const login: RequestHandler = (req, res, next) => {
  res.send(err);
  return next();
};

const test: RequestHandler = async (req, res, next) => {
  const db = getConnection();
  const users = await db.getRepository(User).find();
  const auths = await db.getRepository(Auth).find();

  console.log(users);
  console.log(auths);
  return next();
};

export {
  register, unregister, test, login,
};
