import crypto from 'crypto';
import util from 'util';
import jwt from 'jsonwebtoken';

import { CustomError } from './error';
import { getRepository } from 'typeorm';

import ExpiredToken from './model/expiredToken';

const pbkdf2 = util.promisify(crypto.pbkdf2);
const randomBytes = util.promisify(crypto.randomBytes);
const KEY_LEN = 512;

const jwtSecret = process.env.JWT_SECRET ?? 'DEV_TEST';

const generatePassword = async (password: string) => {
  const ITER = 123456;
  const ALGO = 'sha512';
  const salt = await randomBytes(16);
  const digest = await pbkdf2(password, salt, ITER, KEY_LEN, ALGO);
  return `${ALGO}:${salt.toString('base64')}:${ITER}:${KEY_LEN}:${digest.toString('base64')}`;
};

const comparePassword = async (password: string, storedPassword: string) => {
  const [algo, encodedSalt, iterStr, keylenStr, encodedDigest] = storedPassword.split(':');
  const iter = parseInt(iterStr, 10);
  const keylen = parseInt(keylenStr, 10);
  const salt = Buffer.from(encodedSalt, 'base64');
  const digest = Buffer.from(encodedDigest, 'base64');
  const hashed = await pbkdf2(password, salt, iter, keylen, algo);
  return Buffer.compare(hashed, digest) === 0;
};

const signJWT = (uid: number): string => {
  try{
    const token = jwt.sign(
      {
        uid
      },
      jwtSecret,
      {
        expiresIn: '7d',
        issuer: 'kuaaa.net',
        subject: 'User Info.',
      }
    );
    return token;
  }catch (err) {
    throw new Error('SIGN_FAILED');
  }
};

const verifyJWT = async (token: string) => {
  try{
    const decoded = jwt.verify(token, jwtSecret);
    console.log(decoded);
    //왜 string이면 안되는지...?
    if(typeof decoded === 'string') throw new Error('type is string');
    const rows = await getRepository(ExpiredToken).findOne({where: {token}});
    if (rows !== undefined) throw new CustomError('VERIFY_ERROR', 401, 'Token is Expired.');
    return decoded;
  }catch (err) {
    if(err instanceof CustomError) throw err;
    throw new Error('VERIFY_ERROR');
  }
};

export { generatePassword, comparePassword, signJWT, verifyJWT };
