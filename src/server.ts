// Attaching plugins to express app.
import Express from 'express';
import initConnection from './lib/db';
import router from './router';

// DB
initConnection();

// Routing
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/', router);

export default app;
