// Attaching plugins to express app.
import Express from 'express';
import router from './router';
import initConnection from './lib/db';

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Routing
app.use('/', router);

// DB
initConnection();

export default app;
