import Express from 'express';

import db from './lib/db';

import router from './router';

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/', router);

db.sequelize
  .sync()
  .then(() => { console.log('DB Sync done.'); })
  .catch((err:any) => { console.log(err); });

export default app;
