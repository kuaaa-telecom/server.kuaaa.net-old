import { RequestHandler } from 'express';
import { getRepository } from 'typeorm';

import User from '../../lib/model/user';

//TODO: should check permission to call this method
const list: RequestHandler = async (req, res, next) => {
  const userList: User[] = await getRepository(User).find();
  console.log(userList);
  const va = userList[0];
  res.status(200).json(userList);
};

export { list };
