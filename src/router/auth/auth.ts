import { RequestHandler } from 'express';
import { getConnection } from 'typeorm';

import { generatePassword, comparePassword } from '../../lib/auth';

import Auth from '../../lib/model/auth';
import User from '../../lib/model/user';

export const test = () => {};