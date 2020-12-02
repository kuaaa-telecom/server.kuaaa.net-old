import { createConnection } from 'typeorm';

import User from './model/user';
import Auth from './model/auth'

const initConnection = async () => {
  await createConnection({
    type: 'sqlite',
    name: 'memory',
    database: 'memory',
    entities: [
      User,
      Auth,
    ],
    synchronize: true,
    logging: 'all',
  });
};

export default initConnection;
