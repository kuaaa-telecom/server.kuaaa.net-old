import { createConnection } from 'typeorm';

import User from './model/user';
import Auth from './model/auth';
import ExpiredToken from './model/expiredToken';
import Article from './model/article';
import Image from './model/image';

const initConnection = async () => {
  await createConnection({
    type: 'sqlite',
    name: 'default',
    database: ':memory:',
    entities: [User, Auth, ExpiredToken, Article, Image],
    synchronize: true,
    logging: 'all',
  });
};

export default initConnection;
