// Attaching plugins to express app.
import Express from 'express';
import router from './router';

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/', router);

export default app;
